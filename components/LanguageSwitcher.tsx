import React from 'react';
import { useTranslation, Language } from '../i18n/index';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useTranslation();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'vi' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer text-xs font-medium"
            aria-label="Switch Language"
            title={language === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
        >
            <span className="text-base">{language === 'en' ? '🇺🇸' : '🇻🇳'}</span>
            <span className="hidden sm:inline">{language === 'en' ? 'EN' : 'VI'}</span>
        </button>
    );
};
