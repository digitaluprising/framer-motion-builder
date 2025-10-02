import { AnimationConfig } from '@/app/page';

export interface AnimationPreset {
  id: string;
  name: string;
  description: string;
  category: 'micro-interactions' | 'page-transitions' | 'loading-states' | 'attention-grabbers' | 'smooth-reveals' | 'custom';
  config: AnimationConfig;
  thumbnail: string; // CSS class for visual representation
}

export const PRESET_CATEGORIES = {
  'micro-interactions': 'Micro-interactions',
  'page-transitions': 'Page Transitions', 
  'loading-states': 'Loading States',
  'attention-grabbers': 'Attention Grabbers',
  'smooth-reveals': 'Smooth Reveals',
  'custom': 'Custom Presets'
} as const;

export const ANIMATION_PRESETS: AnimationPreset[] = [
  // Micro-interactions
  {
    id: 'button-hover',
    name: 'Button Hover',
    description: 'Subtle lift and glow on hover',
    category: 'micro-interactions',
    thumbnail: 'bg-gradient-to-br from-blue-500 to-blue-600',
    config: {
      animationType: 'hover',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#3b82f6', borderRadius: 8
      },
      animated: {
        x: 0, y: -4, scale: 1.05, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#2563eb', borderRadius: 12
      },
      transition: { duration: 0.2, delay: 0, ease: 'easeOut' }
    }
  },
  {
    id: 'card-lift',
    name: 'Card Lift',
    description: 'Card elevation with shadow',
    category: 'micro-interactions',
    thumbnail: 'bg-gradient-to-br from-gray-700 to-gray-800',
    config: {
      animationType: 'hover',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#374151', borderRadius: 12
      },
      animated: {
        x: 0, y: -8, scale: 1.02, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#4b5563', borderRadius: 16
      },
      transition: { duration: 0.3, delay: 0, ease: 'easeInOut' }
    }
  },
  {
    id: 'icon-bounce',
    name: 'Icon Bounce',
    description: 'Playful bounce animation',
    category: 'micro-interactions',
    thumbnail: 'bg-gradient-to-br from-green-500 to-green-600',
    config: {
      animationType: 'click',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#10b981', borderRadius: 50
      },
      animated: {
        x: 0, y: 0, scale: 1.2, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#059669', borderRadius: 50
      },
      transition: { duration: 0.15, delay: 0, ease: 'backOut' }
    }
  },

  // Page transitions
  {
    id: 'slide-in-right',
    name: 'Slide In Right',
    description: 'Element slides in from the right',
    category: 'page-transitions',
    thumbnail: 'bg-gradient-to-br from-purple-500 to-purple-600',
    config: {
      animationType: 'onMount',
      initial: {
        x: 200, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 0, backgroundColor: '#8b5cf6', borderRadius: 8
      },
      animated: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#7c3aed', borderRadius: 8
      },
      transition: { duration: 0.6, delay: 0, ease: 'easeOut' }
    }
  },
  {
    id: 'fade-scale',
    name: 'Fade & Scale',
    description: 'Gentle fade in with scale up',
    category: 'page-transitions',
    thumbnail: 'bg-gradient-to-br from-pink-500 to-pink-600',
    config: {
      animationType: 'onMount',
      initial: {
        x: 0, y: 0, scale: 0.8, rotate: 0, skewX: 0, skewY: 0,
        opacity: 0, backgroundColor: '#ec4899', borderRadius: 8
      },
      animated: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#db2777', borderRadius: 8
      },
      transition: { duration: 0.5, delay: 0, ease: 'easeOut' }
    }
  },

  // Loading states
  {
    id: 'pulse',
    name: 'Pulse',
    description: 'Rhythmic pulsing animation',
    category: 'loading-states',
    thumbnail: 'bg-gradient-to-br from-orange-500 to-orange-600',
    config: {
      animationType: 'loop',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#f97316', borderRadius: 8
      },
      animated: {
        x: 0, y: 0, scale: 1.1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 0.7, backgroundColor: '#ea580c', borderRadius: 8
      },
      transition: { duration: 1, delay: 0, ease: 'easeInOut' }
    }
  },
  {
    id: 'spinner',
    name: 'Spinner',
    description: 'Continuous rotation',
    category: 'loading-states',
    thumbnail: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    config: {
      animationType: 'loop',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#06b6d4', borderRadius: 50
      },
      animated: {
        x: 0, y: 0, scale: 1, rotate: 360, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#0891b2', borderRadius: 50
      },
      transition: { duration: 1, delay: 0, ease: 'linear' }
    }
  },

  // Attention grabbers
  {
    id: 'shake',
    name: 'Shake',
    description: 'Attention-grabbing shake',
    category: 'attention-grabbers',
    thumbnail: 'bg-gradient-to-br from-red-500 to-red-600',
    config: {
      animationType: 'click',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#ef4444', borderRadius: 8
      },
      animated: {
        x: 10, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#dc2626', borderRadius: 8
      },
      transition: { duration: 0.1, delay: 0, ease: 'easeInOut' }
    }
  },
  {
    id: 'wiggle',
    name: 'Wiggle',
    description: 'Playful wiggle motion',
    category: 'attention-grabbers',
    thumbnail: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    config: {
      animationType: 'click',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#eab308', borderRadius: 8
      },
      animated: {
        x: 0, y: 0, scale: 1, rotate: 5, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#ca8a04', borderRadius: 8
      },
      transition: { duration: 0.2, delay: 0, ease: 'easeInOut' }
    }
  },

  // Smooth reveals
  {
    id: 'stagger-up',
    name: 'Stagger Up',
    description: 'Elements reveal with upward motion',
    category: 'smooth-reveals',
    thumbnail: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    config: {
      animationType: 'onMount',
      initial: {
        x: 0, y: 30, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 0, backgroundColor: '#6366f1', borderRadius: 8
      },
      animated: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#4f46e5', borderRadius: 8
      },
      transition: { duration: 0.4, delay: 0, ease: 'easeOut' }
    }
  },
  {
    id: 'morph',
    name: 'Morph',
    description: 'Shape and color transformation',
    category: 'smooth-reveals',
    thumbnail: 'bg-gradient-to-br from-teal-500 to-teal-600',
    config: {
      animationType: 'hover',
      initial: {
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#14b8a6', borderRadius: 8
      },
      animated: {
        x: 0, y: 0, scale: 1.1, rotate: 180, skewX: 0, skewY: 0,
        opacity: 1, backgroundColor: '#0d9488', borderRadius: 50
      },
      transition: { duration: 0.8, delay: 0, ease: 'easeInOut' }
    }
  }
];
