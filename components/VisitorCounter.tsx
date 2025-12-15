import React, { useEffect, useState } from 'react';

interface VisitorData {
    count: number;
    country?: string;
    flag?: string;
}

export const VisitorCounter: React.FC = () => {
    const [data, setData] = useState<VisitorData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let countVal = 0;
            let countryName = '';
            let countryCode = '';

            // 1. Fetch Count (CounterAPI)
            try {
                // Namespace: anphu123, Key: portfolio
                // This increments the counter
                const countRes = await fetch('https://api.counterapi.dev/v1/anphu123/portfolio/up');
                const countJson = await countRes.json();
                if (countJson.count) {
                    countVal = countJson.count;
                } else {
                    // Fallback: try just getting the count without incrementing if 'up' fails or if we want to just read
                    // But usually 'up' is what we want.
                    // If first time, it might need creation, but counterapi.dev usually auto-creates.
                }
            } catch (e) {
                console.warn('Count API failed:', e);
            }

            // 2. Fetch Location (IPAPI) - Independent try/catch
            try {
                const locRes = await fetch('https://ipapi.co/json/');
                const locJson = await locRes.json();
                if (locJson.country_name) {
                    countryName = locJson.country_name;
                    countryCode = locJson.country_code;
                }
            } catch (e) {
                console.warn('Location API failed:', e);
            }

            if (countVal > 0) {
                setData({
                    count: countVal,
                    country: countryName,
                    flag: countryCode
                });
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    // Helper to get flag emoji
    const getFlagEmoji = (countryCode: string) => {
        if (!countryCode) return '';
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    // Fallback data for display if API fails (or while loading)
    const displayCount = data?.count ?? 0;
    // Attempt to get country/flag, otherwise hide that part
    const hasLocation = !!data?.country;

    // Don't show loading state, just render what we have (or 0) to seem faster/seamless
    // or simple skeleton

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6 text-[10px] sm:text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-900/50 py-2 px-4 rounded-full border border-slate-200 dark:border-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors cursor-help" title="Visitor Count">
            <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${data ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`}></span>
                <span>Total Visits: <span className="font-bold text-slate-600 dark:text-slate-300">{displayCount > 0 ? displayCount.toLocaleString() : '...'}</span></span>
            </div>

            {hasLocation && (
                <>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <div className="flex items-center gap-1.5">
                        <span>From:</span>
                        <span className="font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
                            <span>{getFlagEmoji(data!.flag || '')}</span>
                            <span>{data!.country}</span>
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};
