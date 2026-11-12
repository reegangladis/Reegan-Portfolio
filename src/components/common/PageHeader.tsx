import React, { useRef } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { animateFadeUp, animateTextSplit } from '../../utils/animations';

interface PageHeaderProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  metadata?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  tag,
  title,
  titleHighlight,
  subtitle,
  metadata,
  align = 'left',
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (tagRef.current) {
        animateFadeUp(tagRef.current, { y: 15, duration: 0.6, delay: 0.1 });
      }
      if (titleRef.current) {
        animateTextSplit(titleRef.current, { delay: 0.2 });
      }
      if (subtitleRef.current) {
        animateFadeUp(subtitleRef.current, { y: 20, duration: 0.8, delay: 0.35 });
      }
      if (metaRef.current) {
        animateFadeUp(metaRef.current, { y: 15, duration: 0.6, delay: 0.45 });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={clsx(
        'relative mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-4xl',
        className
      )}
    >
      {/* Category / HUD Tag */}
      {tag && (
        <div
          ref={tagRef}
          className={clsx(
            'inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase',
            'bg-surface-elevated/80 border border-primary/30 text-primary shadow-[0_0_12px_rgba(0,240,255,0.15)]',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>{tag}</span>
        </div>
      )}

      {/* Main Animated Title */}
      <h1
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-text-primary leading-[1.1]"
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#55F7FF] to-secondary">
            {titleHighlight}
          </span>
        )}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p
          ref={subtitleRef}
          className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-normal"
        >
          {subtitle}
        </p>
      )}

      {/* Additional Metadata / Filters / Tags */}
      {metadata && (
        <div ref={metaRef} className="mt-6">
          {metadata}
        </div>
      )}
    </div>
  );
};

