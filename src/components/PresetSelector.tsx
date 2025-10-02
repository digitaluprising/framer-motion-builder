'use client';

import { useState, useEffect } from 'react';
import { AnimationConfig } from '@/app/page';
import { AnimationPreset, PRESET_CATEGORIES, ANIMATION_PRESETS } from '@/types/presets';
import ExpandableSection from './ExpandableSection';

interface PresetSelectorProps {
  onPresetSelect: (config: AnimationConfig) => void;
  currentConfig: AnimationConfig;
}

export default function PresetSelector({ onPresetSelect, currentConfig }: PresetSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof PRESET_CATEGORIES>('micro-interactions');
  const [searchQuery, setSearchQuery] = useState('');
  const [customPresets, setCustomPresets] = useState<AnimationPreset[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [presetDescription, setPresetDescription] = useState('');

  // Load custom presets from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('framer-motion-presets');
    if (saved) {
      try {
        setCustomPresets(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load custom presets:', error);
      }
    }
  }, []);

  // Save custom presets to localStorage
  const saveCustomPresets = (presets: AnimationPreset[]) => {
    localStorage.setItem('framer-motion-presets', JSON.stringify(presets));
    setCustomPresets(presets);
  };

  const allPresets = [...ANIMATION_PRESETS, ...customPresets];
  
  const filteredPresets = allPresets.filter(preset => {
    const matchesCategory = selectedCategory === 'custom' 
      ? preset.id.startsWith('custom-')
      : preset.category === selectedCategory;
    const matchesSearch = preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         preset.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePresetSelect = (preset: AnimationPreset) => {
    onPresetSelect(preset.config);
  };

  const isCurrentConfig = (preset: AnimationPreset) => {
    return JSON.stringify(preset.config) === JSON.stringify(currentConfig);
  };

  const handleSavePreset = () => {
    if (!presetName.trim()) return;

    const newPreset: AnimationPreset = {
      id: `custom-${Date.now()}`,
      name: presetName.trim(),
      description: presetDescription.trim() || 'Custom animation preset',
      category: 'custom',
      thumbnail: 'bg-gradient-to-br from-purple-500 to-purple-600',
      config: currentConfig
    };

    const updatedPresets = [...customPresets, newPreset];
    saveCustomPresets(updatedPresets);
    
    setPresetName('');
    setPresetDescription('');
    setShowSaveDialog(false);
  };

  const handleDeletePreset = (presetId: string) => {
    const updatedPresets = customPresets.filter(p => p.id !== presetId);
    saveCustomPresets(updatedPresets);
  };

  return (
    <ExpandableSection title="Animation Presets" defaultExpanded={true}>
      <div className="space-y-4">
        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search presets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(PRESET_CATEGORIES).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as keyof typeof PRESET_CATEGORIES)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
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

        {/* Preset Grid */}
        <div className="grid grid-cols-1 gap-4 max-h-64 overflow-y-auto">
          {filteredPresets.length > 0 ? (
            filteredPresets.map((preset) => (
              <div
                key={preset.id}
                onClick={() => handlePresetSelect(preset)}
                className={`p-3 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] ${
                  isCurrentConfig(preset)
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-[#3a3a3a] bg-[#2a2a2a] hover:border-[#4a4a4a] hover:bg-[#3a3a3a]'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div className={`w-12 h-12 rounded-lg flex-shrink-0 ${preset.thumbnail} flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white/20 rounded-sm"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-white truncate">
                        {preset.name}
                        {preset.id.startsWith('custom-') && (
                          <span className="ml-2 text-xs text-purple-400">Custom</span>
                        )}
                      </h4>
                      <div className="flex items-center gap-2">
                        {isCurrentConfig(preset) && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        )}
                        {preset.id.startsWith('custom-') && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeletePreset(preset.id);
                            }}
                            className="text-red-400 hover:text-red-300 text-xs px-1 py-0.5 rounded hover:bg-red-500/10 transition-colors"
                            title="Delete preset"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                      {preset.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500 capitalize">
                        {preset.category.replace('-', ' ')}
                      </span>
                      <div className="text-xs text-gray-500">
                        {preset.config.animationType}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 text-sm">
                {searchQuery ? 'No presets found matching your search.' : 'No presets available for this category.'}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-[#3a3a3a]">
          <div className="flex gap-2">
            <button
              onClick={() => onPresetSelect({
                animationType: 'hover',
                initial: {
                  x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
                  opacity: 1, backgroundColor: '#3b82f6', borderRadius: 8
                },
                animated: {
                  x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, skewY: 0,
                  opacity: 1, backgroundColor: '#3b82f6', borderRadius: 8
                },
                transition: { duration: 0.5, delay: 0, ease: 'easeInOut' }
              })}
              className="flex-1 px-3 py-2 text-xs bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 rounded-lg transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setShowSaveDialog(true)}
              className="flex-1 px-3 py-2 text-xs bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors"
            >
              Save Current
            </button>
          </div>
        </div>
      </div>

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4-lg w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-white mb-4">Save Custom Preset</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preset Name
                </label>
                <input
                  type="text"
                  value={presetName}
                  onChange={(e) => setPresetName(e.target.value)}
                  placeholder="Enter preset name..."
                  className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  autoFocus
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description (optional)
                </label>
                <textarea
                  value={presetDescription}
                  onChange={(e) => setPresetDescription(e.target.value)}
                  placeholder="Describe this animation..."
                  rows={3}
                  className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowSaveDialog(false)}
                className="flex-1 px-4 py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreset}
                disabled={!presetName.trim()}
                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                Save Preset
              </button>
            </div>
          </div>
        </div>
      )}
    </ExpandableSection>
  );
}
