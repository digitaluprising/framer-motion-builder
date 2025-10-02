'use client';

import { useState } from 'react';
import AnimationPreview from '@/components/AnimationPreview';
import AnimationControls from '@/components/AnimationControls';

export interface AnimationConfig {
  // Animation type
  animationType: 'hover' | 'click' | 'loop' | 'onMount';
  
  // Initial properties (starting state)
  initial: {
    x: number;
    y: number;
    scale: number;
    rotate: number;
    skewX: number;
    skewY: number;
    opacity: number;
    backgroundColor: string;
    borderRadius: number;
  };
  
  // Animated properties (target state)
  animated: {
    x: number;
    y: number;
    scale: number;
    rotate: number;
    skewX: number;
    skewY: number;
    opacity: number;
    backgroundColor: string;
    borderRadius: number;
  };
  
  // Transition settings
  transition: {
    duration: number;
    delay: number;
    ease: string | number[]; // Support for both string easings and custom cubic-bezier arrays
  };
}

const defaultConfig: AnimationConfig = {
  animationType: 'hover',
  initial: {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    opacity: 1,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
  },
  animated: {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    opacity: 1,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
  },
  transition: {
    duration: 0.5,
    delay: 0,
    ease: 'easeInOut',
  },
};

export default function Home() {
  const [config, setConfig] = useState<AnimationConfig>(defaultConfig);

  const updateConfig = (updates: Partial<AnimationConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="h-16 flex items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FM</span>
            </div>
            <h1 className="text-xl font-semibold text-white">
              Motion Builder
            </h1>
          </div>
          <div className="text-sm text-gray-400">
            Prototype animations with Framer Motion
          </div>
        </div>
      </header>
      
      {/* Main Content - Full height minus header */}
      <main className="pt-16 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-4rem)] p-2 gap-2">
          {/* Preview - Top on mobile, Right on desktop */}
          <div className="order-1 lg:order-2 h-[calc(50vh-2rem)] lg:h-[calc(100vh-4rem-1rem)]">
            <AnimationPreview config={config} />
          </div>
          
          {/* Controls - Bottom on mobile, Left on desktop */}
          <div className="order-2 lg:order-1 h-[calc(50vh-2rem)] lg:h-[calc(100vh-4rem-1rem)]">
            <AnimationControls config={config} onConfigChange={updateConfig} />
          </div>
        </div>
      </main>
    </div>
  );
}