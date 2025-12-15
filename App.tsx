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
import { GithubIcon, LinkedinIcon, SunIcon, MoonIcon } from './components/Icon';

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
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
    <div className="min-h-screen bg-slate-50 dark:bg-radial-hero text-slate-900 dark:text-slate-200 font-sans selection:bg-accent/20 selection:text-accent transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Navigation Bar */}
        <nav className="flex items-center justify-between mb-12 animate-fade-in-down print:hidden">
          <div className="flex items-center gap-4">
            {CONTACT_DATA.avatarUrl ? (
              <img
                src={CONTACT_DATA.avatarUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700 shadow-md"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 text-white font-bold text-lg">
                A
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">{t.ui.nav.portfolio}</span>
              <span className="font-bold text-slate-900 dark:text-slate-200 text-sm transition-colors">{t.data.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1"></div>
            <a
              href={`https://${CONTACT_DATA.github}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`https://${CONTACT_DATA.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </nav>

        <main className="animate-fade-in-up space-y-2">
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