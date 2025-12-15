import React, { useState, useEffect } from 'react';
import { useTranslation, Translations } from '../i18n/index';
import { XIcon } from './Icon';
import { useInView } from '../hooks/useInView';

type ProjectItem = Translations['data']['projects'][number];

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
  t: Translations;
}

const ProjectCard: React.FC<ProjectCardProps & { index: number; isInView: boolean }> = ({ project, onClick, t, index, isInView }) => {
  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    onClick(project);
  };

  // Normalize data to prevent crashes
  const techs = (project.techStack ?? '').split(', ').filter(Boolean);
  const features = project.features ?? [];

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
        }
      }}
      role="button"
      tabIndex={0}
      className={`flex flex-col h-full p-6 rounded-[24px] bg-white dark:bg-gradient-to-br dark:from-slate-900/80 dark:to-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-accent/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 cursor-pointer group shadow-sm dark:shadow-none scroll-reveal ${isInView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-accent transition-colors">{project.name}</h3>
          <span className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider border border-accent/20 group-hover:bg-accent group-hover:text-slate-950 transition-colors duration-300">
            {t.ui.projects.project}
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
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">{t.ui.projects.techStack}</div>
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech, i) => (
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
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">{t.ui.projects.keyFeatures}</div>
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
              <span className="mt-1 min-w-[4px] w-[4px] h-[4px] rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-accent transition-colors"></span>
              {feature}
            </li>
          ))}
          <li className="text-xs text-accent/70 italic pl-3.5 mt-4 group-hover:text-accent transition-colors flex items-center gap-1">
            {t.ui.projects.viewDetails} <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
  t: Translations;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, t }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Normalize data to prevent crashes
  const techs = (project.techStack ?? '').split(', ').filter(Boolean);
  const features = project.features ?? [];
  const responsibilities = project.responsibilities ?? [];

  useEffect(() => {
    // Lock body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Trigger animation
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Ensure modal starts at top
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }

    // Handle ESC key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = prevOverflow || 'unset';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200); // Match animation duration
  };

  return (
    <div 
      className={`fixed inset-0 z-[999] flex items-start sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={`relative w-full sm:max-w-3xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto sm:rounded-[28px] bg-white dark:bg-[#020617] border-0 sm:border border-slate-200 dark:border-slate-800 sm:shadow-2xl transition-all duration-200 ${
          isVisible 
            ? 'translate-y-0 scale-100 opacity-100' 
            : 'translate-y-8 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          // Smooth scrolling
          scrollBehavior: 'smooth',
          // Better scrollbar styling
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(148 163 184) transparent'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800/50 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-sm">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {project.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {project.company && (
                <span className="font-semibold text-accent">{project.company}</span>
              )}
              {project.company && (
                <span className="text-slate-400 dark:text-slate-600">•</span>
              )}
              <span className="text-slate-500 dark:text-slate-400 font-mono">
                {project.period}
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="flex-shrink-0 p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white transition-all hover:rotate-90 duration-300"
            aria-label="Close modal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              {t.ui.projects.techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              {t.ui.projects.allFeatures}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 min-w-[6px] w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          {responsibilities.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                {t.ui.projects.responsibilities}
              </h3>
              <div className="bg-slate-50 dark:bg-slate-900/30 rounded-2xl p-5 border border-slate-200 dark:border-slate-800/50">
                <ul className="space-y-3">
                  {responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 text-accent flex-shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
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
        <div className="h-6 bg-gradient-to-t from-white dark:from-[#020617] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-lg font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{t.ui.sections.projects}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.data.projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={setSelectedProject}
            t={t}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          t={t}
        />
      )}
    </section>
  );
};