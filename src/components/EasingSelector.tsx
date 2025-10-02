'use client';

import { useState } from 'react';
import { EasingFunction, EASING_CATEGORIES, EASING_FUNCTIONS } from '@/types/easings';

interface EasingSelectorProps {
  value: string | number[];
  onChange: (easing: string | number[]) => void;
}

export default function EasingSelector({ value, onChange }: EasingSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof EASING_CATEGORIES>('basic');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customEasing, setCustomEasing] = useState('');

  const filteredEasings = EASING_FUNCTIONS.filter(easing => {
    const matchesCategory = easing.category === selectedCategory;
    const matchesSearch = easing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         easing.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEasingSelect = (easing: EasingFunction) => {
    onChange(easing.value);
    setShowCustomInput(false);
  };

  const handleCustomEasing = () => {
    if (customEasing.trim()) {
      // Parse cubic-bezier string to array format
      const match = customEasing.trim().match(/cubic-bezier\(([^)]+)\)/);
      if (match) {
        const values = match[1].split(',').map(v => parseFloat(v.trim()));
        if (values.length === 4 && values.every(v => !isNaN(v))) {
          onChange(values);
          setShowCustomInput(false);
          return;
        }
      }
      // If not a valid cubic-bezier, treat as string
      onChange(customEasing.trim());
      setShowCustomInput(false);
    }
  };

  const isCurrentEasing = (easing: EasingFunction) => {
    if (Array.isArray(easing.value) && Array.isArray(value)) {
      return easing.value.length === value.length && 
             easing.value.every((v, i) => v === value[i]);
    }
    return easing.value === value;
  };

  const getEasingPreview = (easing: EasingFunction) => {
    // Create a visual representation of the easing curve
    const isCustom = easing.category === 'custom';
    return (
      <div className={`w-8 h-4 rounded-sm flex items-center justify-center text-xs ${
        isCustom ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
      }`}>
        {easing.preview || 'curve'}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search easing functions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 text-sm bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Category Filter */}
      <div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(EASING_CATEGORIES).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as keyof typeof EASING_CATEGORIES)}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                selectedCategory === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Easing Grid */}
      <div className="max-h-48 overflow-y-auto space-y-2">
        {filteredEasings.length > 0 ? (
          filteredEasings.map((easing) => (
            <div
              key={easing.id}
              onClick={() => handleEasingSelect(easing)}
              className={`p-2 rounded-lg border cursor-pointer transition-all hover:scale-[1.01] ${
                isCurrentEasing(easing)
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-[#3a3a3a] bg-[#2a2a2a] hover:border-[#4a4a4a] hover:bg-[#3a3a3a]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getEasingPreview(easing)}
                  <div>
                    <div className="text-sm font-medium text-white">
                      {easing.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {easing.description}
                    </div>
                  </div>
                </div>
                {isCurrentEasing(easing) && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
              {easing.cubicBezier && (
                <div className="text-xs text-gray-500 mt-2 font-mono">
                  {easing.cubicBezier}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-4">
            <div className="text-gray-400 text-sm">
              {searchQuery ? 'No easing functions found matching your search.' : 'No easing functions available for this category.'}
            </div>
          </div>
        )}
      </div>

      {/* Custom Easing Input */}
      <div className="pt-4 border-t border-[#3a3a3a]">
        {!showCustomInput ? (
          <button
            onClick={() => setShowCustomInput(true)}
            className="w-full px-3 py-2 text-sm bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors"
          >
            + Add Custom Easing
          </button>
        ) : (
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Custom Cubic Bezier
              </label>
              <input
                type="text"
                value={customEasing}
                onChange={(e) => setCustomEasing(e.target.value)}
                placeholder="cubic-bezier(0.61, 1, 0.88, 1)"
                className="w-full p-2 text-sm bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors font-mono"
              />
              <div className="text-xs text-gray-500 mt-2">
                Enter a cubic-bezier function (e.g., cubic-bezier(0.61, 1, 0.88, 1))
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCustomEasing}
                disabled={!customEasing.trim()}
                className="flex-1 px-3 py-2 text-sm bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                Apply
              </button>
              <button
                onClick={() => {
                  setShowCustomInput(false);
                  setCustomEasing('');
                }}
                className="px-3 py-2 text-sm bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Current Selection Display */}
      {value && (
        <div className="pt-4 border-t border-[#3a3a3a]">
          <div className="text-xs text-gray-400 mb-2">Current Easing:</div>
          <div className="text-sm font-mono text-blue-400 bg-[#2a2a2a] p-2 rounded">
            {Array.isArray(value) ? `[${value.join(', ')}]` : value}
          </div>
        </div>
      )}
    </div>
  );
}
