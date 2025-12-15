import React from 'react';
import { useTranslation } from '../i18n/index';
import { useInView } from '../hooks/useInView';

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-lg font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{t.ui.sections.experience}</h2>
        <span className="text-xs text-slate-500 dark:text-slate-600 font-mono">2024 — Present</span>
      </div>

      <div className="space-y-6">
        {t.data.experience.map((job, index) => (
          <div
            key={index}
            className={`group relative p-6 sm:p-8 rounded-[24px] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:bg-slate-900/80 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-none hover-lift scroll-reveal ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-accent transition-colors">
                  {job.role}
                </h3>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{job.company}</div>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-500 whitespace-nowrap">
                {job.period}
              </div>
            </div>

            <ul className="space-y-3">
              {job.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="mt-1.5 min-w-[6px] w-[6px] h-[6px] rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-accent/50 transition-colors"></span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};