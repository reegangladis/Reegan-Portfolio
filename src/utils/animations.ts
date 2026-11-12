import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Checks if reduced motion is requested
 */
export const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Common easing curves
 */
export const EASING = {
  smooth: 'power3.out',
  cinematic: 'power4.out',
  expo: 'expo.out',
  elastic: 'elastic.out(1, 0.75)',
};

/**
 * Fade up animation for elements on scroll or mount
 */
export const animateFadeUp = (
  targets: gsap.DOMTarget,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    scrollTrigger?: ScrollTrigger.Vars | null;
  } = {}
) => {
  if (isReducedMotion()) {
    return gsap.set(targets, { opacity: 1, y: 0 });
  }

  const {
    y = 40,
    duration = 1,
    delay = 0,
    stagger = 0.1,
    scrollTrigger = null,
  } = options;

  const config: gsap.TweenVars = {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease: EASING.smooth,
  };

  if (scrollTrigger) {
    config.scrollTrigger = scrollTrigger;
  }

  return gsap.from(targets, config);
};

/**
 * Staggered entrance for cards / grid items
 */
export const animateStaggerGrid = (
  targets: gsap.DOMTarget,
  options: {
    delay?: number;
    stagger?: number;
    trigger?: Element | string;
  } = {}
) => {
  if (isReducedMotion()) {
    return gsap.set(targets, { opacity: 1, y: 0 });
  }

  const { delay = 0, stagger = 0.08, trigger } = options;

  const vars: gsap.TweenVars = {
    opacity: 0,
    y: 30,
    scale: 0.98,
    duration: 0.8,
    delay,
    stagger,
    ease: EASING.smooth,
  };

  if (trigger) {
    vars.scrollTrigger = {
      trigger,
      start: 'top 85%',
      once: true,
    };
  }

  return gsap.from(targets, vars);
};

/**
 * Character or word split text reveal animation
 */
export const animateTextSplit = (
  targets: gsap.DOMTarget,
  options: {
    delay?: number;
    stagger?: number;
  } = {}
) => {
  if (isReducedMotion()) {
    return gsap.set(targets, { opacity: 1, y: 0 });
  }

  const { delay = 0.1, stagger = 0.03 } = options;

  return gsap.fromTo(
    targets,
    { opacity: 0, y: 24, rotateX: -20 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.9,
      delay,
      stagger,
      ease: EASING.cinematic,
    }
  );
};

/**
 * Image or card clip-path reveal
 */
export const animateClipReveal = (
  target: gsap.DOMTarget,
  options: {
    delay?: number;
    duration?: number;
  } = {}
) => {
  if (isReducedMotion()) {
    return gsap.set(target, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 });
  }

  const { delay = 0, duration = 1.2 } = options;

  return gsap.fromTo(
    target,
    {
      clipPath: 'inset(100% 0% 0% 0%)',
      opacity: 0.5,
      scale: 1.05,
    },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: EASING.expo,
    }
  );
};

