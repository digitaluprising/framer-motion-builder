'use client';

import { AnimationConfig } from '@/app/page';
import ExpandableSection from './ExpandableSection';
import PresetSelector from './PresetSelector';
import EasingSelector from './EasingSelector';

interface AnimationControlsProps {
  config: AnimationConfig;
  onConfigChange: (updates: Partial<AnimationConfig>) => void;
}

export default function AnimationControls({ config, onConfigChange }: AnimationControlsProps) {

  const animationTypes = [
    { value: 'hover', label: 'Hover' },
    { value: 'click', label: 'Click' },
    { value: 'loop', label: 'Loop' },
    { value: 'onMount', label: 'On Mount' },
  ];

  const updateInitial = (updates: Partial<AnimationConfig['initial']>) => {
    onConfigChange({
      initial: { ...config.initial, ...updates }
    });
  };

  const updateAnimated = (updates: Partial<AnimationConfig['animated']>) => {
    onConfigChange({
      animated: { ...config.animated, ...updates }
    });
  };

  const updateTransition = (updates: Partial<AnimationConfig['transition']>) => {
    onConfigChange({
      transition: { ...config.transition, ...updates }
    });
  };

  const PropertyControls = ({ 
    properties, 
    onUpdate, 
    title 
  }: { 
    properties: AnimationConfig['initial'] | AnimationConfig['animated']; 
    onUpdate: (updates: Partial<AnimationConfig['initial'] | AnimationConfig['animated']>) => void;
    title: string;
  }) => (
    <div className="space-y-2">
      <h4 className="text-md font-medium text-gray-300">{title}</h4>
      
      {/* Transform Properties */}
      <div className="space-y-2">
        <h5 className="text-sm font-medium text-gray-400">Transform</h5>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              X Position
            </label>
            <input
              type="range"
              min="-200"
              max="200"
              value={properties.x}
              onChange={(e) => onUpdate({ x: Number(e.target.value) })}
              className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-xs text-gray-400 mt-2">{properties.x}px</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Y Position
            </label>
            <input
              type="range"
              min="-200"
              max="200"
              value={properties.y}
              onChange={(e) => onUpdate({ y: Number(e.target.value) })}
              className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-xs text-gray-400 mt-2">{properties.y}px</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Scale
            </label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={properties.scale}
              onChange={(e) => onUpdate({ scale: Number(e.target.value) })}
              className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-xs text-gray-400 mt-2">{properties.scale}x</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Rotation
            </label>
            <input
              type="range"
              min="-360"
              max="360"
              value={properties.rotate}
              onChange={(e) => onUpdate({ rotate: Number(e.target.value) })}
              className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-xs text-gray-400 mt-2">{properties.rotate}°</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Skew X
            </label>
            <input
              type="range"
              min="-45"
              max="45"
              value={properties.skewX}
              onChange={(e) => onUpdate({ skewX: Number(e.target.value) })}
              className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-xs text-gray-400 mt-2">{properties.skewX}°</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Skew Y
            </label>
            <input
              type="range"
              min="-45"
              max="45"
              value={properties.skewY}
              onChange={(e) => onUpdate({ skewY: Number(e.target.value) })}
              className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-xs text-gray-400 mt-2">{properties.skewY}°</div>
          </div>
        </div>
      </div>

      {/* Visual Properties */}
      <div className="space-y-2">
        <h5 className="text-sm font-medium text-gray-400">Visual</h5>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Opacity
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={properties.opacity}
            onChange={(e) => onUpdate({ opacity: Number(e.target.value) })}
            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="text-xs text-gray-400 mt-2">{properties.opacity}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Background Color
          </label>
          <input
            type="color"
            value={properties.backgroundColor}
            onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
            className="w-full h-12 border border-[#3a3a3a] rounded-lg bg-[#2a2a2a] cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Border Radius
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={properties.borderRadius}
            onChange={(e) => onUpdate({ borderRadius: Number(e.target.value) })}
            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="text-xs text-gray-400 mt-2">{properties.borderRadius}px</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] flex flex-col overflow-hidden">
      <div className="p-4 border-b border-[#2a2a2a]">
        <h2 className="text-lg font-semibold text-white">Controls</h2>
      </div>
      <div className="p-2 flex-1 overflow-y-auto min-h-0">
        <div className="space-y-2">
          {/* Preset Selector */}
          <PresetSelector 
            onPresetSelect={(config) => onConfigChange(config)}
            currentConfig={config}
          />

          {/* Animation Type */}
          <ExpandableSection title="Animation Type" defaultExpanded={true}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Animation Type
              </label>
              <select
                value={config.animationType}
                onChange={(e) => onConfigChange({ animationType: e.target.value as AnimationConfig['animationType'] })}
                className="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {animationTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </ExpandableSection>

          {/* Initial Properties */}
          <ExpandableSection title="Initial Properties" defaultExpanded={true}>
            <PropertyControls 
              properties={config.initial} 
              onUpdate={updateInitial}
              title="Starting State"
            />
          </ExpandableSection>

          {/* Animated Properties */}
          <ExpandableSection title="Animated Properties" defaultExpanded={true}>
            <PropertyControls 
              properties={config.animated} 
              onUpdate={updateAnimated}
              title="Target State"
            />
          </ExpandableSection>

          {/* Transition Settings */}
          <ExpandableSection title="Transition" defaultExpanded={true}>
            <div className="space-y-2">
              <h4 className="text-md font-medium text-gray-300">Animation Settings</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Duration (seconds)
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.1"
                  value={config.transition.duration}
                  onChange={(e) => updateTransition({ duration: Number(e.target.value) })}
                  className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-xs text-gray-400 mt-2">{config.transition.duration}s</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Delay (seconds)
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={config.transition.delay}
                  onChange={(e) => updateTransition({ delay: Number(e.target.value) })}
                  className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-xs text-gray-400 mt-2">{config.transition.delay}s</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Easing
                </label>
                <EasingSelector
                  value={config.transition.ease}
                  onChange={(ease) => updateTransition({ ease })}
                />
              </div>
            </div>
          </ExpandableSection>
        </div>
      </div>
      
      {/* Fixed Reset Button */}
      <div className="p-2 border-t border-[#2a2a2a] bg-[#0a0a0a] flex-shrink-0">
        <button
          onClick={() => onConfigChange({
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
          })}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}