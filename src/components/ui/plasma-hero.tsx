import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NeuralNetworkCanvas from "./neural-network-canvas";
import solgodLogo from "@/assets/solgods-main-logo.png";

// Hero images with individual scale factors
import bastet from "@/assets/heroes/bastet-new.png";
import crimson from "@/assets/heroes/crimson.png";
import cyborg from "@/assets/heroes/cyborg.png";
import darkQueen from "@/assets/heroes/dark-queen.png";
import demon from "@/assets/heroes/demon.png";
import frost from "@/assets/heroes/frost.png";
import gothic from "@/assets/heroes/gothic.png";
import oni from "@/assets/heroes/oni.png";
import shiva from "@/assets/heroes/shiva.png";
import skullKing from "@/assets/heroes/skull-king.png";
import waterDemon from "@/assets/heroes/water-demon.png";
import cosmicKing from "@/assets/heroes/cosmic-king.png";
import cosmic from "@/assets/heroes/cosmic.png";
import marcus from "@/assets/heroes/marcus.png";
import antler from "@/assets/heroes/antler.png";
import athena from "@/assets/heroes/athena.png";
import solgod1of1 from "@/assets/heroes/solgod-1of1.png";

const heroImages = [
  { src: bastet, scale: 1.0 },
  { src: crimson, scale: 1.0 },
  { src: cyborg, scale: 1.0 },
  { src: darkQueen, scale: 1.0 },
  { src: demon, scale: 1.0 },
  { src: frost, scale: 1.0 },
  { src: gothic, scale: 1.0 },
  { src: oni, scale: 1.0 },
  { src: shiva, scale: 1.0 },
  { src: skullKing, scale: 1.0 },
  { src: waterDemon, scale: 1.0 },
  { src: cosmicKing, scale: 1.0 },
  { src: cosmic, scale: 1.0 },
  { src: marcus, scale: 1.0 },
  { src: antler, scale: 1.0 },
  { src: athena, scale: 1.0 },
  { src: solgod1of1, scale: 0.85 },
];

// Configuration parameters
const params = {
  timeScale: 0.15,
  rotationSpeedX: 0.03,
  plasmaScale: 2.8,
  plasmaBrightness: 1.4,
  voidThreshold: 0.42,
  colorDeep: new THREE.Color(0x1a0a2e),
  colorMid: new THREE.Color(0x4a1c6b),
  colorBright: new THREE.Color(0xff6b35),
  shellColor: new THREE.Color(0x8b5cf6),
  shellOpacity: 0.15,
};

