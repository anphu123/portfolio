import React from 'react';
import { useTranslation } from '../i18n/index';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn-doodle flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold"
      style={{
        background: '#fffdf5',
        color: '#2d2013',
        fontFamily: "'Caveat', cursive",
        fontSize: '0.95rem',
      }}
      aria-label="Switch Language"
      title={language === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
    >
      <span style={{ fontSize: '1rem' }}>{language === 'en' ? '🇺🇸' : '🇻🇳'}</span>
      <span className="hidden sm:inline">{language === 'en' ? 'US' : 'EN'}</span>
    </button>
  );
};
