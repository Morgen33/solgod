"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/** Text class - renders text and triggers lightning */
class Text {
  size: number;
  copy: string;
  color: string;
  delay: number;
  basedelay: number;
  bound: TextMetrics & { height: number };
  x: number;
  y: number;
  data: ImageData;
  index: number;
  cycles: number;

  constructor(options: { copy?: string; size?: number; color?: string; delay?: number } = {}, canvasWidth: number, canvasHeight: number) {
    const pool = document.createElement("canvas");
    const buffer = pool.getContext("2d")!;
    pool.width = canvasWidth;
    pool.height = canvasHeight;

    buffer.fillStyle = "#000000";
    buffer.fillRect(0, 0, pool.width, pool.height);

    this.size = options.size || Math.min(canvasWidth * 0.08, 120);
    this.copy = (options.copy || `SOLGODS NFTS`) + " ";
    this.color = options.color || "#cd96fe";
    this.delay = options.delay || 2;
    this.basedelay = this.delay;
    this.cycles = 0;

    buffer.font = `bold ${this.size}px "Comic Sans MS", cursive, sans-serif`;
    const metrics = buffer.measureText(this.copy);
    this.bound = { ...metrics, height: this.size * 1.5 } as TextMetrics & { height: number };

    // Center the text
    this.x = canvasWidth * 0.5 - this.bound.width * 0.5;
    this.y = canvasHeight * 0.5 - this.bound.height * 0.5;

    buffer.strokeStyle = this.color;
    buffer.lineWidth = 2;
    buffer.strokeText(this.copy, 0, this.bound.height * 0.8);

    this.data = buffer.getImageData(0, 0, Math.ceil(this.bound.width), Math.ceil(this.bound.height));
    this.index = 0;
  }

  update(thunder: Thunder[], particles: Particles[]) {
    if (this.index >= this.bound.width) {
      this.index = 0;
      this.cycles += 1;
      return;
    }

    const data = this.data.data;
    for (let i = this.index * 4; i < data.length; i += 4 * this.data.width) {
      const bitmap = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
      if (bitmap > 255 && Math.random() > 0.94) {
        const x = this.x + this.index;
        const y = this.y + i / this.bound.width / 4;
        thunder.push(new Thunder({ x, y }));

        if (Math.random() > 0.3) {
          particles.push(new Particles({ x, y }));
        }
      }
    }

    if (this.delay-- < 0) {
      this.index += 2;
      this.delay += this.basedelay;
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.putImageData(this.data, this.x, this.y, 0, 0, this.index, this.bound.height);
  }
}

/** Thunder class - lightning bolts */
class Thunder {
  lifespan: number;
  maxlife: number;
  color: string;
  glow: string;
  x: number;
  y: number;
  width: number;
  direct: number;
  max: number;
  segments: { direct: number; length: number; change: number }[];

  constructor(options: { x?: number; y?: number; lifespan?: number; color?: string; glow?: string; width?: number; direct?: number; max?: number } = {}) {
    this.lifespan = options.lifespan || Math.round(Math.random() * 10 + 10);
    this.maxlife = this.lifespan;
    this.color = options.color || "#fefefe";
    this.glow = options.glow || "#a463dd";
    this.x = options.x || Math.random() * window.innerWidth;
    this.y = options.y || Math.random() * window.innerHeight;
    this.width = options.width || 2;
    this.direct = options.direct || Math.random() * Math.PI * 2;
    this.max = options.max || Math.round(Math.random() * 10 + 20);

    this.segments = [...new Array(this.max)].map(() => ({
      direct: this.direct + (Math.PI * Math.random() * 0.2 - 0.1),
      length: Math.random() * 20 + 80,
      change: Math.random() * 0.04 - 0.02,
    }));
  }

