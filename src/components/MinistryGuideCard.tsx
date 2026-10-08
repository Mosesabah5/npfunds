import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

interface MinistryGuideCardProps {
  heading?: string;
  subtitle?: string;
}

export const MinistryGuideCard: React.FC<MinistryGuideCardProps> = ({
  heading = SITE_CONTENT.home.guideCard.title,
  subtitle = SITE_CONTENT.home.guideCard.subtitle,
}) => {
  const [selectedId, setSelectedId] = useState<string>(SITE_CONTENT.services[0].id);

  const selectedService =
    SITE_CONTENT.services.find((s) => s.id === selectedId) || SITE_CONTENT.services[0];

  return (
    <div className="relative p-2 sm:p-3 rounded-t-[160px] rounded-b-2xl border border-[#C9A45C]/60 bg-[#0E1A33]/30">
      {/* Tall Arch Frame containing the Ivory Card */}
      <div className="relative bg-[#FBF7F0] text-[#14161C] rounded-t-[148px] rounded-b-xl border border-[#C9A45C]/70 pt-12 sm:pt-14 pb-6 sm:pb-8 px-5 sm:px-8 overflow-hidden">
        {/* Subtle top arch ornament */}
        <div className="flex flex-col items-center text-center mb-6">
          <svg
            className="w-12 h-6 text-[#C9A45C] mb-2"
            viewBox="0 0 48 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 4 22 A 20 20 0 0 1 44 22"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="10" r="2.5" fill="#F7630D" />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
            {heading}
          </h2>
          <p className="text-sm text-[#566070] mt-1.5 max-w-sm">
            {subtitle}
          </p>
        </div>

        {/* 4 Selectable Rows */}
        <div
          role="radiogroup"
          aria-label={heading}
          className="divide-y divide-[#DDD0BC] border-y border-[#DDD0BC] mb-6"
        >
          {SITE_CONTENT.services.map((service, index) => {
            const isSelected = service.id === selectedId;
            return (
              <button
                key={service.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedId(service.id)}
                className={`w-full text-left py-3.5 px-3 sm:px-4 transition-colors flex items-center justify-between gap-3 min-h-[54px] ${
                  isSelected
                    ? 'bg-[#F1E7D8] text-[#0E1A33] font-semibold'
                    : 'bg-transparent text-[#14161C] hover:bg-[#F1E7D8]/50'
                }`}
              >
                <span className="flex items-baseline gap-3 text-sm sm:text-base leading-snug">
                  <span className="font-serif-heading text-sm text-[#C2490A] shrink-0">
                    {index + 1}.
                  </span>
                  <span>“{service.guidePromptOption}”</span>
                </span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#F7630D] text-[#0E1A33]'
                      : 'border border-[#566070]/50 text-transparent'
                  }`}
                  aria-hidden="true"
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Result Panel */}
        <div
          key={selectedService.id}
          aria-live="polite"
          className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-xl p-5 transition-opacity duration-200"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs font-medium text-[#566070]">
                Recommended path:
              </span>
              <h3 className="text-xl font-serif-heading text-[#0E1A33]">
                {selectedService.name}
              </h3>
              {selectedService.badge && (
                <span className="text-xs font-semibold text-[#C2490A]">
                  · {selectedService.badge}
                </span>
              )}
            </div>
            <span className="text-xs font-semibold text-[#0E1A33]">
              {selectedService.priceDisplay}
            </span>
          </div>

          <p className="text-sm text-[#14161C]/90 leading-relaxed mb-4">
            {selectedService.guideResultSentence}
          </p>

          <Link
            to={selectedService.slug}
            className="btn-lift inline-flex items-center justify-between w-full sm:w-auto gap-3 px-5 py-3 rounded-lg bg-[#0E1A33] text-[#FBF7F0] font-semibold text-sm hover:bg-[#18294D] whitespace-nowrap min-h-[44px]"
          >
            <span>
              {SITE_CONTENT.home.guideCard.buttonPrefix} {selectedService.name}
            </span>
            <ArrowRight className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};
