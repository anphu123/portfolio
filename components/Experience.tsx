import React from 'react';
import { useTranslation } from '../i18n/index';
import { useInView } from '../hooks/useInView';

const TimelineConnector = () => (
  <div style={{ position: 'absolute', left: 22, top: 52, bottom: -24, width: 2, zIndex: 0 }}>
    <svg width="4" height="100%" viewBox="0 0 4 100" preserveAspectRatio="none" fill="none" style={{ width: '100%', height: '100%' }}>
      <path d="M2,0 Q0,12 2,25 Q4,37 2,50 Q0,62 2,75 Q4,87 2,100" stroke="#90CAF9" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 4"/>
    </svg>
  </div>
);

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      {/* Heading — Caveat 700 (Vietnamese-safe) */}
      <div className="flex items-center gap-4 mb-8">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <rect x="2" y="7" width="20" height="14" rx="3" stroke="#1a2744" strokeWidth="2" fill="none"/>
          <path d="M8,7 L8,5 C8,3.9 8.9,3 10,3 L14,3 C15.1,3 16,3.9 16,5 L16,7" stroke="#1a2744" strokeWidth="2" fill="none"/>
          <line x1="2" y1="11" x2="22" y2="11" stroke="#1a2744" strokeWidth="1.5" strokeDasharray="3 2"/>
        </svg>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.5rem', color: '#1a2744' }}>
          {t.ui.sections.experience}
        </h2>
        <svg className="flex-1" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" fill="none">
          <path d="M0,3 Q25,6 50,3 Q75,0 100,3 Q125,6 150,3 Q175,0 200,3" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
        <span style={{
          fontFamily: "'Caveat', cursive", fontSize: '0.9rem', color: '#0175C2',
          background: '#E3F2FD', border: '1.5px solid #90CAF9',
          borderRadius: '4px 8px 6px 10px', padding: '2px 10px',
          boxShadow: '2px 2px 0 #90CAF9',
        }}>
          2024 — Present
        </span>
      </div>

      <div className="space-y-6 relative">
        {t.data.experience.map((job, index) => (
          <div
            key={index}
            className={`relative pl-14 scroll-reveal ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Timeline node */}
            <div style={{
              position: 'absolute', left: 0, top: 24,
              width: 44, height: 44,
              background: index === 0 ? '#0175C2' : '#E3F2FD',
              border: '2.5px solid #1a2744',
              borderRadius: '40% 50% 45% 55% / 50% 40% 55% 45%',
              boxShadow: '3px 3px 0 #1a2744',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1,
              fontFamily: "'Caveat', cursive",
              fontSize: '1rem',
              fontWeight: 700,
              color: index === 0 ? '#fff' : '#0175C2',
            }}>
              {index === 0 ? '★' : (index + 1)}
            </div>

            {index < t.data.experience.length - 1 && <TimelineConnector />}

            {/* Job card */}
            <div
              className="group p-6 sm:p-7 hover-lift transition-all duration-200"
              style={{
                background: index % 2 === 0 ? '#FFFFFF' : '#F0F9FF',
                border: '2.5px solid #1a2744',
                borderRadius: '14px 20px 18px 22px / 20px 14px 22px 18px',
                boxShadow: '4px 4px 0 #1a2744',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  {/* Role — Caveat 700 (Vietnamese-safe) */}
                  <h3 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.25rem', color: '#0175C2', marginBottom: 4 }}>
                    {job.role}
                  </h3>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', fontWeight: 600, color: '#00B4AB' }}>
                    @ {job.company}
                  </div>
                </div>

                {/* Period badge */}
                <div style={{
                  fontFamily: "'Patrick Hand', cursive", fontSize: '0.78rem',
                  padding: '4px 12px',
                  background: '#E3F2FD',
                  border: '1.5px solid #1a2744',
                  borderRadius: '6px 12px 8px 14px / 12px 6px 14px 8px',
                  boxShadow: '2px 2px 0 #1a2744',
                  color: '#1a2744', whiteSpace: 'nowrap', flexShrink: 0,
                }}>
                  📅 {job.period}
                </div>
              </div>

              <ul className="space-y-3">
                {job.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M3,8 Q5,5 8,8 Q11,11 13,8" stroke="#0175C2" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.92rem', color: '#37474F', lineHeight: 1.6 }}>
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};