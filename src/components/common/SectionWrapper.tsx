import React, { useRef } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { animateFadeUp } from '../../utils/animations';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  animate?: boolean;
  withGlow?: boolean;
  withGrid?: boolean;
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  'aria-label'?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className,
  containerClassName,
  children,
  animate = true,
  withGlow = false,
  withGrid = false,
  spacing = 'lg',
  'aria-label': ariaLabel,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!animate || !contentRef.current) return;

      animateFadeUp(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [animate] }
  );

  const spacingStyles = {
    none: 'py-0',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-28 lg:py-32',
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-label={ariaLabel}
      className={clsx(
        'relative w-full overflow-hidden',
        spacingStyles[spacing],
        withGlow && 'ambient-glow',
        withGrid && 'bg-grid-pattern',
        className
      )}
    >
      <div
        ref={contentRef}
        className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}
      >
        {children}
      </div>
    </section>
  );
};

