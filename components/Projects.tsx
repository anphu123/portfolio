import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';
import { ProjectItem } from '../types';
import { XIcon } from './Icon';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="flex flex-col h-full p-6 rounded-[24px] bg-white dark:bg-gradient-to-br dark:from-slate-900/80 dark:to-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-accent/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 cursor-pointer group shadow-sm dark:shadow-none"
    >
      <div className="mb-6">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-accent transition-colors">{project.name}</h3>
          <span className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider border border-accent/20 group-hover:bg-accent group-hover:text-slate-950 transition-colors duration-300">
            Project
          </span>
        </div>
        {project.company && (
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
            {project.company}
          </p>
        )}
        <p className="text-xs font-mono text-slate-500 dark:text-slate-600">
          {project.period}
        </p>
      </div>

      <div className="mb-6">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Tech Stack</div>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.split(', ').map((tech, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 text-[11px] rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600 dark:group-hover:bg-slate-800 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Key Features</div>
        <ul className="space-y-2 mb-6">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
               <span className="mt-1 min-w-[4px] w-[4px] h-[4px] rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-accent transition-colors"></span>
               {feature}
            </li>
          ))}
          <li className="text-xs text-accent/70 italic pl-3.5 mt-4 group-hover:text-accent transition-colors flex items-center gap-1">
            Click to view full details <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{ project: ProjectItem; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[28px] bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800 shadow-2xl animate-scale-in">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between p-6 sm:p-8 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{project.name}</h2>
            <div className="flex flex-wrap items-center gap-3 text-sm">
               {project.company && (
                <span className="font-semibold text-accent">{project.company}</span>
               )}
               {project.company && <span className="text-slate-400 dark:text-slate-600">•</span>}
               <span className="text-slate-500 dark:text-slate-400 font-mono">{project.period}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
           {/* Tech Stack */}
           <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.split(', ').map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">All Features</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 min-w-[6px] w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Responsibilities</h3>
              <div className="bg-slate-50 dark:bg-slate-900/30 rounded-2xl p-5 border border-slate-200 dark:border-slate-800/50">
                <ul className="space-y-3">
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                       <span className="mt-1.5 text-accent">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </span>
                       <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer gradient fade */}
        <div className="h-6 bg-gradient-to-t from-white dark:from-[#020617] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="mb-12">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-lg font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Key Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {RESUME_DATA.projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};