import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation, Translations } from '../i18n/index';
import { XIcon } from './Icon';
import { useInView } from '../hooks/useInView';
import { useTilt } from '../hooks/useTilt';

type ProjectItem = Translations['data']['projects'][number];

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
  t: Translations;
  index: number;
  isInView: boolean;
}

// Flutter-inspired post-it colors
const NOTE_COLORS = [
  { bg: '#E3F2FD', accent: '#0175C2' },   // Flutter Blue
  { bg: '#E0F7FA', accent: '#00897B' },   // Flutter Cyan/Teal
  { bg: '#FFF8E1', accent: '#F9A825' },   // Flutter Amber
  { bg: '#E8F5E9', accent: '#2E7D32' },   // Flutter Green
  { bg: '#FCE4EC', accent: '#C2185B' },   // Flutter Pink
  { bg: '#EDE7F6', accent: '#6A1B9A' },   // Flutter Purple
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, t, index, isInView }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(11, 1.04);

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    onClick(project);
  };

  const techs = (project.techStack ?? '').split(', ').filter(Boolean);
  const features = project.features ?? [];
  const palette = NOTE_COLORS[index % NOTE_COLORS.length];
  const rotations = [-2, 1.5, -1, 2, -1.5, 1];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      ref={ref}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(e); }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      className={`card-3d flex flex-col h-full p-5 cursor-pointer scroll-reveal ${isInView ? 'visible' : ''}`}
      style={{
        background: palette.bg,
        border: '2.5px solid #1a2744',
        borderRadius: '14px 20px 16px 22px / 20px 14px 22px 16px',
        boxShadow: '5px 5px 0 #1a2744',
        transform: `rotate(${rotation}deg)`,
        transitionDelay: `${index * 0.1}s`,
        outline: 'none',
        pointerEvents: 'auto',
      }}
    >
      {/* 3D shine overlay */}
      <div className="tilt-shine" style={{ borderRadius: 'inherit' }} />
      {/* Washi tape — Flutter Blue/Cyan gradient */}
      <div style={{
        position: 'absolute', top: -10, left: '50%',
        transform: 'translateX(-50%) rotate(-1deg)',
        width: 50, height: 18,
        background: 'rgba(84,197,248,0.5)',
        borderRadius: 3, border: '1px solid #90CAF9', zIndex: 2,
      }} />

      <div className="mb-4 mt-2">
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.05rem', color: '#1a2744', lineHeight: 1.3 }}>
            {project.name}
          </h3>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', background: palette.accent, color: '#fff', border: '1.5px solid #1a2744', borderRadius: '4px 8px 6px 10px', textTransform: 'uppercase', flexShrink: 0 }}>
            {t.ui.projects.project}
          </span>
        </div>
        {project.company && (
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: palette.accent,
              marginBottom: 2,
            }}
          >
            @ {project.company}
          </p>
        )}
        <p
          style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '0.72rem',
            color: '#8a7560',
          }}
        >
          {project.period}
        </p>
      </div>

      {/* Wavy divider */}
      <svg width="100%" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none" style={{ marginBottom: 12 }}>
        <path d="M0,4 Q25,0 50,4 Q75,8 100,4 Q125,0 150,4 Q175,8 200,4" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2"/>
      </svg>

      <div className="mb-4">
        <div
          style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#8a7560',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {t.ui.projects.techStack}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '0.72rem',
                padding: '2px 8px',
                background: '#fffdf5',
                border: `1.5px solid ${palette.accent}`,
                borderRadius: '4px 8px 6px 10px / 8px 4px 10px 6px',
                color: '#2d2013',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div
          style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#8a7560',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {t.ui.projects.keyFeatures}
        </div>
        <ul className="space-y-1.5 mb-4">
          {features.slice(0, 3).map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2"
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '0.8rem',
                color: '#37474F',
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: palette.accent, flexShrink: 0, marginTop: 2 }}>✦</span>
              {feature}
            </li>
          ))}
          <li
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '0.85rem',
              color: palette.accent,
              fontWeight: 700,
              paddingLeft: 16,
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {t.ui.projects.viewDetails}
            <span style={{ display: 'inline-block', transition: 'transform 0.2s' }}>→</span>
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

  const techs = (project.techStack ?? '').split(', ').filter(Boolean);
  const features = project.features ?? [];
  const responsibilities = project.responsibilities ?? [];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setIsVisible(true), 10);

    if (modalRef.current) modalRef.current.scrollTop = 0;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = prevOverflow || 'unset';
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 250);
  };

  // Dùng Portal để thoát khỏi stacking context của transformed ancestors
  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] overflow-y-auto transition-all duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-sm transition-all duration-250 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'rgba(45,32,19,0.65)' }}
        onClick={handleClose}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />

      <div
        className="relative z-10 w-full min-h-full flex items-center justify-center p-4 sm:p-6 md:p-8"
        onClick={handleClose}
      >
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          className={`relative w-full max-w-4xl transition-all duration-250 ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'}`}
          style={{
            background: '#FFFFFF',
            border: '3px solid #1a2744',
            borderRadius: '18px 24px 22px 28px / 24px 18px 28px 22px',
            boxShadow: '8px 8px 0 #1a2744',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="sticky top-0 z-20 flex items-start justify-between gap-4 p-5 sm:p-7"
            style={{
              borderBottom: '2px dashed #90CAF9',
              background: '#E3F2FD',
              borderRadius: '18px 24px 0 0 / 24px 18px 0 0',
            }}
          >
            {/* Tape decoration — Flutter Sky */}
            <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%) rotate(1deg)', width: 70, height: 20, background: 'rgba(84,197,248,0.5)', borderRadius: 3, border: '1px solid #90CAF9' }} />

            <div className="flex-1 min-w-0">
              <h2 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 'clamp(1.3rem, 4vw, 1.9rem)', color: '#0175C2', marginBottom: 8, lineHeight: 1.2 }}>
                {project.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {project.company && (
                  <>
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', fontWeight: 700, color: '#00B4AB' }}>
                      @ {project.company}
                    </span>
                    <span style={{ color: '#c4a882' }}>•</span>
                  </>
                )}
                <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.85rem', color: '#546E7A' }}>
                  {project.period}
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="btn-doodle flex-shrink-0 p-2"
              style={{ background: '#E3F2FD', color: '#1a2744', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close modal"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-7 space-y-7">
            {/* Tech Stack */}
            <div>
              <h3
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#2d2013',
                  marginBottom: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>🔧</span>
                {t.ui.projects.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, i) => (
                  <span
                    key={i}
                  style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.85rem', padding: '4px 12px', background: '#E3F2FD', border: '1.5px solid #1a2744', borderRadius: '4px 10px 6px 12px / 10px 4px 12px 6px', color: '#1a2744' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#2d2013',
                    marginBottom: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span>✨</span>
                  {t.ui.projects.allFeatures}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span style={{ color: '#0175C2', flexShrink: 0, marginTop: 3 }}>✦</span>
                      <span
                        style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.9rem', color: '#37474F', lineHeight: 1.6 }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {responsibilities.length > 0 && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#2d2013',
                    marginBottom: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span>📋</span>
                  {t.ui.projects.responsibilities}
                </h3>
                <div
                  style={{ background: '#E3F2FD', border: '1.5px dashed #90CAF9', borderRadius: '10px 16px 12px 18px', padding: '16px 20px' }}
                >
                  <ul className="space-y-3">
                    {responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
                          <polyline points="2 7 5.5 10.5 12 3" stroke="#00C853" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span
                            style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.9rem', color: '#37474F', lineHeight: 1.6 }}
                        >
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <rect x="2" y="3" width="20" height="18" rx="3" stroke="#2d2013" strokeWidth="2" fill="none"/>
          <path d="M8,3 L8,21" stroke="#2d2013" strokeWidth="1.5" strokeDasharray="3 2"/>
          <path d="M12,8 L18,8 M12,12 L18,12 M12,16 L16,16" stroke="#2d2013" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="5" cy="8" r="1" fill="#0175C2"/>
          <circle cx="5" cy="12" r="1" fill="#00B4AB"/>
          <circle cx="5" cy="16" r="1" fill="#54C5F8"/>
        </svg>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.5rem', color: '#1a2744' }}>
          {t.ui.sections.projects}
        </h2>
        <svg className="flex-1" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" fill="none">
          <path d="M0,3 Q25,0 50,3 Q75,6 100,3 Q125,0 150,3 Q175,6 200,3" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-2">
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