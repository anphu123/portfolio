import React from 'react';
import { useTranslation } from '../i18n/index';
import { useInView } from '../hooks/useInView';
import { useTilt } from '../hooks/useTilt';

const CARD_COLORS = [
  { bg: '#E3F2FD', border: '#0175C2', dot: '#0175C2' },
  { bg: '#E0F7FA', border: '#00B4AB', dot: '#00B4AB' },
  { bg: '#E8F5E9', border: '#00C853', dot: '#00C853' },
  { bg: '#FFF8E1', border: '#FFC108', dot: '#FFC108' },
  { bg: '#FCE4EC', border: '#F45B69', dot: '#F45B69' },
  { bg: '#EDE7F6', border: '#7B1FA2', dot: '#7B1FA2' },
];

interface SkillCardProps {
  skillGroup: { category: string; items: string[] };
  index: number;
  isInView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillGroup, index, isInView }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(9, 1.04);
  const palette = CARD_COLORS[index % CARD_COLORS.length];
  const rotations = [-1.2, 0.8, -0.5, 1.0, -0.8, 0.6];
  const rotation = rotations[index % rotations.length];
  const delays = ['0s', '0.08s', '0.16s', '0.24s', '0.32s', '0.4s'];

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-3d p-5 scroll-reveal ${isInView ? 'visible' : ''}`}
      style={{
        background: palette.bg,
        border: `2.5px solid #1a2744`,
        borderRadius: '12px 18px 14px 20px / 18px 12px 20px 14px',
        boxShadow: `4px 4px 0 #1a2744`,
        transform: `rotate(${rotation}deg)`,
        transitionDelay: delays[index % delays.length],
        position: 'relative',
        cursor: 'default',
      }}
    >
      {/* 3D shine overlay */}
      <div className="tilt-shine" style={{ borderRadius: 'inherit' }} />

      {/* Dog-ear */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 0, height: 0, borderStyle: 'solid',
        borderWidth: '0 18px 18px 0',
        borderColor: `transparent #1a2744 transparent transparent`,
        borderRadius: '0 14px 0 0', opacity: 0.2,
      }} />

      <h3 className="mb-3 flex items-center gap-2" style={{
        fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.1rem', color: '#1a2744',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: palette.dot, border: `1.5px solid #1a2744`, display: 'inline-block', flexShrink: 0 }} />
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
              background: '#FFFFFF',
              border: `1.5px solid ${palette.border}`,
              borderRadius: '4px 8px 6px 10px / 8px 4px 10px 6px',
              color: '#1a2744',
              display: 'inline-block',
              lineHeight: 1.6,
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLSpanElement).style.boxShadow = `0 4px 12px ${palette.border}55`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLSpanElement).style.transform = '';
              (e.currentTarget as HTMLSpanElement).style.boxShadow = '';
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Dots decoration */}
      <div style={{ position: 'absolute', bottom: 8, right: 10, display: 'flex', gap: 3, opacity: 0.5 }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: palette.dot }} />)}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" style={{ flexShrink: 0 }}>
          <path d="M2,9 Q7,2 14,9 Q21,16 26,9" stroke="#0175C2" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: '1.5rem', color: '#1a2744', letterSpacing: '0.02em' }}>
          {t.ui.sections.skills}
        </h2>
        <svg className="flex-1" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" fill="none">
          <path d="M0,3 Q25,0 50,3 Q75,6 100,3 Q125,0 150,3 Q175,6 200,3" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.data.skills.map((skillGroup, index) => (
          <SkillCard key={index} skillGroup={skillGroup} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
};