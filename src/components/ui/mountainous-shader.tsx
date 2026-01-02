"use client";

import React, { FC, useRef, useEffect, useState } from "react";

export interface FractalMountainProps {
  /** Animation speed multiplier */
  speed?: number;
  /** Number of FBM octaves */
  octaves?: number;
  /** Noise frequency scale */
  scale?: number;
  /** Canvas container CSS class */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
}

const vsSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fsSource = `
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float u_speed;
  uniform float u_octaves;
  uniform float u_scale;

  // Hash & noise functions
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p) * fract(p) * (3.0 - 2.0 * fract(p));
    float a = hash(i + vec2(0.0, 0.0));
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal Brownian Motion
  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    float freq = u_scale;
    for (int i = 0; i < 6; i++) {
      if (float(i) >= u_octaves) break;
      v += amp * noise(p * freq);
      freq *= 2.0;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = (2.0 * gl_FragCoord.xy - iResolution) / iResolution.y;
    uv.x += iTime * u_speed * 0.2;

    // Landscape height
    float h = fbm(uv * 1.5);

    // Sky gradient - purple to navy
    vec3 sky = mix(
      vec3(0.02, 0.02, 0.08),
      vec3(0.3, 0.1, 0.5),
      uv.y + 0.5
    );

    // Mountain silhouette - deep purple/navy
    float m = smoothstep(h - 0.01, h, uv.y + 0.2);
    vec3 mountain = vec3(0.08, 0.04, 0.18) * (1.0 - h);

    vec3 color = mix(sky, mountain, m);

    // Sun/moon glow - soft purple
    vec2 sunPos = vec2(0.0, 0.25);
    float dist = length(uv - sunPos);
    vec3 sun = vec3(0.6, 0.3, 0.9) * (0.08 / dist);
    color += sun;

    // Atmospheric fog
    color = mix(color, sky, smoothstep(0.3, 1.5, uv.y + h));

    gl_FragColor = vec4(color, 1.0);
  }
`;

const FractalMountains: FC<FractalMountainProps> = ({
  speed = 1,
  octaves = 5,
  scale = 2,
  className = "",
  ariaLabel = "Procedural fractal mountains background",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);
  const frameId = useRef<number>();
  const startTime = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      setError("WebGL not supported in this browser.");
      return;
    }

    // Shader compile helper
    const compileShader = (type: GLenum, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
        gl.deleteShader(sh);
        setError("Shader compile error – check console.");
        return null;
      }
      return sh;
    };

    // Compile VS and FS
    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    // Link program
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      setError("Program link error – check console.");
      return;
    }

    // Look up attribute & uniforms
    const posLoc = gl.getAttribLocation(program, "a_position");
    const resLoc = gl.getUniformLocation(program, "iResolution")!;
    const timeLoc = gl.getUniformLocation(program, "iTime")!;
    const speedLoc = gl.getUniformLocation(program, "u_speed")!;
    const octLoc = gl.getUniformLocation(program, "u_octaves")!;
    const scaleLoc = gl.getUniformLocation(program, "u_scale")!;

    // Full‐screen quad
    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1]),
      gl.STATIC_DRAW
    );

    // Resize handler
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    // Render loop
    const render = () => {
      if (error) return;
      const now = (Date.now() - startTime.current) * 0.001;

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, now);
      gl.uniform1f(speedLoc, speed);
      gl.uniform1f(octLoc, octaves);
      gl.uniform1f(scaleLoc, scale);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId.current = requestAnimationFrame(render);
    };
    frameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId.current!);
      window.removeEventListener("resize", resize);
    };
  }, [speed, octaves, scale, error]);

  return (
    <div className={`relative w-full h-full ${className}`} role="img" aria-label={ariaLabel}>
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background text-destructive">
          {error}
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default FractalMountains;
