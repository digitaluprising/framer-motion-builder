'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function ExpandableSection({ 
  title, 
  children, 
  defaultExpanded = false 
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <motion.div 
      className="border border-[#2a2a2a] rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1
      }}
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 bg-[#2a2a2a] hover:bg-[#3a3a3a] focus:bg-[#3a3a3a] focus:outline-none transition-colors flex items-center justify-between text-left"
        transition={{
          duration: 0.15,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <motion.svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ 
              height: 0, 
              opacity: 0,
              y: -10
            }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              y: 0
            }}
            exit={{ 
              height: 0, 
              opacity: 0
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="overflow-hidden"
          >
            <motion.div 
              className="p-3 bg-[#1a1a1a]"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Export the Select and Slider components for use in other components
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
};