  update(index: number, array: Thunder[]) {
    this.segments.forEach((s) => {
      s.direct += s.change;
      if (Math.random() > 0.96) s.change *= -1;
    });

    if (this.lifespan > 0) this.lifespan--;
    else array.splice(index, 1);
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.lifespan <= 0) return;

    ctx.beginPath();
    ctx.globalAlpha = this.lifespan / this.maxlife;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.shadowBlur = 32;
    ctx.shadowColor = this.glow;
    ctx.moveTo(this.x, this.y);

    let prev = { x: this.x, y: this.y };
    this.segments.forEach((s) => {
      const x = prev.x + Math.cos(s.direct) * s.length;
      const y = prev.y + Math.sin(s.direct) * s.length;
      prev = { x, y };
      ctx.lineTo(x, y);
    });

    ctx.stroke();
    ctx.closePath();
    ctx.shadowBlur = 0;

    const strength = Math.random() * 80 + 40;
    const light = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, strength);
    light.addColorStop(0, "rgba(164, 99, 221, 0.6)");
    light.addColorStop(0.1, "rgba(164, 99, 221, 0.2)");
    light.addColorStop(0.4, "rgba(164, 99, 221, 0.06)");
    light.addColorStop(0.65, "rgba(164, 99, 221, 0.01)");
    light.addColorStop(0.8, "rgba(164, 99, 221, 0)");

    ctx.beginPath();
    ctx.fillStyle = light;
    ctx.arc(this.x, this.y, strength, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

/** Spark class - individual spark particles */
class Spark {
  x: number;
  y: number;
  v: { direct: number; weight: number; friction: number };
  a: { change: number; min: number; max: number };
  g: { direct: number; weight: number };
  width: number;
  lifespan: number;
  maxlife: number;
  color: string;
  prev: { x: number; y: number };

  constructor(options: { x?: number; y?: number } = {}) {
    this.x = options.x || window.innerWidth * 0.5;
    this.y = options.y || window.innerHeight * 0.5;
    this.v = {
      direct: Math.random() * Math.PI * 2,
      weight: Math.random() * 14 + 2,
      friction: 0.88,
    };
    this.a = {
      change: Math.random() * 0.4 - 0.2,
      min: this.v.direct - Math.PI * 0.4,
      max: this.v.direct + Math.PI * 0.4,
    };
    this.g = {
      direct: Math.PI * 0.5 + (Math.random() * 0.4 - 0.2),
      weight: Math.random() * 0.25 + 0.25,
    };
    this.width = Math.random() * 3;
    this.lifespan = Math.round(Math.random() * 20 + 40);
    this.maxlife = this.lifespan;
    this.color = "#d0a7f0";
    this.prev = { x: this.x, y: this.y };
  }

  update(index: number, array: Spark[]) {
    this.prev = { x: this.x, y: this.y };

    this.x += Math.cos(this.v.direct) * this.v.weight;
    this.x += Math.cos(this.g.direct) * this.g.weight;
    this.y += Math.sin(this.v.direct) * this.v.weight;
    this.y += Math.sin(this.g.direct) * this.g.weight;

    if (this.v.weight > 0.2) this.v.weight *= this.v.friction;

    this.v.direct += this.a.change;
    if (this.v.direct > this.a.max || this.v.direct < this.a.min) this.a.change *= -1;

    if (this.lifespan > 0) this.lifespan--;
    else array.splice(index, 1);
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.lifespan <= 0) return;

    ctx.beginPath();
    ctx.globalAlpha = this.lifespan / this.maxlife;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.prev.x, this.prev.y);
    ctx.stroke();
    ctx.closePath();
  }
}

/** Particles class - collection of sparks */
class Particles {
  sparks: Spark[];

  constructor(options: { x?: number; y?: number; max?: number } = {}) {
    const max = options.max || Math.round(Math.random() * 10 + 10);
    this.sparks = [...new Array(max)].map(() => new Spark(options));
  }

  update() {
    this.sparks.forEach((s, i) => s.update(i, this.sparks));
  }

