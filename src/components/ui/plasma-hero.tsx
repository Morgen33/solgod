"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function PlasmaHero({
  title = "SOLGODS",
  subtitle = "NFTS",
  onEnter,
  imageSrc = "/solgod.png",
}: {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  onEnter?: () => void;
}) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 2.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Simple "blob" placeholder so you know it works
    const geo = new THREE.SphereGeometry(1, 128, 128);
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#00aaff"),
      emissive: new THREE.Color("#0044ff"),
      emissiveIntensity: 1.2,
      metalness: 0.2,
      roughness: 0.25,
    });
    const sphere = new THREE.Mesh(geo, mat);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 2.5);
    light.position.set(2, 2, 2);
    scene.add(light);

    let raf = 0;
    const tick = () => {
      sphere.rotation.y += 0.003;
      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* WebGL mount */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="select-none">
          <div
            className="text-6xl md:text-8xl font-black tracking-tight text-white"
            style={{ textShadow: "0 0 30px rgba(0,170,255,0.65)" }}
          >
            {title}
          </div>
          <div className="mt-2 text-xl md:text-2xl font-semibold text-white/80 tracking-[0.35em]">
            {subtitle}
          </div>
        </div>

        <img src={imageSrc} alt="SolGod" className="max-h-[45vh] w-auto" />

        <button
          onClick={onEnter}
          className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 active:opacity-80"
        >
          Enter
        </button>
      </div>

      {/* readability overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
    </div>
  );
}
