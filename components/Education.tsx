import React from 'react';
import { useTranslation } from '../i18n/index';
import { useInView } from '../hooks/useInView';

export const Education: React.FC = () => {
  const { t } = useTranslation();
  const { education } = t.data;
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-lg font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{t.ui.sections.education}</h2>
      </div>

      <div className={`group p-6 sm:p-8 rounded-[24px] bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/60 hover:border-slate-300 dark:hover:bg-slate-900/80 dark:hover:border-slate-700 flex flex-col md:flex-row gap-8 items-start shadow-sm dark:shadow-none transition-all duration-300 hover-lift scroll-reveal ${isInView ? 'visible' : ''}`}>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-accent transition-colors">{education.school}</h3>
          <p className="text-accent font-medium mb-4">{education.major}</p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-700"></span>
              <span>{education.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-700"></span>
              <span>GPA: <span className="text-slate-700 dark:text-slate-200 font-semibold">{education.gpa}</span></span>
            </div>
          </div>

          <div className="space-y-2">
            {education.details.map((detail, idx) => (
              <p key={idx} className="text-sm text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-800 pl-4 group-hover:border-accent/50 transition-colors">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};