'use client';

import { useState } from 'react';

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
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-2 py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isExpanded && (
        <div className="p-2 bg-[#1a1a1a]">
          {children}
        </div>
      )}
    </div>
  );
}
