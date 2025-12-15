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
            try {
                // Parallel requests for speed
                const [countRes, locationRes] = await Promise.all([
                    // Using countapi.xyz - namespace matches repo, key 'visits'
                    fetch('https://api.countapi.xyz/hit/anphu123-portfolio/visits'),
                    // Using ipapi.co for location (free tier, no key needed for client-side)
                    fetch('https://ipapi.co/json/')
                ]);

                const countData = await countRes.json();
                const locationData = await locationRes.json();

                if (countData.value) {
                    setData({
                        count: countData.value,
                        country: locationData.country_name, // e.g., "Vietnam"
                        flag: locationData.country_code   // e.g., "VN" -> standard emoji conversion usually needed, or just use text
                    });
                }
            } catch (error) {
                console.error('Error fetching visitor data:', error);
                // Fail silently
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Fallback data for display if API fails (or while loading)
    const displayCount = data?.count ?? '...';
    // Attempt to get country/flag, otherwise hide that part
    const hasLocation = !!data?.country;

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-6 text-xs text-slate-400">
                <span className="animate-pulse">Loading visitor data...</span>
            </div>
        );
    }

    // Helper to get flag emoji from country code
    const getFlagEmoji = (countryCode: string) => {
        if (!countryCode) return '';
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6 text-[10px] sm:text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-900/50 py-2 px-4 rounded-full border border-slate-200 dark:border-slate-800/50">
            <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${data ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`}></span>
                <span>Total Visits: <span className="font-bold text-slate-600 dark:text-slate-300">{displayCount.toLocaleString()}</span></span>
            </div>

            {hasLocation && (
                <>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <div className="flex items-center gap-1.5">
                        <span>Visiting from:</span>
                        <span className="font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
                            <span>{getFlagEmoji(data!.flag || '')}</span>
                            <span>{data!.country}</span>
                        </span>
                    </div>
                </>
            )}

            {!data && !loading && (
                <span className="text-red-400 text-[9px]">(Counter Unavailable)</span>
            )}
        </div>
    );
};
