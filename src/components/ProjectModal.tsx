import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Database, 
  Smartphone, 
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';
import { Project } from '../types';
import { MobileDeviceMockup } from './MobileDeviceMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-5xl bg-dark-950 border border-white/[0.1] rounded-3xl shadow-2xl shadow-black/80 overflow-hidden my-4 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Ambient Light */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-dark-900/90 border-b border-white/[0.08] backdrop-blur-md flex items-start justify-between gap-4 z-10 shrink-0">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span 
                className="text-xs font-semibold px-3 py-1 rounded-full border shadow-sm"
                style={{ 
                  color: project.accentColor, 
                  backgroundColor: `${project.accentColor}15`,
                  borderColor: `${project.accentColor}40`
                }}
              >
                {project.category}
              </span>
              <span className="text-xs text-slate-300 font-mono px-2.5 py-0.5 rounded-full bg-dark-950 border border-slate-800">
                {project.myRole}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {project.subtitle}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-dark-950 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Technical Overview & Contributions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Project Overview */}
            <div className="p-5 rounded-2xl bg-dark-900/80 border border-white/[0.07] space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Project Architecture & Purpose</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Amee's Specific Engineering Contributions */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Engineering Contributions</span>
              </h3>
              <div className="space-y-2.5">
                {project.contributions.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-dark-900/50 border border-white/[0.04] hover:border-slate-700/80 transition-colors flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Stack Breakdown Cards */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Production Tech Stack</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-dark-900/90 border border-sky-500/20 space-y-1.5">
                  <div className="text-[11px] font-semibold text-sky-400 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5" /> Core Mobile
                  </div>
                  <div className="text-xs text-slate-200 font-medium leading-snug">
                    {project.techStack.core.join(', ')}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-dark-900/90 border border-indigo-500/20 space-y-1.5">
                  <div className="text-[11px] font-semibold text-indigo-400 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" /> State & Data
                  </div>
                  <div className="text-xs text-slate-200 font-medium leading-snug">
                    {project.techStack.stateAndData.join(', ')}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-dark-900/90 border border-purple-500/20 space-y-1.5">
                  <div className="text-[11px] font-semibold text-purple-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Integrations
                  </div>
                  <div className="text-xs text-slate-200 font-medium leading-snug">
                    {project.techStack.integrations.join(', ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer pill */}
            <div className="p-3.5 rounded-2xl bg-dark-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2.5">
              <Info className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Contributions represent hands-on engineering across client and company production applications.
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Mobile Preview Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center sticky top-0">
            <div className="w-full flex justify-center py-2">
              <MobileDeviceMockup 
                initialScreen={project.conceptualType} 
                interactive={false}
                variant="modal"
              />
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 sm:px-8 bg-dark-900/95 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 rounded bg-dark-950 border border-slate-700 text-[10px] font-mono text-slate-300">Esc</kbd> or click outside to close</span>
          <button
            onClick={onClose}
            className="ml-auto px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors shadow-sm"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
