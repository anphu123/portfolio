import React from 'react';
import { useTranslation } from '../i18n/index';
import { CONTACT_DATA } from '../constants';
import { MailIcon, MapPinIcon, PhoneIcon, DownloadIcon } from './Icon';

// Small doodle decorations for hero section
const DoodleHeart = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle', animation: 'wiggle 3s ease-in-out infinite' }}>
    <path d="M12,19 C12,19 2,12 2,6 C2,3 4,1 7,1 C9,1 11,2.5 12,4 C13,2.5 15,1 17,1 C20,1 22,3 22,6 C22,12 12,19 12,19 Z" stroke="#c4446e" strokeWidth="2" fill="none" strokeLinejoin="round"/>
  </svg>
);

const DoodleStar = ({ style }: { style?: React.CSSProperties }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'inline-block', ...style }}>
    <path d="M10,2 L11.8,7.6 L18,7.6 L13,11.2 L15,17 L10,13.5 L5,17 L7,11.2 L2,7.6 L8.2,7.6 Z" stroke="#f5a623" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
  </svg>
);

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { name, role, summary } = t.data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
      {/* Main info card — doodle style */}
      <div
        className="relative p-6 sm:p-8 overflow-hidden group transition-all duration-300 doodle-card"
        style={{ borderRadius: '18px 26px 22px 30px / 26px 18px 30px 22px' }}
      >
        {/* Washi tape top decoration */}
        <div style={{
          position: 'absolute',
          top: -10,
          left: '35%',
          width: 70,
          height: 20,
          background: 'repeating-linear-gradient(45deg, rgba(232,93,38,0.35), rgba(232,93,38,0.35) 4px, rgba(245,166,35,0.35) 4px, rgba(245,166,35,0.35) 8px)',
          borderRadius: 3,
          transform: 'rotate(-1.5deg)',
          zIndex: 2,
        }} />

        {/* Background doodle sketch */}
        <svg className="absolute top-4 right-4 opacity-5 pointer-events-none" width="160" height="160" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2d2013" strokeWidth="0.8"/>
        </svg>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col items-start flex-1">
            {/* Available badge — doodle style */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 print:hidden"
              style={{
                background: '#fef9c3',
                border: '1.5px solid #c4a882',
                borderRadius: '6px 10px 8px 12px / 10px 6px 12px 8px',
                boxShadow: '2px 2px 0 #c4a882',
                fontFamily: "'Patrick Hand', cursive",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full"
                  style={{ background: '#3a8c4e', opacity: 0.7 }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ background: '#3a8c4e' }}
                />
              </span>
              <span style={{ fontSize: '0.78rem', color: '#5a4030', fontWeight: 600 }}>
                {t.ui.hero.available}
              </span>
            </div>

            {/* Name — big hand-drawn style */}
            <h1
              className="mb-3 tracking-tight scribble-underline"
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                color: '#e85d26',
                lineHeight: 1.1,
                textShadow: '3px 3px 0 rgba(232,93,38,0.15)',
                marginBottom: '0.5rem',
                display: 'inline-block',
              }}
            >
              {name}
              <DoodleStar style={{ marginLeft: 8, animation: 'float-doodle 3s ease-in-out infinite' }} />
            </h1>

            {/* Role tag */}
            <div
              className="mb-6 mt-4 inline-block px-3 py-1"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#4a90d9',
                background: 'rgba(74,144,217,0.1)',
                border: '1.5px solid #4a90d9',
                borderRadius: '4px 10px 6px 12px / 10px 4px 12px 6px',
                transform: 'rotate(-0.8deg)',
              }}
            >
              ✏️ {role}
            </div>
          </div>

          {/* Avatar */}
          {CONTACT_DATA.avatarUrl && (
            <div className="relative shrink-0 order-first md:order-last mb-4 md:mb-0 float-doodle-slow">
              <img
                src={CONTACT_DATA.avatarUrl}
                alt={name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover"
                style={{
                  border: '3px solid #2d2013',
                  borderRadius: '45% 55% 50% 60% / 55% 45% 60% 50%',
                  boxShadow: '5px 5px 0 #2d2013',
                }}
              />
              {/* Doodle ring around avatar */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 110 110"
                style={{ top: -5, left: -5, width: 'calc(100% + 10px)', height: 'calc(100% + 10px)' }}
              >
                <ellipse cx="55" cy="55" rx="50" ry="52"
                  stroke="#f5a623" strokeWidth="2" fill="none" strokeDasharray="8 5" opacity="0.7"
                  style={{ animation: 'float-doodle 5s ease-in-out infinite reverse' }}
                />
              </svg>
            </div>
          )}
        </div>

        {/* Summary */}
        <p
          className="leading-relaxed mb-8 max-w-xl"
          style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '1rem',
            color: '#5a4030',
            lineHeight: 1.7,
          }}
        >
          {summary}
          {' '}<DoodleHeart />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 print:hidden">
          {CONTACT_DATA.resumeUrl ? (
            <a
              href={CONTACT_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-doodle inline-flex items-center gap-2 px-5 py-2.5"
              style={{
                background: 'linear-gradient(135deg, #e85d26, #f5a623)',
                color: '#fff',
                fontSize: '0.95rem',
              }}
            >
              <DownloadIcon className="w-4 h-4" />
              <span>{t.ui.hero.downloadPdf}</span>
            </a>
          ) : (
            <button
              onClick={handlePrint}
              className="btn-doodle inline-flex items-center gap-2 px-5 py-2.5"
              style={{
                background: 'linear-gradient(135deg, #e85d26, #f5a623)',
                color: '#fff',
                fontSize: '0.95rem',
              }}
              aria-label="Save Resume as PDF"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>{t.ui.hero.downloadPdf}</span>
            </button>
          )}
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="btn-doodle inline-flex items-center gap-2 px-5 py-2.5"
            style={{
              background: '#fffdf5',
              color: '#2d2013',
              fontSize: '0.95rem',
            }}
          >
            <MailIcon className="w-4 h-4" />
            <span>{t.ui.hero.contactMe}</span>
          </a>
        </div>
      </div>

      {/* Contact card — sticky note style */}
      <div className="flex flex-col gap-4">
        <div
          className="p-6 h-full flex flex-col justify-center relative"
          style={{
            background: '#fef9c3',
            border: '2px solid #2d2013',
            borderRadius: '12px 18px 16px 20px / 18px 12px 20px 16px',
            boxShadow: '4px 4px 0 #2d2013',
            transform: 'rotate(0.5deg)',
          }}
        >
          {/* Tape at top */}
          <div style={{
            position: 'absolute',
            top: -10,
            left: '50%',
            transform: 'translateX(-50%) rotate(-1deg)',
            width: 55,
            height: 18,
            background: 'rgba(200,180,140,0.7)',
            borderRadius: 3,
            border: '1px solid #c4a882',
          }} />

          <h3
            className="mb-6"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#8a7560',
            }}
          >
            {t.ui.hero.contactInfo}
          </h3>

          <ul className="space-y-5">
            {[
              { icon: <PhoneIcon className="w-5 h-5" />, label: t.ui.hero.phone, value: CONTACT_DATA.phone, href: `tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`, color: '#4a90d9' },
              { icon: <MailIcon className="w-5 h-5" />, label: t.ui.hero.email, value: CONTACT_DATA.email, href: `mailto:${CONTACT_DATA.email}`, color: '#3a8c4e' },
              { icon: <MapPinIcon className="w-5 h-5" />, label: t.ui.hero.address, value: CONTACT_DATA.address, href: null, color: '#c4446e' },
            ].map(({ icon, label, value, href, color }) => (
              <li key={label} className="flex items-start gap-4 group">
                <div
                  className="p-2.5 transition-all duration-200"
                  style={{
                    border: `2px solid ${color}`,
                    borderRadius: '8px 12px 10px 14px / 12px 8px 14px 10px',
                    color,
                    background: `${color}15`,
                    boxShadow: `2px 2px 0 ${color}55`,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <span
                    className="block mb-0.5"
                    style={{
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#8a7560',
                      fontWeight: 700,
                      fontFamily: "'Patrick Hand', cursive",
                    }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontSize: '0.9rem',
                        color: '#2d2013',
                        fontFamily: "'Caveat', cursive",
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: '#2d2013',
                        fontFamily: "'Caveat', cursive",
                        fontWeight: 600,
                      }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Bottom doodle decoration */}
          <svg className="mt-6 w-full" height="14" viewBox="0 0 200 14" fill="none" style={{ opacity: 0.35 }}>
            <path d="M0,7 Q25,2 50,7 Q75,12 100,7 Q125,2 150,7 Q175,12 200,7" stroke="#8a7560" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  );
};