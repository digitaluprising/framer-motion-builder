export interface EasingFunction {
  id: string;
  name: string;
  description: string;
  category: 'basic' | 'ease' | 'back' | 'elastic' | 'bounce' | 'circular' | 'cubic' | 'expo' | 'quad' | 'quart' | 'quint' | 'sine' | 'custom';
  value: string | number[]; // The actual easing value for Framer Motion (string for built-in, array for custom)
  cubicBezier?: string; // CSS cubic-bezier equivalent for reference
  preview?: string; // Visual representation
}

export const EASING_CATEGORIES = {
  'basic': 'Basic',
  'ease': 'Ease',
  'back': 'Back',
  'elastic': 'Elastic',
  'bounce': 'Bounce',
  'circular': 'Circular',
  'cubic': 'Cubic',
  'expo': 'Exponential',
  'quad': 'Quadratic',
  'quart': 'Quartic',
  'quint': 'Quintic',
  'sine': 'Sine',
  'custom': 'Custom'
} as const;

// Comprehensive easing functions inspired by easings.net
export const EASING_FUNCTIONS: EasingFunction[] = [
  // Basic easings
  {
    id: 'linear',
    name: 'Linear',
    description: 'Constant speed',
    category: 'basic',
    value: 'linear',
    cubicBezier: 'cubic-bezier(0, 0, 1, 1)',
    preview: 'linear'
  },

  // Ease variations
  {
    id: 'ease',
    name: 'Ease',
    description: 'Default easing',
    category: 'ease',
    value: 'ease',
    cubicBezier: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    preview: 'ease'
  },
  {
    id: 'easeIn',
    name: 'Ease In',
    description: 'Slow start',
    category: 'ease',
    value: 'easeIn',
    cubicBezier: 'cubic-bezier(0.42, 0, 1, 1)',
    preview: 'ease-in'
  },
  {
    id: 'easeOut',
    name: 'Ease Out',
    description: 'Slow end',
    category: 'ease',
    value: 'easeOut',
    cubicBezier: 'cubic-bezier(0, 0, 0.58, 1)',
    preview: 'ease-out'
  },
  {
    id: 'easeInOut',
    name: 'Ease In Out',
    description: 'Slow start and end',
    category: 'ease',
    value: 'easeInOut',
    cubicBezier: 'cubic-bezier(0.42, 0, 0.58, 1)',
    preview: 'ease-in-out'
  },

  // Back easings
  {
    id: 'backIn',
    name: 'Back In',
    description: 'Overshoots at start',
    category: 'back',
    value: 'backIn',
    cubicBezier: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
    preview: 'back-in'
  },
  {
    id: 'backOut',
    name: 'Back Out',
    description: 'Overshoots at end',
    category: 'back',
    value: 'backOut',
    cubicBezier: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    preview: 'back-out'
  },
  {
    id: 'backInOut',
    name: 'Back In Out',
    description: 'Overshoots at both ends',
    category: 'back',
    value: 'backInOut',
    cubicBezier: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    preview: 'back-in-out'
  },

  // Elastic easings
  {
    id: 'elasticIn',
    name: 'Elastic In',
    description: 'Bouncy start',
    category: 'elastic',
    value: [0.11, 0, 0.5, 0],
    cubicBezier: 'cubic-bezier(0.11, 0, 0.5, 0)',
    preview: 'elastic-in'
  },
  {
    id: 'elasticOut',
    name: 'Elastic Out',
    description: 'Bouncy end',
    category: 'elastic',
    value: [0.5, 1, 0.89, 1],
    cubicBezier: 'cubic-bezier(0.5, 1, 0.89, 1)',
    preview: 'elastic-out'
  },
  {
    id: 'elasticInOut',
    name: 'Elastic In Out',
    description: 'Bouncy both ways',
    category: 'elastic',
    value: [0.5, 0, 0.5, 1],
    cubicBezier: 'cubic-bezier(0.5, 0, 0.5, 1)',
    preview: 'elastic-in-out'
  },

  // Bounce easings
  {
    id: 'bounceIn',
    name: 'Bounce In',
    description: 'Bouncing start',
    category: 'bounce',
    value: [0.68, -0.55, 0.265, 1.55],
    cubicBezier: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    preview: 'bounce-in'
  },
  {
    id: 'bounceOut',
    name: 'Bounce Out',
    description: 'Bouncing end',
    category: 'bounce',
    value: [0.68, -0.55, 0.265, 1.55],
    cubicBezier: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    preview: 'bounce-out'
  },

  // Circular easings
  {
    id: 'circIn',
    name: 'Circular In',
    description: 'Circular curve in',
    category: 'circular',
    value: 'circIn',
    cubicBezier: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    preview: 'circular-in'
  },
  {
    id: 'circOut',
    name: 'Circular Out',
    description: 'Circular curve out',
    category: 'circular',
    value: 'circOut',
    cubicBezier: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    preview: 'circular-out'
  },
  {
    id: 'circInOut',
    name: 'Circular In Out',
    description: 'Circular curve both ways',
    category: 'circular',
    value: 'circInOut',
    cubicBezier: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    preview: 'circular-in-out'
  },

  // Cubic easings
  {
    id: 'cubicIn',
    name: 'Cubic In',
    description: 'Cubic curve in',
    category: 'cubic',
    value: [0.55, 0.055, 0.675, 0.19],
    cubicBezier: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    preview: 'cubic-in'
  },
  {
    id: 'cubicOut',
    name: 'Cubic Out',
    description: 'Cubic curve out',
    category: 'cubic',
    value: [0.215, 0.61, 0.355, 1],
    cubicBezier: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    preview: 'cubic-out'
  },
  {
    id: 'cubicInOut',
    name: 'Cubic In Out',
    description: 'Cubic curve both ways',
    category: 'cubic',
    value: [0.645, 0.045, 0.355, 1],
    cubicBezier: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    preview: 'cubic-in-out'
  },

  // Exponential easings
  {
    id: 'expoIn',
    name: 'Exponential In',
    description: 'Exponential curve in',
    category: 'expo',
    value: [0.95, 0.05, 0.795, 0.035],
    cubicBezier: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    preview: 'expo-in'
  },
  {
    id: 'expoOut',
    name: 'Exponential Out',
    description: 'Exponential curve out',
    category: 'expo',
    value: [0.19, 1, 0.22, 1],
    cubicBezier: 'cubic-bezier(0.19, 1, 0.22, 1)',
    preview: 'expo-out'
  },
  {
    id: 'expoInOut',
    name: 'Exponential In Out',
    description: 'Exponential curve both ways',
    category: 'expo',
    value: [1, 0, 0, 1],
    cubicBezier: 'cubic-bezier(1, 0, 0, 1)',
    preview: 'expo-in-out'
  },

  // Quadratic easings
  {
    id: 'quadIn',
    name: 'Quadratic In',
    description: 'Quadratic curve in',
    category: 'quad',
    value: [0.55, 0.085, 0.68, 0.53],
    cubicBezier: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    preview: 'quad-in'
  },
  {
    id: 'quadOut',
    name: 'Quadratic Out',
    description: 'Quadratic curve out',
    category: 'quad',
    value: [0.25, 0.46, 0.45, 0.94],
    cubicBezier: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    preview: 'quad-out'
  },
  {
    id: 'quadInOut',
    name: 'Quadratic In Out',
    description: 'Quadratic curve both ways',
    category: 'quad',
    value: [0.455, 0.03, 0.515, 0.955],
    cubicBezier: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    preview: 'quad-in-out'
  },

  // Quartic easings
  {
    id: 'quartIn',
    name: 'Quartic In',
    description: 'Quartic curve in',
    category: 'quart',
    value: [0.895, 0.03, 0.685, 0.22],
    cubicBezier: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    preview: 'quart-in'
  },
  {
    id: 'quartOut',
    name: 'Quartic Out',
    description: 'Quartic curve out',
    category: 'quart',
    value: [0.165, 0.84, 0.44, 1],
    cubicBezier: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    preview: 'quart-out'
  },
  {
    id: 'quartInOut',
    name: 'Quartic In Out',
    description: 'Quartic curve both ways',
    category: 'quart',
    value: [0.77, 0, 0.175, 1],
    cubicBezier: 'cubic-bezier(0.77, 0, 0.175, 1)',
    preview: 'quart-in-out'
  },

  // Quintic easings
  {
    id: 'quintIn',
    name: 'Quintic In',
    description: 'Quintic curve in',
    category: 'quint',
    value: [0.755, 0.05, 0.855, 0.06],
    cubicBezier: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    preview: 'quint-in'
  },
  {
    id: 'quintOut',
    name: 'Quintic Out',
    description: 'Quintic curve out',
    category: 'quint',
    value: [0.23, 1, 0.32, 1],
    cubicBezier: 'cubic-bezier(0.23, 1, 0.32, 1)',
    preview: 'quint-out'
  },
  {
    id: 'quintInOut',
    name: 'Quintic In Out',
    description: 'Quintic curve both ways',
    category: 'quint',
    value: [0.86, 0, 0.07, 1],
    cubicBezier: 'cubic-bezier(0.86, 0, 0.07, 1)',
    preview: 'quint-in-out'
  },

  // Sine easings
  {
    id: 'sineIn',
    name: 'Sine In',
    description: 'Sine curve in',
    category: 'sine',
    value: [0.47, 0, 0.745, 0.715],
    cubicBezier: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    preview: 'sine-in'
  },
  {
    id: 'sineOut',
    name: 'Sine Out',
    description: 'Sine curve out',
    category: 'sine',
    value: [0.39, 0.575, 0.565, 1],
    cubicBezier: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    preview: 'sine-out'
  },
  {
    id: 'sineInOut',
    name: 'Sine In Out',
    description: 'Sine curve both ways',
    category: 'sine',
    value: [0.445, 0.05, 0.55, 0.95],
    cubicBezier: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    preview: 'sine-in-out'
  },

  // Popular custom easings from easings.net
  {
    id: 'easeOutCubic',
    name: 'Ease Out Cubic',
    description: 'Smooth cubic curve out',
    category: 'custom',
    value: [0.33, 1, 0.68, 1],
    cubicBezier: 'cubic-bezier(0.33, 1, 0.68, 1)',
    preview: 'ease-out-cubic'
  },
  {
    id: 'easeInCubic',
    name: 'Ease In Cubic',
    description: 'Smooth cubic curve in',
    category: 'custom',
    value: [0.32, 0, 0.67, 0],
    cubicBezier: 'cubic-bezier(0.32, 0, 0.67, 0)',
    preview: 'ease-in-cubic'
  },
  {
    id: 'easeInOutCubic',
    name: 'Ease In Out Cubic',
    description: 'Smooth cubic curve both ways',
    category: 'custom',
    value: [0.65, 0, 0.35, 1],
    cubicBezier: 'cubic-bezier(0.65, 0, 0.35, 1)',
    preview: 'ease-in-out-cubic'
  },
  {
    id: 'easeOutQuart',
    name: 'Ease Out Quart',
    description: 'Smooth quartic curve out',
    category: 'custom',
    value: [0.25, 1, 0.5, 1],
    cubicBezier: 'cubic-bezier(0.25, 1, 0.5, 1)',
    preview: 'ease-out-quart'
  },
  {
    id: 'easeInQuart',
    name: 'Ease In Quart',
    description: 'Smooth quartic curve in',
    category: 'custom',
    value: [0.5, 0, 0.75, 0],
    cubicBezier: 'cubic-bezier(0.5, 0, 0.75, 0)',
    preview: 'ease-in-quart'
  },
  {
    id: 'easeInOutQuart',
    name: 'Ease In Out Quart',
    description: 'Smooth quartic curve both ways',
    category: 'custom',
    value: [0.76, 0, 0.24, 1],
    cubicBezier: 'cubic-bezier(0.76, 0, 0.24, 1)',
    preview: 'ease-in-out-quart'
  },
  {
    id: 'easeOutQuint',
    name: 'Ease Out Quint',
    description: 'Smooth quintic curve out',
    category: 'custom',
    value: [0.22, 1, 0.36, 1],
    cubicBezier: 'cubic-bezier(0.22, 1, 0.36, 1)',
    preview: 'ease-out-quint'
  },
  {
    id: 'easeInQuint',
    name: 'Ease In Quint',
    description: 'Smooth quintic curve in',
    category: 'custom',
    value: [0.64, 0, 0.78, 0],
    cubicBezier: 'cubic-bezier(0.64, 0, 0.78, 0)',
    preview: 'ease-in-quint'
  },
  {
    id: 'easeInOutQuint',
    name: 'Ease In Out Quint',
    description: 'Smooth quintic curve both ways',
    category: 'custom',
    value: [0.83, 0, 0.17, 1],
    cubicBezier: 'cubic-bezier(0.83, 0, 0.17, 1)',
    preview: 'ease-in-out-quint'
  },
  {
    id: 'easeOutExpo',
    name: 'Ease Out Expo',
    description: 'Smooth exponential curve out',
    category: 'custom',
    value: [0.16, 1, 0.3, 1],
    cubicBezier: 'cubic-bezier(0.16, 1, 0.3, 1)',
    preview: 'ease-out-expo'
  },
  {
    id: 'easeInExpo',
    name: 'Ease In Expo',
    description: 'Smooth exponential curve in',
    category: 'custom',
    value: [0.7, 0, 0.84, 0],
    cubicBezier: 'cubic-bezier(0.7, 0, 0.84, 0)',
    preview: 'ease-in-expo'
  },
  {
    id: 'easeInOutExpo',
    name: 'Ease In Out Expo',
    description: 'Smooth exponential curve both ways',
    category: 'custom',
    value: [0.87, 0, 0.13, 1],
    cubicBezier: 'cubic-bezier(0.87, 0, 0.13, 1)',
    preview: 'ease-in-out-expo'
  },
  {
    id: 'easeOutCirc',
    name: 'Ease Out Circ',
    description: 'Smooth circular curve out',
    category: 'custom',
    value: [0, 0.55, 0.45, 1],
    cubicBezier: 'cubic-bezier(0, 0.55, 0.45, 1)',
    preview: 'ease-out-circ'
  },
  {
    id: 'easeInCirc',
    name: 'Ease In Circ',
    description: 'Smooth circular curve in',
    category: 'custom',
    value: [0.55, 0, 1, 0.45],
    cubicBezier: 'cubic-bezier(0.55, 0, 1, 0.45)',
    preview: 'ease-in-circ'
  },
  {
    id: 'easeInOutCirc',
    name: 'Ease In Out Circ',
    description: 'Smooth circular curve both ways',
    category: 'custom',
    value: [0.85, 0, 0.15, 1],
    cubicBezier: 'cubic-bezier(0.85, 0, 0.15, 1)',
    preview: 'ease-in-out-circ'
  },
  {
    id: 'easeOutBack',
    name: 'Ease Out Back',
    description: 'Overshoots at end',
    category: 'custom',
    value: [0.34, 1.56, 0.64, 1],
    cubicBezier: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    preview: 'ease-out-back'
  },
  {
    id: 'easeInBack',
    name: 'Ease In Back',
    description: 'Overshoots at start',
    category: 'custom',
    value: [0.36, 0, 0.66, -0.56],
    cubicBezier: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
    preview: 'ease-in-back'
  },
  {
    id: 'easeInOutBack',
    name: 'Ease In Out Back',
    description: 'Overshoots at both ends',
    category: 'custom',
    value: [0.68, -0.6, 0.32, 1.6],
    cubicBezier: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    preview: 'ease-in-out-back'
  }
];
