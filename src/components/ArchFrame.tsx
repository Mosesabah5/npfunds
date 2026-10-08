import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`reveal-block ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

interface ArchPortraitProps {
  initials: string;
  caption: string;
  name: string;
  size?: 'md' | 'lg';
  variant?: 'sand' | 'navy';
}

export const ArchPortrait: React.FC<ArchPortraitProps> = ({
  initials,
  caption,
  name,
  size = 'lg',
  variant = 'sand',
}) => {
  const dimensions =
    size === 'lg'
      ? 'w-44 sm:w-48 h-56 sm:h-60'
      : 'w-36 sm:w-40 h-48 sm:h-52';

  const isNavy = variant === 'navy';

  return (
    <div
      role="img"
      aria-label={`${caption} (${name})`}
      className={`relative ${dimensions} rounded-t-full rounded-b-xl overflow-hidden flex flex-col items-center justify-end p-5 text-center select-none ${
        isNavy
          ? 'bg-[#0E1A33] text-[#FBF7F0] border border-[#C9A45C]/50'
          : 'bg-[#F1E7D8] text-[#14161C] border border-[#C9A45C]/60'
      }`}
    >
      {/* Inner Gold Arch Keyline & Light Rays SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 260"
        fill="none"
        aria-hidden="true"
      >
        {/* Outer subtle arch */}
        <path
          d="M 12 248 L 12 100 A 88 88 0 0 1 188 100 L 188 248 Z"
          stroke="#C9A45C"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        {/* Subtle radiating harvest/sanctuary lines */}
        <line x1="100" y1="24" x2="100" y2="68" stroke="#C9A45C" strokeOpacity="0.28" strokeWidth="1" />
        <line x1="100" y1="100" x2="42" y2="48" stroke="#C9A45C" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="100" y1="100" x2="158" y2="48" stroke="#C9A45C" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="100" cy="105" r="44" stroke="#C9A45C" strokeOpacity="0.3" strokeWidth="1" />
      </svg>

      {/* Initials Monogram */}
      <div className="relative z-10 my-auto pt-3 flex flex-col items-center">
        <span
          className={`text-4xl sm:text-5xl font-serif-heading tracking-tight ${
            isNavy ? 'text-[#FBF7F0]' : 'text-[#0E1A33]'
          }`}
        >
          {initials}
        </span>
        <span
          className="block w-6 h-0.5 bg-[#F7630D] mt-2"
          aria-hidden="true"
        />
      </div>

      {/* Caption */}
      <span
        className={`relative z-10 text-xs leading-snug ${
          isNavy ? 'text-[#FBF7F0]/75' : 'text-[#566070]'
        }`}
      >
        {caption}
      </span>
    </div>
  );
};

export const SanctuaryArchMotif: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 360 440"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M 20 420 L 20 180 A 160 160 0 0 1 340 180 L 340 420"
      stroke="#C9A45C"
      strokeOpacity="0.24"
      strokeWidth="1.25"
    />
    <path
      d="M 44 420 L 44 180 A 136 136 0 0 1 316 180 L 316 420"
      stroke="#C9A45C"
      strokeOpacity="0.14"
      strokeWidth="1"
    />
    <circle cx="180" cy="180" r="6" fill="#C9A45C" fillOpacity="0.35" />
  </svg>
);
