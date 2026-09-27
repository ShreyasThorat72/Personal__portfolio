import React, { useState } from 'react';
import { Layers, Sparkles } from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  domain: string;
  desc: string;
}

export const SkillGraph: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<TechNode>({
    id: 'react',
    name: 'React SPA',
    domain: 'Client Architecture',
    desc: 'Modular, component-based user interfaces with TypeScript, modern hooks, and state coordination.',
  });

  const pipelines = [
    {
      title: 'Full Stack Web Pipeline',
      color: '#B45309', // Amber bronze
      nodes: [
        { id: 'react', name: 'React SPA', domain: 'Frontend', desc: 'Component architecture, custom hooks, and Tailwind CSS responsive design.' },
        { id: 'apis', name: 'REST APIs', domain: 'Communication', desc: 'Type-safe contracts, async HTTP request handling, and serialization.' },
        { id: 'nodejs', name: 'Node.js / Express', domain: 'Backend Engine', desc: 'Modular services, middleware pipelines, authentication, and routing.' },
        { id: 'db', name: 'MongoDB / PostgreSQL', domain: 'Persistence', desc: 'Document schemas, relational normalization, and ACID safety.' },
      ],
    },
    {
      title: 'Applied AI & Data Pipeline',
      color: '#2563EB', // Sapphire
      nodes: [
        { id: 'numpy', name: 'NumPy & Pandas', domain: 'Data Engineering', desc: 'Data wrangling, matrix manipulation, normalization, and feature extraction.' },
        { id: 'scikit', name: 'Scikit-Learn', domain: 'Machine Learning', desc: 'Supervised classifiers, cross-validation, regression, and model evaluations.' },
        { id: 'cv', name: 'OpenCV / Vision', domain: 'Perception', desc: 'Image filtering, object bounding, and contour analysis for edge sorting.' },
        { id: 'inference', name: 'Model Integration', domain: 'Deployment', desc: 'Exporting trained weights for production API endpoints and client applications.' },
      ],
    },
    {
      title: 'Embedded & IoT Pipeline',
      color: '#0891B2', // Cyan
      nodes: [
        { id: 'sensors', name: 'Ultrasonic / ADC', domain: 'Sensing', desc: 'Analog and digital signal capture with debounce and moving-average smoothing.' },
        { id: 'esp32', name: 'ESP32 / C++', domain: 'Embedded Logic', desc: 'Real-time firmware execution, threshold monitoring, and hardware interrupt loops.' },
        { id: 'relay', name: 'Relays & Actuators', domain: 'Control', desc: 'High-voltage motor actuation, optocoupler isolation, and dry-run safety lockouts.' },
        { id: 'telemetry', name: 'Cloud Telemetry', domain: 'Monitoring', desc: 'Real-time dashboard telemetry broadcast and emergency remote override.' },
      ],
    },
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200/80 dark:border-stone-800">
        <div className="flex items-center space-x-2.5">
          <Layers className="w-5 h-5 text-amber-800 dark:text-amber-400" />
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
              Interactive Engineering Pipeline Flow
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Click any technical node to inspect its architectural purpose
            </p>
          </div>
        </div>

        {/* Selected preview pill */}
        <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 dark:bg-stone-900 border border-amber-200/70 dark:border-stone-800 text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
          <span className="text-amber-950 dark:text-amber-200 font-mono font-bold">{selectedNode.name}</span>
          <span className="text-stone-500 font-medium">({selectedNode.domain})</span>
        </div>
      </div>

      {/* Pipelines */}
      <div className="space-y-6">
        {pipelines.map((pipeline) => (
          <div key={pipeline.title} className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pipeline.color }} />
              {pipeline.title}
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {pipeline.nodes.map((node, nIdx) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-amber-50/80 dark:bg-stone-800/90 border-amber-400/80 dark:border-amber-500/80 shadow-xs ring-1 ring-amber-400/30'
                        : 'bg-[#FAF8F5] dark:bg-stone-900/40 border-stone-200/80 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-medium text-stone-400">
                        0{nIdx + 1}
                      </span>
                      {isSelected && <Sparkles className="w-3 h-3 text-amber-700 dark:text-amber-400" />}
                    </div>
                    <p className="text-xs font-bold text-stone-900 dark:text-stone-100">{node.name}</p>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">{node.domain}</p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Node Details Box */}
      <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-xs">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-amber-800 dark:text-amber-400 font-bold">
            {selectedNode.name} · Role Specification
          </span>
          <span className="text-stone-500 font-mono font-medium">{selectedNode.domain}</span>
        </div>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mt-1">
          {selectedNode.desc}
        </p>
      </div>
    </div>
  );
};
