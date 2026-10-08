import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { ArchPortrait, Reveal } from '../components/ArchFrame';

export const AboutPage: React.FC = () => {
  const { about, missionVerse, stats } = SITE_CONTENT;

  return (
    <>
      <PageMeta title={about.seo.title} description={about.seo.description} />

      {/* Compact Midnight Navy Title Band */}
      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 sm:py-16 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A45C] mb-2">
            About {SITE_CONTENT.brand.name} · {SITE_CONTENT.brand.establishedLine}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading text-[#FBF7F0] max-w-3xl leading-tight">
            {about.introHeading}
          </h1>
          <div className="mt-5">
            <span className="ember-rule" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Long-Form Editorial Layout with Sticky Side Summary on Desktop */}
      <section className="py-16 lg:py-24 bg-[#FBF7F0] border-b border-[#DDD0BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left/Main Long-Form Narrative */}
            <div className="lg:col-span-7 space-y-12">
              <Reveal className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                  {about.storyHeading}
                </h2>
                {about.storyParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`text-base sm:text-lg text-[#14161C]/90 leading-relaxed ${
                      idx === 0
                        ? 'first-letter:text-5xl first-letter:font-serif-heading first-letter:text-[#0E1A33] first-letter:float-left first-letter:mr-3 first-letter:leading-none'
                        : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              {/* Mission Verse Editorial Pull Quote */}
              <Reveal className="bg-[#0E1A33] text-[#FBF7F0] rounded-2xl p-7 sm:p-9 border border-[#C9A45C]/50 navy-surface">
                <p className="text-xs font-semibold text-[#C9A45C] mb-3">
                  Mission verse
                </p>
                <blockquote className="space-y-3">
                  <p className="text-2xl sm:text-3xl font-serif-heading italic text-[#FBF7F0] leading-snug">
                    {missionVerse.text}
                  </p>
                  <footer className="text-sm font-medium text-[#C9A45C]">
                    — {missionVerse.reference}
                  </footer>
                </blockquote>
              </Reveal>

              {/* Statement of Faith */}
              <Reveal className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-2xl p-7 sm:p-9 space-y-4">
                <h2 className="text-2xl font-serif-heading text-[#0E1A33]">
                  {about.statementOfFaith.heading}
                </h2>
                <p className="text-base text-[#14161C]/90 leading-relaxed">
                  {about.statementOfFaith.summary}
                </p>
                <p className="text-xs font-medium text-[#566070] bg-[#FBF7F0] border border-[#C9A45C]/50 rounded px-3 py-1.5 inline-block">
                  {about.statementOfFaith.carryoverNote}
                </p>
              </Reveal>
            </div>

            {/* Right: Sticky Side Summary on Desktop */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-t-[110px] rounded-b-2xl pt-12 pb-8 px-6 sm:px-8 space-y-6">
                <div className="text-center border-b border-[#DDD0BC] pb-5">
                  <p className="text-xs font-semibold text-[#C2490A] mb-1">
                    Institutional record
                  </p>
                  <h3 className="text-2xl font-serif-heading text-[#0E1A33]">
                    Since {SITE_CONTENT.brand.foundedYear}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-serif-heading text-[#0E1A33] tabular-nums">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#566070] mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-[#DDD0BC] space-y-2">
                  <p className="text-sm font-semibold text-[#0E1A33]">
                    Personal attention, always
                  </p>
                  <p className="text-sm text-[#566070] leading-relaxed">
                    {SITE_CONTENT.brand.customerServicePromise}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="btn-lift w-full text-center px-6 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-sm hover:bg-[#FF7420] inline-flex items-center justify-center min-h-[48px]"
                  >
                    Book a free grant strategy call
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 lg:py-28 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14">
            <p className="text-sm font-semibold text-[#C2490A] mb-2">
              Leadership & senior consultants
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
              {about.teamHeading}
            </h2>
            <div className="mt-4">
              <span className="ember-rule" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="space-y-12">
            {about.team.map((member, index) => (
              <Reveal
                key={member.id}
                delayMs={index * 80}
                className="bg-[#F1E7D8]/60 border border-[#DDD0BC] rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start"
              >
                {/* Arch-Shaped Portrait Placeholder */}
                <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start">
                  <ArchPortrait
                    initials={member.initials}
                    caption={about.portraitPlaceholderText}
                    name={member.name}
                    size="lg"
                    variant={index === 0 ? 'navy' : 'sand'}
                  />
                </div>

                {/* Biography & Highlights */}
                <div className="md:col-span-8 lg:col-span-9 space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                      {member.name}
                      {member.credentials ? `, ${member.credentials}` : ''}
                    </h3>
                    <p className="text-sm font-semibold text-[#C2490A] mt-1">
                      {member.role}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {member.bioParagraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-base text-[#14161C]/90 leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#DDD0BC]">
                    <ul className="space-y-2 text-sm text-[#0E1A33] font-medium">
                      {member.highlights.map((item) => (
                        <li key={item} className="flex items-baseline gap-2.5">
                          <span className="text-[#F7630D] font-bold" aria-hidden="true">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
