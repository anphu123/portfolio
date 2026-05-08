import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { LanguageProvider, useTranslation } from './i18n/index';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { CONTACT_DATA } from './constants';
import { GithubIcon, LinkedinIcon } from './components/Icon';

// Doodle SVG decorations scattered around the page
const DoodleStars = () => (
  <svg className="absolute pointer-events-none select-none" style={{ top: 80, right: 40, opacity: 0.18, animation: 'float-doodle 4s ease-in-out infinite' }} width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M30 5 L33 22 L50 22 L37 32 L42 50 L30 40 L18 50 L23 32 L10 22 L27 22 Z" stroke="#e85d26" strokeWidth="2" fill="none" strokeLinejoin="round"/>
  </svg>
);

const DoodleSpiral = () => (
  <svg className="absolute pointer-events-none select-none" style={{ bottom: 120, left: 20, opacity: 0.12, animation: 'float-doodle 6s ease-in-out infinite reverse' }} width="50" height="50" viewBox="0 0 50 50" fill="none">
    <path d="M25,25 C25,25 28,18 25,15 C22,12 17,15 17,20 C17,26 22,30 28,28 C34,26 36,19 32,14 C28,9 21,11 18,16 C15,21 17,29 23,32 C29,35 37,31 38,25" stroke="#4a90d9" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const DoodleArrow = () => (
  <svg className="absolute pointer-events-none select-none" style={{ top: 200, left: 10, opacity: 0.13, animation: 'float-doodle 5s ease-in-out infinite' }} width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M8,20 Q20,5 32,20" stroke="#3a8c4e" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M27,15 L32,20 L27,25" stroke="#3a8c4e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // default light for doodle
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: theme === 'dark'
          ? '#1a1208'
          : '#fdf6e3',
        color: theme === 'dark' ? '#f5edd8' : '#2d2013',
        fontFamily: "'Patrick Hand', cursive",
      }}
    >
      {/* Floating doodle decorations */}
      <DoodleStars />
      <DoodleSpiral />
      <DoodleArrow />

      {/* Paper lines subtle background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(196,168,130,0.12) 28px)',
        backgroundSize: '100% 28px',
      }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative">

        {/* Navigation Bar - hand-drawn style */}
        <nav
          className="flex items-center justify-between mb-12 print:hidden"
          style={{ animation: 'fadeInDown 0.6s ease-out forwards' }}
        >
          <div className="flex items-center gap-4">
            {CONTACT_DATA.avatarUrl ? (
              <div className="relative">
                <img
                  src={CONTACT_DATA.avatarUrl}
                  alt="Profile"
                  className="w-11 h-11 object-cover"
                  style={{
                    border: '2.5px solid #2d2013',
                    borderRadius: '40% 50% 45% 55% / 50% 40% 55% 45%',
                    boxShadow: '3px 3px 0 #2d2013',
                  }}
                />
              </div>
            ) : (
              <div
                className="w-11 h-11 flex items-center justify-center font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #e85d26, #f5a623)',
                  border: '2.5px solid #2d2013',
                  borderRadius: '40% 50% 45% 55% / 50% 40% 55% 45%',
                  boxShadow: '3px 3px 0 #2d2013',
                  color: '#fff',
                  fontFamily: "'Pangolin', cursive",
                }}
              >
                A
              </div>
            )}
            <div className="flex flex-col">
              <span style={{
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#8a7560',
                fontFamily: "'Patrick Hand', cursive",
              }}>{t.ui.nav.portfolio}</span>
              <span style={{
                fontFamily: "'Caveat', cursive",
                fontWeight: 700,
                fontSize: '1.1rem',
                color: theme === 'dark' ? '#f5edd8' : '#2d2013',
              }}>{t.data.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            {/* Theme toggle - doodle style */}
            <button
              onClick={toggleTheme}
              className="btn-doodle px-3 py-1.5 text-sm"
              style={{
                background: theme === 'dark' ? '#f5a623' : '#2d2013',
                color: theme === 'dark' ? '#2d2013' : '#fdf6e3',
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Divider doodle */}
            <svg width="6" height="28" viewBox="0 0 6 28" fill="none" style={{ opacity: 0.4 }}>
              <path d="M3,2 Q1,8 3,14 Q5,20 3,26" stroke="#8a7560" strokeWidth="2" strokeLinecap="round"/>
            </svg>

            <a
              href={`https://${CONTACT_DATA.github}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 btn-doodle px-3 py-1.5 text-sm"
              style={{
                background: theme === 'dark' ? '#2d2013' : '#fffdf5',
                color: theme === 'dark' ? '#f5edd8' : '#2d2013',
                fontFamily: "'Caveat', cursive",
              }}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`https://${CONTACT_DATA.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 btn-doodle px-3 py-1.5 text-sm"
              style={{
                background: '#4a90d9',
                color: '#fff',
                borderColor: '#2d2013',
                fontFamily: "'Caveat', cursive",
              }}
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </nav>

        <main className="space-y-10" style={{ animation: 'fadeIn 0.7s ease-out forwards' }}>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;