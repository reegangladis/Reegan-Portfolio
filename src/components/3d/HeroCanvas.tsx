import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CyberSphere } from './CyberSphere';
import { isReducedMotion } from '../../utils/animations';

interface HeroCanvasProps {
  mousePosition?: { x: number; y: number };
}

/**
 * Static SVG fallback for mobile, reduced-motion, or devices without WebGL
 */
const StaticSphereFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[360px] flex items-center justify-center p-6">
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Outer glowing orbital ring */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin [animation-duration:35s]" />
        <div className="absolute inset-4 rounded-full border border-secondary/25 animate-spin [animation-duration:22s] [animation-direction:reverse]" />
        
        {/* Ambient radial blur */}
        <div className="absolute inset-10 rounded-full bg-gradient-radial from-primary/15 via-secondary/10 to-transparent blur-xl pointer-events-none" />

        {/* Neural Network SVG Core */}
        <svg
          viewBox="0 0 200 200"
          className="relative z-10 w-44 h-44 text-primary animate-pulse [animation-duration:4s]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbit Circles */}
          <circle cx="100" cy="100" r="85" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="100" cy="100" r="55" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
          <circle cx="100" cy="100" r="28" stroke="#00F0FF" strokeWidth="1.5" opacity="0.6" />

          {/* Interconnecting Nodes */}
          <line x1="100" y1="15" x2="60" y2="60" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
          <line x1="60" y1="60" x2="100" y2="100" stroke="#00F0FF" strokeWidth="1.2" opacity="0.7" />
          <line x1="100" y1="100" x2="140" y2="70" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="140" y1="70" x2="165" y2="120" stroke="#00F0FF" strokeWidth="1" opacity="0.5" />
          <line x1="100" y1="100" x2="70" y2="145" stroke="#00F0FF" strokeWidth="1.2" opacity="0.7" />
          <line x1="70" y1="145" x2="135" y2="155" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="135" y1="155" x2="100" y2="100" stroke="#00F0FF" strokeWidth="1" opacity="0.5" />

          {/* Glowing Points */}
          <circle cx="100" cy="15" r="3.5" fill="#00F0FF" />
          <circle cx="60" cy="60" r="4" fill="#8B5CF6" />
          <circle cx="100" cy="100" r="6" fill="#00F0FF" />
          <circle cx="140" cy="70" r="3.5" fill="#00F0FF" />
          <circle cx="165" cy="120" r="3.5" fill="#8B5CF6" />
          <circle cx="70" cy="145" r="4.5" fill="#00F0FF" />
          <circle cx="135" cy="155" r="4" fill="#8B5CF6" />
        </svg>

        {/* Center Tech Badge */}
        <div className="absolute bottom-2 text-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-surface-elevated/90 border border-primary/30">
            Neural Architecture
          </span>
        </div>
      </div>
    </div>
  );
};

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ mousePosition }) => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    // Test WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setHasWebGL(gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!isMounted || !hasWebGL || isReducedMotion()) {
    return <StaticSphereFallback />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] flex items-center justify-center">
      {/* Background soft ambient radial glow behind canvas */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-secondary/5 to-transparent blur-3xl pointer-events-none" />

      {/* Floating HUD corner indicators */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/70 tracking-widest hidden sm:flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
        <span>R3F // 3D_NEURAL_SPHERE</span>
      </div>

      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-text-muted hidden sm:block pointer-events-none">
        INTERACTIVE • 60 FPS • THREE.JS
      </div>

      <Suspense fallback={<StaticSphereFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6.8], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <CyberSphere mousePosition={mousePosition} />
        </Canvas>
      </Suspense>
    </div>
  );
};
