import { useEffect, useRef } from "react";

export const FlowingBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(270 80% 20% / 0.4) 0%, transparent 50%)",
        }}
      />
      
      {/* Floating orbs */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "radial-gradient(circle, #7a18d1 0%, transparent 70%)",
          top: "-20%",
          left: "-10%",
          animation: "float-orb-1 25s ease-in-out infinite",
        }}
      />
      
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-25"
        style={{
          background: "radial-gradient(circle, #a463dd 0%, transparent 70%)",
          top: "30%",
          right: "-15%",
          animation: "float-orb-2 20s ease-in-out infinite",
        }}
      />
      
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-20"
        style={{
          background: "radial-gradient(circle, #4f0c9b 0%, transparent 70%)",
          bottom: "10%",
          left: "20%",
          animation: "float-orb-3 22s ease-in-out infinite",
        }}
      />

      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[60px] opacity-15"
        style={{
          background: "radial-gradient(circle, #d0a7f0 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "pulse-orb 8s ease-in-out infinite",
        }}
      />

      {/* Gold accent orb */}
      <div 
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
        style={{
          background: "radial-gradient(circle, #c9a24d 0%, transparent 70%)",
          bottom: "30%",
          right: "10%",
          animation: "float-orb-4 18s ease-in-out infinite",
        }}
      />

      {/* Mesh overlay for texture */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(270 80% 30% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(271 62% 40% / 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated gradient lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f0c9b" stopOpacity="0" />
            <stop offset="50%" stopColor="#a463dd" stopOpacity="1" />
            <stop offset="100%" stopColor="#4f0c9b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q250,30 500,50 T1000,50 T1500,50 T2000,50"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-flow-line"
          style={{ 
            animation: "flow-line 15s linear infinite",
            transformOrigin: "center",
          }}
        />
        <path
          d="M0,150 Q250,130 500,150 T1000,150 T1500,150 T2000,150"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="0.5"
          style={{ 
            animation: "flow-line 20s linear infinite reverse",
            opacity: 0.5,
          }}
        />
      </svg>

      <style>{`
        @keyframes float-orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, 30px) scale(1.05); }
          50% { transform: translate(20px, -20px) scale(0.95); }
          75% { transform: translate(-30px, 40px) scale(1.02); }
        }
        
        @keyframes float-orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 50px) scale(1.08); }
          66% { transform: translate(30px, -30px) scale(0.92); }
        }
        
        @keyframes float-orb-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.1); }
        }
        
        @keyframes float-orb-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-50px, -30px) scale(1.15); }
          80% { transform: translate(30px, 20px) scale(0.9); }
        }
        
        @keyframes pulse-orb {
          0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.25; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes flow-line {
          0% { transform: translateX(-500px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
