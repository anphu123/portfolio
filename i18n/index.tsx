import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from './translations/en';
import { vi } from './translations/vi';

export type Language = 'en' | 'vi';

export interface Translations {
    ui: {
        hero: {
            available: string;
            downloadPdf: string;
            contactMe: string;
            contactInfo: string;
            phone: string;
            email: string;
            address: string;
        };
        sections: {
            experience: string;
            skills: string;
            projects: string;
            education: string;
        };
        projects: {
            project: string;
            techStack: string;
            keyFeatures: string;
            allFeatures: string;
            responsibilities: string;
            viewDetails: string;
        };
        footer: {
            rights: string;
            builtWith: string;
        };
        nav: {
            portfolio: string;
        };
    };
    data: {
        name: string;
        role: string;
        summary: string;
        experience: Array<{
            role: string;
            company: string;
            period: string;
            description: string[];
        }>;
        skills: Array<{
            category: string;
            items: string[];
        }>;
        education: {
            school: string;
            major: string;
            period: string;
            gpa: string;
            details: string[];
        };
        projects: Array<{
            name: string;
            company?: string;
            period: string;
            techStack: string;
            features: string[];
            responsibilities?: string[];
        }>;
    };
}

const translations: Record<Language, Translations> = {
    en,
    vi,
};

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio-language') as Language;
            if (saved && (saved === 'en' || saved === 'vi')) {
                return saved;
            }
            // Check browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('vi')) {
                return 'vi';
            }
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
        document.documentElement.lang = language;
    }, [language]);

    const value: I18nContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};

export const useTranslation = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
