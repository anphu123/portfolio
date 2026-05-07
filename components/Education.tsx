import React from 'react';
import { useTranslation } from '../i18n/index';
import { useInView } from '../hooks/useInView';

export const Education: React.FC = () => {
  const { t } = useTranslation();
  const { education } = t.data;
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      {/* Heading */}
      <div className="flex items-center gap-4 mb-8">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12,3 L22,8 L12,13 L2,8 Z" stroke="#2d2013" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <path d="M6,10.5 L6,17 C6,17 9,20 12,20 C15,20 18,17 18,17 L18,10.5" stroke="#2d2013" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <line x1="22" y1="8" x2="22" y2="14" stroke="#2d2013" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h2
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: '1.4rem',
            color: '#2d2013',
          }}
        >
          {t.ui.sections.education}
        </h2>
        <svg className="flex-1" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" fill="none">
          <path d="M0,3 Q25,6 50,3 Q75,0 100,3 Q125,6 150,3 Q175,0 200,3" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      {/* Education card */}
      <div
        className={`group p-7 sm:p-9 flex flex-col md:flex-row gap-8 items-start scroll-reveal ${isInView ? 'visible' : ''} hover-lift`}
        style={{
          background: '#fffdf5',
          border: '2.5px solid #2d2013',
          borderRadius: '16px 24px 20px 28px / 24px 16px 28px 20px',
          boxShadow: '5px 5px 0 #2d2013',
          position: 'relative',
          transform: 'rotate(-0.5deg)',
        }}
      >
        {/* Decorative school icon doodle */}
        <div style={{
          position: 'absolute',
          top: -20,
          right: 30,
          fontSize: '2.5rem',
          animation: 'float-doodle 4s ease-in-out infinite',
          filter: 'drop-shadow(2px 2px 0 rgba(45,32,19,0.2))',
        }}>
          🎓
        </div>

        {/* Washi tape */}
        <div style={{
          position: 'absolute',
          top: -10,
          left: 60,
          width: 65,
          height: 20,
          background: 'rgba(74,144,217,0.35)',
          borderRadius: 3,
          transform: 'rotate(1.5deg)',
          border: '1px solid rgba(74,144,217,0.5)',
        }} />

        <div className="flex-1">
          <h3
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: '1.3rem',
              color: '#e85d26',
              marginBottom: 6,
            }}
          >
            {education.school}
          </h3>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#4a90d9',
              marginBottom: 20,
            }}
          >
            📚 {education.major}
          </p>

          {/* Meta info — doodle badges */}
          <div className="flex flex-wrap gap-3 mb-7">
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '0.82rem',
                padding: '4px 12px',
                background: '#fef9c3',
                border: '1.5px solid #2d2013',
                borderRadius: '6px 12px 8px 14px / 12px 6px 14px 8px',
                boxShadow: '2px 2px 0 #2d2013',
                color: '#2d2013',
              }}
            >
              📅 {education.period}
            </span>
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '0.9rem',
                fontWeight: 700,
                padding: '4px 12px',
                background: '#d7f5d4',
                border: '1.5px solid #3a8c4e',
                borderRadius: '6px 12px 8px 14px / 12px 6px 14px 8px',
                boxShadow: '2px 2px 0 #3a8c4e',
                color: '#2d4d1a',
              }}
            >
              ⭐ GPA: {education.gpa}
            </span>
          </div>

          {/* Details — highlighted notes */}
          <div className="space-y-3">
            {education.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
                style={{
                  borderLeft: '3px solid #e85d26',
                  paddingLeft: 14,
                  borderRadius: '0 4px 4px 0',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Patrick Hand', cursive",
                    fontSize: '0.9rem',
                    color: '#3d2d1a',
                    lineHeight: 1.65,
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right decorative element */}
        <div
          style={{
            flexShrink: 0,
            width: 90,
            height: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(232,93,38,0.08)',
            border: '2px dashed #e85d26',
            borderRadius: '50% 40% 55% 45% / 40% 55% 45% 50%',
            animation: 'float-doodle 6s ease-in-out infinite',
          }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M10,35 L10,20 C10,15 15,12 25,12 C35,12 40,15 40,20 L40,35" stroke="#e85d26" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M5,35 L45,35" stroke="#e85d26" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20,12 L20,10 C20,8 22,7 25,7 C28,7 30,8 30,10 L30,12" stroke="#e85d26" strokeWidth="2" fill="none"/>
            <rect x="19" y="22" width="12" height="8" rx="2" stroke="#e85d26" strokeWidth="1.5" fill="none"/>
            <line x1="25" y1="26" x2="25" y2="30" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};