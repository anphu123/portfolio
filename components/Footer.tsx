import React from 'react';
import { useTranslation } from '../i18n/index';
import { CONTACT_DATA } from '../constants';
import { GithubIcon, LinkedinIcon } from './Icon';
import { VisitorCounter } from './VisitorCounter';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-14 pb-10 mt-14 print:hidden" style={{ position: 'relative' }}>
      {/* Wavy top border — Flutter Blue */}
      <svg width="100%" height="20" viewBox="0 0 1200 20" preserveAspectRatio="none" fill="none" style={{ display: 'block', marginBottom: 28 }}>
        <path
          d="M0,10 Q60,0 120,10 Q180,20 240,10 Q300,0 360,10 Q420,20 480,10 Q540,0 600,10 Q660,20 720,10 Q780,0 840,10 Q900,20 960,10 Q1020,0 1080,10 Q1140,20 1200,10"
          stroke="#90CAF9" strokeWidth="2.5" strokeLinecap="round" fill="none"
        />
      </svg>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.05rem', color: '#546E7A' }}>
            © {new Date().getFullYear()} {t.data.name}. {t.ui.footer.rights}. ✌️
          </p>
          <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.82rem', color: '#78909C', marginTop: 4 }}>
            {t.ui.footer.builtWith} 🎨
          </p>
        </div>

        {/* Social links — Flutter styled */}
        <div className="flex gap-3">
          <a
            href={`https://${CONTACT_DATA.github}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-doodle p-3 flex items-center justify-center"
            style={{ background: '#1a2744', color: '#F0F9FF' }}
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={`https://${CONTACT_DATA.linkedin}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-doodle p-3 flex items-center justify-center"
            style={{ background: '#0175C2', color: '#fff' }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <VisitorCounter />

      {/* Decorative scribble */}
      <div className="flex justify-center mt-8">
        <svg width="120" height="30" viewBox="0 0 120 30" fill="none" style={{ opacity: 0.2 }}>
          <path d="M10,20 Q20,5 30,15 Q40,25 50,10 Q60,5 70,15 Q80,25 90,10 Q100,5 110,20" stroke="#0175C2" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="60" cy="26" r="2" fill="#54C5F8"/>
        </svg>
      </div>
    </footer>
  );
};