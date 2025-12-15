import React from 'react';
import { useTranslation } from '../i18n/index';
import { CONTACT_DATA } from '../constants';
import { GithubIcon, LinkedinIcon } from './Icon';

import { VisitorCounter } from './VisitorCounter';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-12 pb-8 border-t border-slate-200 dark:border-slate-800/50 mt-12 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {t.data.name}. {t.ui.footer.rights}.
          </p>
          <p className="text-slate-500/80 text-xs mt-1">
            {t.ui.footer.builtWith}
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={`https://${CONTACT_DATA.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={`https://${CONTACT_DATA.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <VisitorCounter />
    </footer>
  );
};