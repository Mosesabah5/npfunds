import React from 'react';
import { SITE_CONTENT } from '../data/content';

interface SampleCopyBadgeProps {
  className?: string;
}

export const SampleCopyBadge: React.FC<SampleCopyBadgeProps> = ({ className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-[#F1E7D8] border border-[#C9A45C]/60 text-[#566070] text-xs font-medium px-3 py-1 rounded-md ${className}`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] shrink-0"
        aria-hidden="true"
      />
      <span>{SITE_CONTENT.sampleCopyBadgeText}</span>
    </span>
  );
};
