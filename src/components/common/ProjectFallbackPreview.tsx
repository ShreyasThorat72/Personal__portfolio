import React from 'react';
import { Building2, Droplets, Recycle, Cpu, MapPin, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

interface ProjectFallbackPreviewProps {
  projectId: string;
  title: string;
  accentColor: string;
  category: string;
}

export const ProjectFallbackPreview: React.FC<ProjectFallbackPreviewProps> = ({
  projectId,
  title,
  accentColor,
  category,
}) => {
  if (projectId === 'civicconnect') {
    return (
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[270px] bg-gradient-to-br from-[#FAF8F5] to-[#F3EFE6] dark:from-[#1A1918] dark:to-[#121110] overflow-hidden flex flex-col justify-between p-5 text-stone-800 dark:text-stone-200 transition-colors">
        {/* Abstract Architectural Grid Lines */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] bg-[radial-gradient(#2563EB_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

        {/* Top Bar of Portal */}
        <div className="relative z-10 flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">GIS Triage Live Stream</span>
          </div>
          <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400">Dept: Municipal Infrastructure</span>
        </div>

        {/* Center Geotagged Issue Card */}
        <div className="relative z-10 my-auto py-2">
          <div className="max-w-[280px] sm:max-w-xs bg-white/90 dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 rounded-2xl p-3.5 shadow-md backdrop-blur-md">
            <div className="flex items-start space-x-2.5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200/50 dark:border-blue-900/50">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">Road Surface & Drainage Repair</p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">GPS Tagged · Ticket #CC-4821</p>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px]">
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Dispatched
              </span>
              <span className="text-stone-500 font-mono">ETA: &lt; 24h</span>
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="relative z-10 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-200/80 dark:border-stone-800">
          <span className="flex items-center gap-1.5 font-medium text-stone-700 dark:text-stone-300">
            <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            CivicConnect Web Interface
          </span>
          <span className="font-mono text-[11px] text-blue-700 dark:text-blue-400 font-semibold">Active Dispatch</span>
        </div>
      </div>
    );
  }

  if (projectId === 'smart-water-tank') {
    return (
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[270px] bg-gradient-to-br from-[#FAF8F5] to-[#F1EDE4] dark:from-[#1A1918] dark:to-[#121110] overflow-hidden flex flex-col justify-between p-5 text-stone-800 dark:text-stone-200 transition-colors">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] bg-[radial-gradient(#0891B2_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800 pb-3">
          <div className="flex items-center space-x-2">
            <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">Ultrasonic Telemetry</span>
          </div>
          <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">Auto Mode: Active</span>
        </div>

        {/* Reservoir Graphic & Gauge */}
        <div className="relative z-10 grid grid-cols-2 gap-4 items-center my-auto py-2">
          {/* Reservoir tank visual */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 shadow-sm">
            <div className="relative w-16 h-24 rounded-xl border-2 border-cyan-500/50 bg-[#F4F1EA] dark:bg-stone-950 overflow-hidden flex flex-col justify-end p-0.5">
              <div
                className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-b transition-all duration-500"
                style={{ height: '76%' }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-stone-900 dark:text-white drop-shadow">
                76%
              </span>
            </div>
            <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 mt-2">Reservoir Level</span>
          </div>

          {/* Motor / Relay Telemetry card */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-white/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 text-xs shadow-2xs">
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">Pump Relay State</p>
              <p className="font-semibold text-cyan-700 dark:text-cyan-300 mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active (Filling)
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 text-xs shadow-2xs">
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">Dry-Run Protection</p>
              <p className="font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Interlock Engaged
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-200/80 dark:border-stone-800">
          <span className="font-mono text-[11px] text-stone-700 dark:text-stone-300">ESP32 · JSN-SR04T · Optocoupler</span>
          <span className="text-cyan-700 dark:text-cyan-400 font-mono text-[11px] font-semibold">Edge Ready</span>
        </div>
      </div>
    );
  }

  if (projectId === 'bottlepoints') {
    return (
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[270px] bg-gradient-to-br from-[#FAF8F5] to-[#EEF5F0] dark:from-[#1A1918] dark:to-[#121110] overflow-hidden flex flex-col justify-between p-5 text-stone-800 dark:text-stone-200 transition-colors">
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] bg-[radial-gradient(#10B981_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800 pb-3">
          <div className="flex items-center space-x-2">
            <Recycle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">Reverse Vending Terminal</span>
          </div>
          <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400">Intake Chamber: Ready</span>
        </div>

        {/* Optical Detection Simulated Viewport */}
        <div className="relative z-10 my-auto py-2">
          <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-stone-900/90 border border-emerald-500/30 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                Object Classification
              </span>
              <span className="text-[11px] font-mono text-stone-600 dark:text-stone-300">Confidence: 98.6%</span>
            </div>
            {/* Target box */}
            <div className="relative border border-dashed border-emerald-500/60 rounded-xl p-3 bg-emerald-50/40 dark:bg-stone-950/60 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-stone-900 dark:text-stone-100">PET Plastic Bottle (500ml)</p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">Recyclable Grade 1 · Verified</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">+10 Points</span>
                <p className="text-[10px] text-stone-500 font-mono">-24g CO₂</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-200/80 dark:border-stone-800">
          <span className="font-mono text-[11px] text-stone-700 dark:text-stone-300">OpenCV Vision & Ledger Sync</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[11px] font-semibold">Eco Incentives</span>
        </div>
      </div>
    );
  }

  // Generic / Blueprint fallback
  return (
    <div className="relative w-full h-full min-h-[220px] sm:min-h-[270px] bg-gradient-to-br from-[#FAF8F5] to-[#F1EDE4] dark:from-[#1A1918] dark:to-[#121110] overflow-hidden flex flex-col justify-between p-5 text-stone-800 dark:text-stone-200 transition-colors">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800 pb-3">
        <span className="text-xs font-mono font-medium text-stone-500">{category}</span>
        <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-semibold">Architecture Ready</span>
      </div>

      <div className="relative z-10 my-auto text-center py-4">
        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center mx-auto mb-2 text-stone-500 shadow-2xs">
          <Cpu className="w-6 h-6" style={{ color: accentColor }} />
        </div>
        <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">{title}</h4>
        <p className="text-xs text-stone-500 mt-1">Modular Architecture Flow</p>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-200/80 dark:border-stone-800">
        <span className="font-mono text-[11px]">System Design</span>
        <span className="font-mono text-[11px]" style={{ color: accentColor }}>Ready for Custom Specs</span>
      </div>
    </div>
  );
};
