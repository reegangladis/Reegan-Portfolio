import React, { useEffect, useState } from 'react';
import { isReducedMotion } from '../../utils/animations';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check for touch / reduced motion
    if (typeof window === 'undefined') return;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch || isReducedMotion());

    if (hasTouch || isReducedMotion()) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Smooth lerp for outer ring
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const follow = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Outer kinetic glow ring */}
      <div
        className="fixed top-0 left-0 rounded-full border border-primary/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
        style={{
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          borderColor: isHovering ? 'rgba(0, 240, 255, 0.8)' : 'rgba(139, 92, 246, 0.4)',
        }}
      />
    </div>
  );
};

