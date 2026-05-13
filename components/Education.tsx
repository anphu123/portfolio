import React from 'react';
import { useTranslation } from '../i18n/index';
import { useInView } from '../hooks/useInView';
import { useTilt } from '../hooks/useTilt';

const EDU_COLORS = [
  { bg: '#E3F2FD', accent: '#0175C2' },
  { bg: '#E0F7FA', accent: '#00B4AB' },
  { bg: '#E8F5E9', accent: '#00C853' },
];

interface EduCardProps {
  edu: { school: string; major: string; period: string; gpa?: string; details?: string[] };
  index: number;
  isInView: boolean;
}

const EduCard: React.FC<EduCardProps> = ({ edu, index, isInView }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(8, 1.02);
  const palette = EDU_COLORS[index % EDU_COLORS.length];
  const rotations = [-0.8, 0.6, -0.5];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-3d relative p-6 sm:p-7 scroll-reveal ${isInView ? 'visible' : ''}`}
      style={{
        background: palette.bg,
        border: '2.5px solid #1a2744',
        borderRadius: '14px 20px 16px 22px / 20px 14px 22px 16px',
        boxShadow: '4px 4px 0 #1a2744',
        transform: `rotate(${rotation}deg)`,
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* 3D shine */}
      <div className="tilt-shine" style={{ borderRadius: 'inherit' }} />

      {/* Washi tape */}
      <div style={{
        position: 'absolute', top: -10, left: '40%',
        transform: 'rotate(-1.5deg)',
        width: 60, height: 18,
        background: 'rgba(84,197,248,0.45)',
        borderRadius: 3, border: '1px solid #90CAF9',
      }} />

      <div className="flex items-start gap-5">
        {/* Icon — spin-in-3D on reveal */}
        <div
          className={isInView ? 'spin-in-3d' : ''}
          style={{
            width: 52, height: 52, flexShrink: 0,
            background: '#FFFFFF',
            border: `2px solid ${palette.accent}`,
            borderRadius: '40% 50% 45% 55% / 50% 40% 55% 45%',
            boxShadow: `3px 3px 0 ${palette.accent}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M3,10 L13,4 L23,10 L13,16 Z" stroke={palette.accent} strokeWidth="2" fill={`${palette.accent}20`} strokeLinejoin="round"/>
            <path d="M8,13 L8,18 C8,18 10.5,21 13,21 C15.5,21 18,18 18,18 L18,13" stroke={palette.accent} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="flex-1">
          <h3 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.2rem', color: palette.accent, marginBottom: 4 }}>
            {edu.school}
          </h3>
          <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.92rem', color: '#37474F', marginBottom: 10 }}>
            {edu.major}
          </p>

          <div className="flex flex-wrap gap-2 items-center">
            <span style={{
              fontFamily: "'Patrick Hand', cursive", fontSize: '0.78rem', color: '#546E7A',
              background: '#FFFFFF', border: '1.5px solid #90CAF9',
              borderRadius: '4px 8px 6px 10px', padding: '2px 10px',
            }}>
              📅 {edu.period}
            </span>
            {edu.gpa && (
              <span style={{
                fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '0.9rem', color: '#fff',
                background: palette.accent, border: `1.5px solid #1a2744`,
                borderRadius: '4px 8px 6px 10px', padding: '2px 10px',
                boxShadow: `2px 2px 0 #1a274455`,
              }}>
                ⭐ GPA {edu.gpa}
              </span>
            )}
          </div>

          {edu.details && edu.details.length > 0 && (
            <div className="mt-3 px-3 py-2" style={{
              background: '#FFFFFF', border: '1.5px dashed #90CAF9',
              borderRadius: '6px 10px 8px 12px',
            }}>
              <ul className="space-y-1">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span style={{ color: palette.accent, flexShrink: 0, marginTop: 2 }}>💡</span>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.82rem', color: '#37474F', lineHeight: 1.5 }}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  const { t } = useTranslation();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ flexShrink: 0 }}>
          <path d="M3,10 L13,4 L23,10 L13,16 Z" stroke="#1a2744" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <path d="M7,13 L7,19 C7,19 10,22 13,22 C16,22 19,19 19,19 L19,13" stroke="#1a2744" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M23,10 L23,16" stroke="#1a2744" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.5rem', color: '#1a2744' }}>
          {t.ui.sections.education}
        </h2>
        <svg className="flex-1" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" fill="none">
          <path d="M0,3 Q25,6 50,3 Q75,0 100,3 Q125,6 150,3 Q175,0 200,3" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      <div className="space-y-5">
        <EduCard edu={t.data.education} index={0} isInView={isInView} />
      </div>
    </section>
  );
};