// Shared GLSL noise functions
const noiseGLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
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
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
`;

// Intro animation configuration
const introConfig = {
  duration: 2.5,
  startZ: 8,
  endZ: 3.2,
  startScale: 0.3,
  endScale: 1.0,
};

interface PlasmaHeroProps {
  title?: string;
  subtitle?: string;
  onEnter?: () => void;
}

export default function PlasmaHero({ 
  title = "SOLGODS", 
  subtitle = "NFTS",
  onEnter 
}: PlasmaHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    shell: THREE.Mesh;
    plasma: THREE.Mesh;
    particles: THREE.Points;
    animationId: number;
    clock: THREE.Clock;
    introProgress: number;
  } | null>(null);

  const [showContent, setShowContent] = useState(false);
  const [showCharacter, setShowCharacter] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cycle through hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = introConfig.startZ;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Mobile detection
    const isMobile = window.innerWidth < 768;
    const ballYOffset = isMobile ? 0.35 : 0;
    const mobileEndZ = isMobile ? 3.8 : introConfig.endZ;

    // Shell (outer glow sphere)
    const shellGeometry = new THREE.SphereGeometry(1.15, 64, 64);
    const shellMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.FrontSide,
      uniforms: {
        uColor: { value: params.shellColor },
        uOpacity: { value: params.shellOpacity },
      },
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
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.0);
          gl_FragColor = vec4(uColor, fresnel * uOpacity);
        }
      `,
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    shell.position.y = ballYOffset;
    shell.scale.setScalar(introConfig.startScale);
    scene.add(shell);

    // Plasma sphere
    const plasmaGeometry = new THREE.SphereGeometry(1, 128, 128);
    const plasmaMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uColorDeep: { value: params.colorDeep },
        uColorMid: { value: params.colorMid },
        uColorBright: { value: params.colorBright },
        uScale: { value: params.plasmaScale },
        uBrightness: { value: params.plasmaBrightness },
        uVoidThreshold: { value: params.voidThreshold },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        ${noiseGLSL}
        uniform float uTime;
        uniform vec3 uColorDeep;
        uniform vec3 uColorMid;
        uniform vec3 uColorBright;
        uniform float uScale;
        uniform float uBrightness;
        uniform float uVoidThreshold;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;

        void main() {
          vec3 pos = vPosition * uScale;
          float noise1 = fbm(pos + uTime * 0.5);
          float noise2 = fbm(pos * 1.5 - uTime * 0.3);
          float noise3 = fbm(pos * 0.5 + vec3(uTime * 0.2));
          float combined = (noise1 + noise2 * 0.5 + noise3 * 0.25) / 1.75;
          combined = combined * 0.5 + 0.5;
          
          vec3 color;
          if (combined < 0.33) {
            color = mix(uColorDeep, uColorMid, combined * 3.0);
          } else if (combined < 0.66) {
            color = mix(uColorMid, uColorBright, (combined - 0.33) * 3.0);
          } else {
            color = mix(uColorBright, vec3(1.0), (combined - 0.66) * 1.5);
          }
          
          color *= uBrightness;
          
          float voidNoise = fbm(pos * 2.0 + uTime * 0.1);
          float voidMask = smoothstep(uVoidThreshold - 0.1, uVoidThreshold + 0.1, voidNoise);
          
          float alpha = mix(0.3, 0.95, combined) * (1.0 - voidMask * 0.5);
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });
    const plasma = new THREE.Mesh(plasmaGeometry, plasmaMaterial);
    plasma.position.y = ballYOffset;
    plasma.scale.setScalar(introConfig.startScale);
    scene.add(plasma);

    // Particles
    const particleCount = 500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 0.3;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + ballYOffset;
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.scale.setScalar(introConfig.startScale);
    scene.add(particles);

    const clock = new THREE.Clock();
    let introProgress = 0;

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      sceneRef.current!.animationId = animationId;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Intro animation
      if (introProgress < 1) {
        introProgress += delta / introConfig.duration;
        introProgress = Math.min(introProgress, 1);

        const eased = 1 - Math.pow(1 - introProgress, 3);
        const targetZ = isMobile ? mobileEndZ : introConfig.endZ;
        camera.position.z =
          introConfig.startZ + (targetZ - introConfig.startZ) * eased;

        const scale =
          introConfig.startScale +
          (introConfig.endScale - introConfig.startScale) * eased;
        shell.scale.setScalar(scale);
        plasma.scale.setScalar(scale);
        particles.scale.setScalar(scale);

        if (introProgress > 0.3 && !showContent) {
          setShowContent(true);
        }
        if (introProgress > 0.5 && !showCharacter) {
          setShowCharacter(true);
        }
      }

      // Update plasma
      plasmaMaterial.uniforms.uTime.value = elapsed * params.timeScale;

      // Rotate
      plasma.rotation.y += params.rotationSpeedX * delta;
      shell.rotation.y += params.rotationSpeedX * delta * 0.8;
      particles.rotation.y -= params.rotationSpeedX * delta * 0.5;

      renderer.render(scene, camera);
    };

    sceneRef.current = {
      scene,
      camera,
      renderer,
      shell,
      plasma,
      particles,
      animationId: 0,
      clock,
      introProgress,
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      renderer.dispose();
      plasmaGeometry.dispose();
      plasmaMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  const currentHero = heroImages[currentHeroIndex];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const baseSize = isMobile ? 135 : 108;
  const adjustedSize = baseSize * currentHero.scale;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden bg-black"
    >
      {/* Neural network background */}
      <div className="absolute inset-0 z-0">
        <NeuralNetworkCanvas />
      </div>

      {/* Three.js canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Hero character inside the orb */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
          showCharacter ? "opacity-100" : "opacity-0"
        }`}
        style={{ marginTop: isMobile ? "-12vh" : "0" }}
      >
        <div
          className={`transition-all duration-300 ${
            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <img
            src={currentHero.src}
            alt="SolGod Hero"
            style={{
              width: `${adjustedSize}vmin`,
              height: `${adjustedSize}vmin`,
              objectFit: "contain",
            }}
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Logo and Enter Button */}
      <div
        className={`absolute inset-x-0 bottom-0 z-30 flex flex-col items-center transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
          paddingBottom: "env(safe-area-inset-bottom, 20px)",
        }}
      >
        <div className="flex flex-col items-center pb-8 md:pb-12 pt-16 md:pt-24">
          <button
            onClick={onEnter}
            className="group cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105"
            aria-label="Enter SolGods"
          >
            <img
              src={solgodLogo}
              alt={title}
              className="w-48 md:w-64 lg:w-72 h-auto logo-pulse"
            />
          </button>
          <p className="text-white/60 text-sm mt-4 animate-pulse">
            Click to Enter
          </p>
        </div>
      </div>

      <style>{`
        @keyframes logo-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.4)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.3));
          }
        }
        .logo-pulse {
          animation: logo-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
