import React from 'react';
import { useTranslation } from '../i18n/index';
import { CONTACT_DATA } from '../constants';
import { MailIcon, MapPinIcon, PhoneIcon, DownloadIcon } from './Icon';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { name, role, summary } = t.data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
      <div className="relative p-6 sm:p-8 rounded-[26px] bg-white dark:bg-card-gradient shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-border/50 overflow-hidden group transition-colors duration-300">
        <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="0.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col items-start flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50 mb-6 backdrop-blur-sm print:hidden transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{t.ui.hero.available}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              <span style={{
                background: 'linear-gradient(to right, #16a34a, #22c55e, #84cc16)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {name}
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-6 font-medium transition-colors">{role}</h2>
          </div>

          {CONTACT_DATA.avatarUrl && (
            <div className="relative shrink-0 order-first md:order-last mb-4 md:mb-0">
              <img
                src={CONTACT_DATA.avatarUrl}
                alt={name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </div>
          )}
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl transition-colors">
          {summary}
        </p>

        <div className="flex flex-wrap gap-3 print:hidden">
          {CONTACT_DATA.resumeUrl ? (
            <a
              href={CONTACT_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gradient text-slate-950 text-sm font-bold uppercase tracking-wide shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>{t.ui.hero.downloadPdf}</span>
            </a>
          ) : (
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gradient text-slate-950 text-sm font-bold uppercase tracking-wide shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Save Resume as PDF"
              title="Save as PDF"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>{t.ui.hero.downloadPdf}</span>
            </button>
          )}
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-200"
          >
            <MailIcon className="w-4 h-4" />
            <span>{t.ui.hero.contactMe}</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="p-6 rounded-[20px] bg-white/80 dark:bg-card/80 border border-slate-200 dark:border-border/60 shadow-lg shadow-slate-200/50 dark:shadow-lg dark:shadow-none backdrop-blur-sm h-full flex flex-col justify-center transition-colors duration-300">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{t.ui.hero.contactInfo}</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">{t.ui.hero.phone}</span>
                <a href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`} className="text-sm text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-white transition-colors">
                  {CONTACT_DATA.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">{t.ui.hero.email}</span>
                <a href={`mailto:${CONTACT_DATA.email}`} className="text-sm text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-white transition-colors">
                  {CONTACT_DATA.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">{t.ui.hero.address}</span>
                <span className="text-sm text-slate-700 dark:text-slate-300 block transition-colors">
                  {CONTACT_DATA.address}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};