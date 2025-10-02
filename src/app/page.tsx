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
  const [showCredits, setShowCredits] = useState(false);

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
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Prototype animations with Framer Motion
            </div>
            <button
              onClick={() => setShowCredits(true)}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Credits
            </button>
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

      {/* Credits Modal */}
      {showCredits && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Credits</h3>
              <button
                onClick={() => setShowCredits(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <h4 className="font-medium text-white mb-2">Built with</h4>
                <ul className="space-y-1 ml-4">
                  <li>• <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Next.js</a> - React framework</li>
                  <li>• <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Framer Motion</a> - Animation library</li>
                  <li>• <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Tailwind CSS</a> - Styling</li>
                  <li>• <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">TypeScript</a> - Type safety</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">Easing Functions</h4>
                <p className="text-gray-400">
                  Easing functions inspired by <a href="https://easings.net" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">easings.net</a> - 
                  A comprehensive collection of easing functions for web animations.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">Features</h4>
                <ul className="space-y-1 ml-4 text-gray-400">
                  <li>• 60+ predefined easing functions</li>
                  <li>• Custom cubic-bezier support</li>
                  <li>• Animation presets</li>
                  <li>• Real-time preview</li>
                  <li>• Mobile responsive design</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">Project by</h4>
                <p className="text-gray-300">
                  <a 
                    href="https://www.tomhuynh.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Tom Huynh
                  </a>
                </p>
              </div>

              <div className="pt-4 border-t border-[#3a3a3a]">
                <p className="text-gray-500 text-xs">
                  Built with ❤️ for the animation community
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}