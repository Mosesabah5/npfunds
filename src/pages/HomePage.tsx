import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Search } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { MinistryGuideCard } from '../components/MinistryGuideCard';
import { ArchPortrait, Reveal, SanctuaryArchMotif } from '../components/ArchFrame';

export const HomePage: React.FC = () => {
  const { home, stats, services, directory, about, missionVerse, contact } = SITE_CONTENT;

  // Split services into the 3 progressive stages + the parallel Government Grants track
  const progressiveStages = services.filter((s) => s.id !== 'government-grants');
  const governmentTrack = services.find((s) => s.id === 'government-grants')!;

  return (
    <>
      <PageMeta title={home.seo.title} description={home.seo.description} />

      {/* 1. Hero (Midnight Navy, Full-Width, with Arch Guide & Bottom Stats Strip) */}
      <section className="relative navy-atmosphere navy-surface text-[#FBF7F0] overflow-hidden border-b border-[#C9A45C]/40">
        {/* Background subtle architectural arch & light rays */}
        <SanctuaryArchMotif className="hidden lg:block absolute -right-16 -top-10 w-[520px] h-[620px] opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-14 lg:pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Column: Headline, Lead, Primary & Secondary Buttons */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 text-sm font-medium text-[#C9A45C] mb-5">
                <span className="w-2 h-2 rounded-full bg-[#C9A45C]" aria-hidden="true" />
                <span>{SITE_CONTENT.brand.establishedLine}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-serif-heading text-[#FBF7F0] leading-[1.06] tracking-tight">
                {home.hero.headline}
              </h1>

              <div className="mt-6 mb-6">
                <span className="ember-rule" aria-hidden="true" />
              </div>

              <p className="text-lg sm:text-xl text-[#FBF7F0]/85 leading-relaxed max-w-2xl mb-9">
                {home.hero.lead}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-lift px-7 py-4 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] whitespace-nowrap min-h-[48px] inline-flex items-center"
                >
                  {home.hero.primaryCta}
                </Link>
                <Link
                  to="/directory"
                  className="btn-lift px-7 py-4 rounded-lg border-2 border-[#FBF7F0] text-[#FBF7F0] font-semibold text-base hover:bg-[#FBF7F0]/10 whitespace-nowrap min-h-[48px] inline-flex items-center"
                >
                  {home.hero.secondaryCta}
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Ministry Guide inside Tall Arch Frame */}
            <div className="lg:col-span-5">
              <MinistryGuideCard />
            </div>
          </div>

          {/* Slim Stats Strip Anchored at Bottom of Hero */}
          <div
            aria-label="Track record statistics"
            className="mt-14 lg:mt-18 pt-10 border-t border-[#C9A45C]/35 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#C9A45C]/30"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={idx === 0 ? 'lg:pr-8' : 'lg:px-8'}
              >
                <p className="text-4xl sm:text-5xl font-serif-heading text-[#FBF7F0] tabular-nums tracking-tight mb-1.5">
                  {stat.value}
                </p>
                <p className="text-sm text-[#C9A45C] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Ministries Choose Us (Two-Column Asymmetric Editorial Split) */}
      <section className="py-20 lg:py-28 bg-[#FBF7F0] border-b border-[#DDD0BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Statement */}
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif-heading text-[#0E1A33] leading-[1.12]">
                {home.whyChoose.heading}
              </h2>
              <div className="mt-5 mb-5">
                <span className="ember-rule" aria-hidden="true" />
              </div>
              <p className="text-base sm:text-lg text-[#566070] leading-relaxed">
                {SITE_CONTENT.brand.corePromise}
              </p>
            </Reveal>

            {/* Right Three Numbered Reasons (Real numerals 1, 2, 3, plain list rows with hairline dividers) */}
            <div className="lg:col-span-7 divide-y divide-[#DDD0BC] border-y border-[#DDD0BC]">
              {home.whyChoose.items.map((item, idx) => (
                <Reveal
                  key={item.title}
                  delayMs={idx * 70}
                  className="py-8 sm:py-10 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8"
                >
                  <span
                    className="text-4xl sm:text-5xl font-serif-heading text-[#C2490A] tabular-nums shrink-0 leading-none"
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-serif-heading text-[#0E1A33] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#566070] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Your Path to Funding (Visual Pathway: 3 Connected Stages + Separate Government Track) */}
      <section className="py-20 lg:py-28 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#C2490A] mb-2">
                Your path to funding
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
                {home.servicesSection.heading}
              </h2>
              <div className="mt-4 mb-4">
                <span className="ember-rule" aria-hidden="true" />
              </div>
              <p className="text-base text-[#566070] leading-relaxed">
                {home.servicesSection.lead}
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#0E1A33] hover:text-[#C2490A] transition-colors whitespace-nowrap"
            >
              <span>Compare all four packages</span>
              <ArrowRight className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
            </Link>
          </Reveal>

          {/* Three Connected Stages along a Horizontal Pathway Line */}
          <div className="relative">
            {/* Horizontal connecting line on desktop */}
            <div
              className="hidden lg:block absolute top-7 left-10 right-10 h-[2px] bg-[#C9A45C]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {progressiveStages.map((stage, index) => {
                const isPopular = Boolean(stage.badge);
                return (
                  <Reveal
                    key={stage.id}
                    delayMs={index * 80}
                    className="flex flex-col"
                  >
                    {/* Pathway Node Marker */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`w-14 h-14 rounded-t-full rounded-b-lg flex items-center justify-center font-serif-heading text-xl border ${
                          isPopular
                            ? 'bg-[#0E1A33] text-[#FBF7F0] border-[#0E1A33]'
                            : 'bg-[#F1E7D8] text-[#0E1A33] border-[#C9A45C]'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#566070]">
                          Stage {index + 1}
                        </span>
                        {stage.badge && (
                          <span className="text-xs font-bold text-[#C2490A] bg-[#F1E7D8] border border-[#C9A45C]/60 px-2.5 py-0.5 rounded">
                            {stage.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stage Content Panel */}
                    <div
                      className={`flex-1 rounded-2xl p-6 sm:p-7 flex flex-col justify-between border ${
                        isPopular
                          ? 'bg-[#F1E7D8] border-2 border-[#0E1A33]'
                          : 'bg-[#F1E7D8]/55 border-[#DDD0BC]'
                      }`}
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-2 mb-2">
                          <h3 className="text-2xl font-serif-heading text-[#0E1A33]">
                            {stage.name}
                          </h3>
                          <span className="text-xs font-semibold text-[#C2490A]">
                            {stage.priceDisplay}
                          </span>
                        </div>
                        <p className="text-base text-[#14161C]/90 leading-relaxed mb-6">
                          {stage.shortSummary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#DDD0BC]">
                        <Link
                          to={stage.slug}
                          className="inline-flex items-center justify-between w-full text-sm font-semibold text-[#0E1A33] hover:text-[#C2490A] py-1"
                        >
                          <span>Explore {stage.name}</span>
                          <ArrowRight className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Separate Parallel Track Beneath: Government Grants */}
          <Reveal className="mt-10 pt-8 border-t border-[#C9A45C]/60">
            <div className="bg-[#0E1A33] text-[#FBF7F0] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#C9A45C]/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6 navy-surface">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#C9A45C]">
                  <span>Dedicated public-funding track</span>
                  <span aria-hidden="true">·</span>
                  <span>{governmentTrack.priceDisplay}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-heading text-[#FBF7F0]">
                  {governmentTrack.name}
                </h3>
                <p className="text-base text-[#FBF7F0]/85 leading-relaxed">
                  {governmentTrack.shortSummary}
                </p>
              </div>

              <Link
                to={governmentTrack.slug}
                className="btn-lift inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border-2 border-[#FBF7F0] text-[#FBF7F0] font-semibold text-sm hover:bg-[#FBF7F0]/10 whitespace-nowrap shrink-0 min-h-[48px]"
              >
                <span>Explore {governmentTrack.name}</span>
                <ArrowRight className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Directory Band (Warm Sand: Copy on Left, Refined Member Search Preview on Right) */}
      <section className="py-20 lg:py-28 bg-[#F1E7D8] border-y border-[#DDD0BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy & Sign-Up CTA */}
            <Reveal className="lg:col-span-5 space-y-5">
              <p className="text-sm font-semibold text-[#C2490A]">
                {home.directoryTeaser.kicker}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33] leading-tight">
                {home.directoryTeaser.heading}
              </h2>
              <div>
                <span className="ember-rule" aria-hidden="true" />
              </div>
              <p className="text-base text-[#14161C]/90 leading-relaxed">
                {home.directoryTeaser.body}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col items-start gap-4">
                <Link
                  to="/directory#create-account"
                  className="btn-lift px-7 py-4 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] whitespace-nowrap min-h-[48px] inline-flex items-center"
                >
                  {home.directoryTeaser.cta}
                </Link>
                <Link
                  to="/directory#member-search-preview"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E1A33] hover:text-[#C2490A] py-1"
                >
                  <span>{home.directoryTeaser.secondaryLinkText}</span>
                  <ArrowRight className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            {/* Right: Refined Mock of the Member Search (using existing sample listings) */}
            <Reveal className="lg:col-span-7">
              <div className="bg-[#FBF7F0] border border-[#C9A45C]/70 rounded-2xl overflow-hidden shadow-sm">
                {/* Mock Header Bar */}
                <div className="bg-[#0E1A33] text-[#FBF7F0] px-5 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 text-sm font-medium">
                    <Search className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
                    <span>Christian Funding Directory · Member search preview</span>
                  </div>
                  <span className="text-xs text-[#C9A45C]">
                    8,000+ verified sources
                  </span>
                </div>

                {/* Sample Rows */}
                <div className="divide-y divide-[#DDD0BC] px-5 sm:px-6">
                  {directory.sampleRows.slice(0, 4).map((row) => (
                    <div
                      key={row.id}
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Lock className="w-3.5 h-3.5 text-[#566070] shrink-0" aria-hidden="true" />
                          <span className="text-sm font-semibold text-[#0E1A33]">
                            {row.funderPlaceholder}
                          </span>
                        </div>
                        <p className="text-xs text-[#566070]">
                          {row.focusArea} · {row.stateRegion} · {row.funderType}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-[#C2490A] bg-[#F1E7D8] border border-[#C9A45C]/50 px-2.5 py-1 rounded self-start sm:self-center shrink-0">
                        {row.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F1E7D8]/70 px-5 sm:px-6 py-3.5 border-t border-[#DDD0BC] flex items-center justify-between text-xs text-[#566070]">
                  <span>{directory.unchangedSystemNote}</span>
                  <Link
                    to="/directory"
                    className="font-semibold text-[#0E1A33] hover:text-[#C2490A] underline shrink-0 ml-3"
                  >
                    Open full preview
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Leadership (Ivory: Dr. Rodman and Tony Turley in Arch Frames with Shortened Bios) */}
      <section className="py-20 lg:py-28 bg-[#FBF7F0] border-b border-[#DDD0BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#C2490A] mb-2">
                {home.teamTeaser.kicker}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
                {home.teamTeaser.heading}
              </h2>
              <div className="mt-4 mb-4">
                <span className="ember-rule" aria-hidden="true" />
              </div>
              <p className="text-base text-[#566070] leading-relaxed">
                {home.teamTeaser.body}
              </p>
            </div>

            <Link
              to="/about"
              className="btn-lift inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#F1E7D8] whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <span>{home.teamTeaser.linkText}</span>
              <ArrowRight className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {about.team.map((member, idx) => (
              <Reveal
                key={member.id}
                delayMs={idx * 90}
                className="bg-[#F1E7D8]/50 border border-[#DDD0BC] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
              >
                <div className="shrink-0">
                  <ArchPortrait
                    initials={member.initials}
                    caption={about.portraitPlaceholderText}
                    name={member.name}
                    size="md"
                    variant="sand"
                  />
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-2xl font-serif-heading text-[#0E1A33]">
                      {member.name}
                      {member.credentials ? `, ${member.credentials}` : ''}
                    </h3>
                    <p className="text-xs font-semibold text-[#C2490A] mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Shortened display bio (first paragraph) */}
                  <p className="text-sm sm:text-base text-[#566070] leading-relaxed">
                    {member.bioParagraphs[0]}
                  </p>

                  <ul className="space-y-1 text-xs text-[#14161C]/90 pt-1">
                    {member.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-baseline gap-2">
                        <span className="text-[#C2490A] font-bold" aria-hidden="true">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E1A33] hover:text-[#C2490A]"
                    >
                      <span>Read full biography</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F7630D]" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Stories Placeholder (Restyled as a Calm, Intentional Archival Empty-State) */}
      <section className="py-20 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                {home.clientStoriesPlaceholder.heading}
              </h2>
              <div className="mt-3">
                <span className="ember-rule" aria-hidden="true" />
              </div>
            </div>

            <div className="relative bg-[#F1E7D8]/75 border border-[#C9A45C]/70 rounded-2xl p-8 sm:p-12 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Calm Archival Window Ornament */}
              <div
                aria-hidden="true"
                className="w-20 h-28 rounded-t-full border border-[#C9A45C] bg-[#FBF7F0] flex flex-col items-center justify-center shrink-0"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C] mb-2" />
                <span className="w-8 h-[1px] bg-[#C9A45C]" />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#C2490A]">
                  Editorial placeholder
                </p>
                <p className="text-xl sm:text-2xl font-serif-heading text-[#0E1A33]">
                  {home.clientStoriesPlaceholder.boxLabel}
                </p>
                <p className="text-sm sm:text-base text-[#566070]">
                  {home.clientStoriesPlaceholder.subNote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Scripture (Midnight Navy, Centered, Very Large Fraunces Pull Quote with Gold Quotation Mark) */}
      <section
        aria-label="Mission scripture verse"
        className="py-20 lg:py-28 navy-atmosphere navy-surface text-[#FBF7F0] border-y border-[#C9A45C]/40"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="space-y-6">
            {/* Soft Gold Quotation Mark & Arch Ornament */}
            <svg
              className="w-14 h-14 mx-auto text-[#C9A45C]"
              viewBox="0 0 56 56"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 8 50 L 8 26 A 20 20 0 0 1 48 26 L 48 50"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="1.25"
              />
              <text
                x="28"
                y="42"
                textAnchor="middle"
                fill="currentColor"
                className="font-serif-heading text-4xl"
              >
                “
              </text>
            </svg>

            <blockquote className="space-y-5">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading italic text-[#FBF7F0] leading-[1.2]">
                {missionVerse.text}
              </p>
              <footer className="text-base font-medium text-[#C9A45C] tracking-wide">
                — {missionVerse.reference}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 8. Closing Call to Action (Warm Sand) */}
      <section className="py-20 lg:py-28 bg-[#F1E7D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading text-[#0E1A33] leading-tight">
              {home.closingCta.heading}
            </h2>
            <div className="mt-5 mb-5">
              <span className="ember-rule" aria-hidden="true" />
            </div>
            <p className="text-lg text-[#14161C]/90 leading-relaxed mb-8">
              {home.closingCta.body}
            </p>

            <div className="mb-8">
              <Link
                to="/contact"
                className="btn-lift inline-flex items-center px-8 py-4 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] whitespace-nowrap min-h-[48px]"
              >
                {home.closingCta.buttonText}
              </Link>
            </div>

            <div className="bg-[#FBF7F0] border-l-4 border-[#C9A45C] rounded-r-xl px-5 py-4 text-sm text-[#566070]">
              {contact.shortDisclaimer}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