  render(ctx: CanvasRenderingContext2D) {
    this.sparks.forEach((s) => s.render(ctx));
  }
}

type Phase = "lightning" | "flashout" | "reveal";

interface LightningIntroProps {
  text?: string;
  cyclesBeforeReveal?: number;
  solgodImageSrc: string;
  onEnter?: () => void;
  buttonText?: string;
}

export default function LightningIntro({
  text = "SOLGODS NFTS",
  cyclesBeforeReveal = 2,
  solgodImageSrc,
  onEnter,
  buttonText = "Enter",
}: LightningIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  const thunderRef = useRef<Thunder[]>([]);
  const particlesRef = useRef<Particles[]>([]);
  const textRef = useRef<Text | null>(null);

  const [phase, setPhase] = useState<Phase>("lightning");

  const textOptions = useMemo(() => ({ copy: text }), [text]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();

    // Init text
    textRef.current = new Text(textOptions, canvas.width, canvas.height);

    const loop = () => {
      if (phase !== "lightning") return;

      // Update
      textRef.current?.update(thunderRef.current, particlesRef.current);
      thunderRef.current.forEach((l, i) => l.update(i, thunderRef.current));
      particlesRef.current.forEach((p) => p.update());

      // Render
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "screen";
      textRef.current?.render(ctx);
      thunderRef.current.forEach((l) => l.render(ctx));
      particlesRef.current.forEach((p) => p.render(ctx));

      // Transition trigger
      if ((textRef.current?.cycles || 0) >= cyclesBeforeReveal) {
        setPhase("flashout");
        return;
      }

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    const handleResize = () => {
      setSize();
      textRef.current = new Text(textOptions, canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [phase, cyclesBeforeReveal, textOptions]);

  // Flashout timing
  useEffect(() => {
    if (phase !== "flashout") return;

    const t1 = window.setTimeout(() => setPhase("reveal"), 900);
    return () => window.clearTimeout(t1);
  }, [phase]);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (phase !== "lightning") return;
    const x = e.clientX;
    const y = e.clientY;
    thunderRef.current.push(new Thunder({ x, y }));
    particlesRef.current.push(new Particles({ x, y }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Lightning canvas */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className={`absolute inset-0 transition-opacity duration-500 ${
          phase === "lightning" ? "opacity-100" : "opacity-0"
        }`}
        style={{ cursor: phase === "lightning" ? "crosshair" : "default" }}
      />

      {/* White flash overlay */}
      <div
        className={`absolute inset-0 bg-white pointer-events-none ${
          phase === "flashout" ? "animate-flicker" : "opacity-0"
        }`}
      />

      {/* Reveal layer */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          phase === "reveal" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "radial-gradient(ellipse at center, #1a0a2e 0%, #000000 70%)",
        }}
      >
        <div className="flex flex-col items-center gap-8 p-8">
          <img
            src={solgodImageSrc}
            alt="SolGod"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain rounded-2xl shadow-2xl animate-fade-in"
            style={{
              boxShadow: "0 0 60px rgba(164, 99, 221, 0.5), 0 0 120px rgba(122, 24, 209, 0.3)",
            }}
          />
          <button
            onClick={onEnter}
            className="px-12 py-4 text-xl font-bold text-white rounded-full transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{
              background: "linear-gradient(135deg, #7a18d1 0%, #a463dd 50%, #d0a7f0 100%)",
              boxShadow: "0 0 30px rgba(164, 99, 221, 0.5)",
              animationDelay: "300ms",
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Flicker keyframe styles */}
      <style>{`
        @keyframes flicker {
          0% { opacity: 1; }
          10% { opacity: 0.2; }
          20% { opacity: 0.9; }
          35% { opacity: 0.1; }
          50% { opacity: 0.7; }
          70% { opacity: 0.15; }
          100% { opacity: 0; }
        }
        .animate-flicker {
          animation: flicker 0.9s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
