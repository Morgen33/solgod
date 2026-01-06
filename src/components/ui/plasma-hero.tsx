"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import NeuralNetworkCanvas from "./neural-network-canvas";

// --- CONFIGURATION ---
const params = {
  timeScale: 0.78,
  rotationSpeedX: 0.002,
  rotationSpeedY: 0.005,
  plasmaScale: 0.1404,
  plasmaBrightness: 1.31,
  voidThreshold: 0.072,
  colorDeep: 0x001433,
  colorMid: 0x0084ff,
  colorBright: 0x00ffe1,
  shellColor: 0x0066ff,
  shellOpacity: 0.41,
};

// --- GLSL NOISE FUNCTIONS ---
const noiseFunctions = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  float fbm(vec3 p) {
    float total = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 3; i++) {
      total += snoise(p * frequency) * amplitude;
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return total;
  }
`;

// Intro animation config
const introConfig = {
  duration: 2.5,
  startZ: 12,
  endZ: 2.4,
  startScale: 0.2,
  endScale: 1.0,
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
};

export default function PlasmaHero({
  title = "SOLGODS",
  subtitle = "NFTS",
  onEnter,
}: {
  title?: string;
  subtitle?: string;
  onEnter?: () => void;
}) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    // Start camera far back for intro animation
    camera.position.z = introConfig.startZ;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 20;

    // Main group for rotation
    const mainGroup = new THREE.Group();
    mainGroup.scale.setScalar(introConfig.startScale); // Start small
    scene.add(mainGroup);

    // Light
    const pointLight = new THREE.PointLight(0x0088ff, 2.0, 10);
    mainGroup.add(pointLight);

    // Shell shaders
    const shellShader = {
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main() {
          float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), 2.5);
          gl_FragColor = vec4(uColor, fresnel * uOpacity);
        }
      `,
    };

    // Shell geometry
    const shellGeo = new THREE.SphereGeometry(1.0, 64, 64);

    const shellBackMat = new THREE.ShaderMaterial({
      vertexShader: shellShader.vertexShader,
      fragmentShader: shellShader.fragmentShader,
      uniforms: {
        uColor: { value: new THREE.Color(0x000055) },
        uOpacity: { value: 0.3 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });

    const shellFrontMat = new THREE.ShaderMaterial({
      vertexShader: shellShader.vertexShader,
      fragmentShader: shellShader.fragmentShader,
      uniforms: {
        uColor: { value: new THREE.Color(params.shellColor) },
        uOpacity: { value: params.shellOpacity },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      depthWrite: false,
    });

    mainGroup.add(new THREE.Mesh(shellGeo, shellBackMat));
    mainGroup.add(new THREE.Mesh(shellGeo, shellFrontMat));

    // Plasma material
    const plasmaGeo = new THREE.SphereGeometry(0.998, 128, 128);
    const plasmaMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: params.plasmaScale },
        uBrightness: { value: params.plasmaBrightness },
        uThreshold: { value: params.voidThreshold },
        uColorDeep: { value: new THREE.Color(params.colorDeep) },
        uColorMid: { value: new THREE.Color(params.colorMid) },
        uColorBright: { value: new THREE.Color(params.colorBright) },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uScale;
        uniform float uBrightness;
        uniform float uThreshold;
        uniform vec3 uColorDeep;
        uniform vec3 uColorMid;
        uniform vec3 uColorBright;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        ${noiseFunctions}
        void main() {
          vec3 p = vPosition * uScale;
          vec3 q = vec3(
            fbm(p + vec3(0.0, uTime * 0.05, 0.0)),
            fbm(p + vec3(5.2, 1.3, 2.8) + uTime * 0.05),
            fbm(p + vec3(2.2, 8.4, 0.5) - uTime * 0.02)
          );
          float density = fbm(p + 2.0 * q);
          float t = (density + 0.4) * 0.8;
          float alpha = smoothstep(uThreshold, 0.7, t);
          vec3 cWhite = vec3(1.0, 1.0, 1.0);
          vec3 color = mix(uColorDeep, uColorMid, smoothstep(uThreshold, 0.5, t));
          color = mix(color, uColorBright, smoothstep(0.5, 0.8, t));
          color = mix(color, cWhite, smoothstep(0.8, 1.0, t));
          float facing = dot(normalize(vNormal), normalize(vViewPosition));
          float depthFactor = (facing + 1.0) * 0.5;
          float finalAlpha = alpha * (0.02 + 0.98 * depthFactor);
          gl_FragColor = vec4(color * uBrightness, finalAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const plasmaMesh = new THREE.Mesh(plasmaGeo, plasmaMat);
    mainGroup.add(plasmaMesh);

    // Particles
    const pCount = 600;
    const pPos = new Float32Array(pCount * 3);
    const pSizes = new Float32Array(pCount);
    const sphereRadius = 0.95;

    for (let i = 0; i < pCount; i++) {
      const r = sphereRadius * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = r * Math.cos(phi);
      pSizes[i] = Math.random();
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("aSize", new THREE.BufferAttribute(pSizes, 1));

    const pMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        uniform float uTime;
        attribute float aSize;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.2 + pos.x) * 0.02;
          pos.x += cos(uTime * 0.15 + pos.z) * 0.02;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          float baseSize = 8.0 * aSize + 4.0;
          gl_PointSize = baseSize * (1.0 / -mvPosition.z);
          vAlpha = 0.8 + 0.2 * sin(uTime + aSize * 10.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float dist = length(uv);
          if(dist > 0.5) discard;
          float glow = 1.0 - (dist * 2.0);
          glow = pow(glow, 1.8);
          gl_FragColor = vec4(uColor, glow * vAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(pGeo, pMat);
    mainGroup.add(particles);

    // Animation loop
    const clock = new THREE.Clock();
    let raf = 0;
    let introComplete = false;

    const animate = () => {
      const t = clock.getElapsedTime();

      // Intro animation: fly forward and scale up
      if (t < introConfig.duration) {
        const progress = t / introConfig.duration;
        const eased = introConfig.easeOutCubic(progress);
        
        // Interpolate camera Z position (far to near)
        camera.position.z = introConfig.startZ + (introConfig.endZ - introConfig.startZ) * eased;
        
        // Interpolate scale (small to full)
        const currentScale = introConfig.startScale + (introConfig.endScale - introConfig.startScale) * eased;
        mainGroup.scale.setScalar(currentScale);
        
        // Faster rotation during approach, slowing down as it settles
        const rotationMultiplier = 1 + (1 - eased) * 2;
        mainGroup.rotation.x += params.rotationSpeedX * rotationMultiplier;
        mainGroup.rotation.y += params.rotationSpeedY * rotationMultiplier;
      } else {
        // After intro, normal rotation
        if (!introComplete) {
          introComplete = true;
          camera.position.z = introConfig.endZ;
          mainGroup.scale.setScalar(introConfig.endScale);
          setShowContent(true);
        }
        mainGroup.rotation.x += params.rotationSpeedX;
        mainGroup.rotation.y += params.rotationSpeedY;
      }

      plasmaMat.uniforms.uTime.value = t * params.timeScale;
      pMat.uniforms.uTime.value = t;
      plasmaMesh.rotation.y = t * 0.08;

      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      shellGeo.dispose();
      shellBackMat.dispose();
      shellFrontMat.dispose();
      plasmaGeo.dispose();
      plasmaMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Neural Network Background */}
      <NeuralNetworkCanvas className="absolute inset-0 z-0" />

      {/* Plasma WebGL mount */}
      <div ref={mountRef} className="absolute inset-0 z-10" />

      {/* Curved Text Inside Orb */}
      <div 
        className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-[60vmin] h-[60vmin] max-w-[400px] max-h-[400px]"
        >
          <defs>
            {/* Curve for SOLGODS - near top of the ball */}
            <path
              id="curveTop"
              d="M 60,160 Q 200,80 340,160"
              fill="none"
            />
            {/* Curve for NFTS - right under SOLGODS */}
            <path
              id="curveBottom"
              d="M 80,210 Q 200,150 320,210"
              fill="none"
            />
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* SOLGODS curved text */}
          <text
            fill="white"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "38px",
              fontWeight: 900,
              letterSpacing: "0.12em",
              filter: "url(#glow)",
            }}
          >
            <textPath
              href="#curveTop"
              startOffset="50%"
              textAnchor="middle"
            >
              {title}
            </textPath>
          </text>
          
          {/* NFTS curved text */}
          <text
            fill="rgba(255,255,255,0.7)"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "0.3em",
              filter: "url(#glow)",
            }}
          >
            <textPath
              href="#curveBottom"
              startOffset="50%"
              textAnchor="middle"
            >
              {subtitle}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Enter Button */}
      <div 
        className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-1000 delay-300 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="mt-[45vh]">
          <button
            onClick={onEnter}
            className="pointer-events-auto px-8 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 active:opacity-80 transition-opacity"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Enter
          </button>
        </div>
      </div>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-5" />
    </div>
  );
}
