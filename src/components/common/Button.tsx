import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { isReducedMotion } from '../../utils/animations';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  external = false,
  leftIcon,
  rightIcon,
  magnetic = false,
  className,
  children,
  onClick,
  ...rest
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Magnetic hover effect handler
  useEffect(() => {
    if (!magnetic || isReducedMotion()) return;

    const element = buttonRef.current;
    if (!element) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = mouseEvent.clientX - centerX;
      const distanceY = mouseEvent.clientY - centerY;

      // Limit magnetic pull to 12px
      const pullFactor = 0.28;
      setPosition({
        x: distanceX * pullFactor,
        y: distanceY * pullFactor,
      });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magnetic]);

  // Variant Styles
  const variantStyles = {
    primary:
      'bg-primary text-[#07090E] font-semibold hover:bg-[#33F3FF] shadow-glow-primary border border-[#55F7FF]',
    secondary:
      'bg-surface-elevated text-text-primary hover:bg-[#1C2436] hover:text-primary border border-surface-border hover:border-primary/50 shadow-subtle-card',
    outline:
      'bg-transparent text-text-primary hover:text-primary border border-surface-border hover:border-primary/50',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface/60 border border-transparent',
  };

  // Size Styles
  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 font-medium',
  };

  const combinedClasses = clsx(
    'relative inline-flex items-center justify-center transition-all duration-300 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer overflow-hidden',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const magneticStyle = magnetic
    ? {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'transform 0.1s linear',
      }
    : undefined;

  const content = (
    <>
      {/* Corner Cyber HUD Accents for primary & secondary */}
      {(variant === 'primary' || variant === 'secondary') && (
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {leftIcon && <span className="inline-flex shrink-0 items-center justify-center transition-transform group-hover:-translate-x-0.5 duration-300">{leftIcon}</span>}
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 items-center justify-center transition-transform group-hover:translate-x-0.5 duration-300">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        to={to}
        className={combinedClasses}
        style={magneticStyle}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={combinedClasses}
        style={magneticStyle}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={rest.type || 'button'}
      className={combinedClasses}
      style={magneticStyle}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
};
