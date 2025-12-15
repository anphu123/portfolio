import React from 'react';
import { useTranslation } from '../i18n/index';

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-12">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-lg font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{t.ui.sections.skills}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.data.skills.map((skillGroup, index) => (
          <div
            key={index}
            className="p-5 rounded-[20px] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 shadow-sm dark:shadow-none"
          >
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};