import React from 'react';
import { useTranslation } from '../i18n/index';
import { useInView } from '../hooks/useInView';

// Color palette for skill group cards
const CARD_COLORS = [
  { bg: '#fff0e8', border: '#e85d26', dot: '#e85d26', shadow: '#e85d2655' },
  { bg: '#e8f4fd', border: '#4a90d9', dot: '#4a90d9', shadow: '#4a90d955' },
  { bg: '#e8f8ec', border: '#3a8c4e', dot: '#3a8c4e', shadow: '#3a8c4e55' },
  { bg: '#fdf5e8', border: '#f5a623', dot: '#f5a623', shadow: '#f5a62355' },
  { bg: '#fce8f0', border: '#c4446e', dot: '#c4446e', shadow: '#c4446e55' },
  { bg: '#ede8fd', border: '#7b5ea7', dot: '#7b5ea7', shadow: '#7b5ea755' },
];

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      {/* Section heading - doodle style */}
      <div className="flex items-center gap-4 mb-8">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" style={{ flexShrink: 0 }}>
          <path d="M2,9 Q7,2 14,9 Q21,16 26,9" stroke="#e85d26" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
        <h2
          style={{
            fontFamily: "'Pangolin', cursive",
            fontSize: '1.4rem',
            color: '#2d2013',
            letterSpacing: '0.05em',
          }}
        >
          {t.ui.sections.skills}
        </h2>
        <svg className="flex-1" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" fill="none">
          <path d="M0,3 Q25,0 50,3 Q75,6 100,3 Q125,0 150,3 Q175,6 200,3" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.data.skills.map((skillGroup, index) => {
          const palette = CARD_COLORS[index % CARD_COLORS.length];
          const rotations = [-1.2, 0.8, -0.5, 1.0, -0.8, 0.6];
          const rotation = rotations[index % rotations.length];

          return (
            <div
              key={index}
              className={`p-5 scroll-reveal ${isInView ? 'visible' : ''} hover-lift`}
              style={{
                background: palette.bg,
                border: `2.5px solid #2d2013`,
                borderRadius: '12px 18px 14px 20px / 18px 12px 20px 14px',
                boxShadow: `4px 4px 0 #2d2013`,
                transform: `rotate(${rotation}deg)`,
                transitionDelay: `${index * 0.1}s`,
                position: 'relative',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              {/* Corner dog-ear fold */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '0 18px 18px 0',
                borderColor: `transparent #2d2013 transparent transparent`,
                borderRadius: '0 14px 0 0',
                opacity: 0.25,
              }} />

              <h3
                className="mb-3 flex items-center gap-2"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#2d2013',
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: palette.dot,
                    border: `1.5px solid #2d2013`,
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "'Patrick Hand', cursive",
                      fontSize: '0.78rem',
                      padding: '3px 10px',
                      background: '#fffdf5',
                      border: `1.5px solid ${palette.border}`,
                      borderRadius: '4px 8px 6px 10px / 8px 4px 10px 6px',
                      color: '#2d2013',
                      cursor: 'default',
                      display: 'inline-block',
                      lineHeight: 1.6,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Tiny decorative dots */}
              <div style={{
                position: 'absolute',
                bottom: 8,
                right: 10,
                display: 'flex',
                gap: 3,
                opacity: 0.4,
              }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width: 4, height: 4,
                    borderRadius: '50%',
                    background: palette.dot,
                  }} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};