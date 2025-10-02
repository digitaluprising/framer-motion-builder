'use client';

import { motion } from 'motion/react';
import { AnimationConfig } from '@/app/page';

interface AnimationPreviewProps {
  config: AnimationConfig;
}

export default function AnimationPreview({ config }: AnimationPreviewProps) {
  const getAnimationProps = () => {
    const animatedProps = {
      x: config.animated.x,
      y: config.animated.y,
      scale: config.animated.scale,
      rotate: config.animated.rotate,
      skewX: config.animated.skewX,
      skewY: config.animated.skewY,
      opacity: config.animated.opacity,
      backgroundColor: config.animated.backgroundColor,
      borderRadius: config.animated.borderRadius,
    };

    const initialProps = {
      x: config.initial.x,
      y: config.initial.y,
      scale: config.initial.scale,
      rotate: config.initial.rotate,
      skewX: config.initial.skewX,
      skewY: config.initial.skewY,
      opacity: config.initial.opacity,
      backgroundColor: config.initial.backgroundColor,
      borderRadius: config.initial.borderRadius,
    };

    const transitionProps = {
      duration: config.transition.duration,
      delay: config.transition.delay,
      ease: config.transition.ease,
    };

    switch (config.animationType) {
      case 'hover':
        return {
          whileHover: animatedProps,
          initial: initialProps,
          transition: transitionProps,
        };
      case 'click':
        return {
          whileTap: animatedProps,
          initial: initialProps,
          transition: transitionProps,
        };
      case 'loop':
        return {
          animate: animatedProps,
          initial: initialProps,
          transition: {
            ...transitionProps,
            repeat: Infinity,
            repeatType: 'reverse' as const,
          },
        };
      case 'onMount':
        return {
          initial: initialProps,
          animate: animatedProps,
          transition: transitionProps,
        };
      default:
        return {
          initial: initialProps,
          animate: animatedProps,
          transition: transitionProps,
        };
    }
  };

  return (
    <div className="h-full bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] flex flex-col">
      <div className="p-4 border-b border-[#2a2a2a]">
        <h3 className="text-lg font-semibold text-white">Preview</h3>
      </div>
      <div className="flex-1 flex items-center justify-center p-4-sm">
        <motion.div
          className="w-32 h-32 flex items-center justify-center text-white font-semibold text-lg cursor-pointer select-none"
          {...(getAnimationProps() as Record<string, unknown>)}
        >
          {config.animationType === 'hover' && 'Hover me!'}
          {config.animationType === 'click' && 'Click me!'}
          {config.animationType === 'loop' && 'Looping'}
          {config.animationType === 'onMount' && 'Animate'}
        </motion.div>
      </div>
    </div>
  );
}
