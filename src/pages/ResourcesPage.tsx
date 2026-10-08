import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { SampleCopyBadge } from '../components/SampleCopyBadge';
import { usePreviewToast } from '../components/ToastContext';
import { ArchPhotoFrame, Reveal, SITE_IMAGES } from '../components/ArchFrame';

export const ResourcesPage: React.FC = () => {
  const { resources } = SITE_CONTENT;
  const { triggerPreviewToast } = usePreviewToast();
  const [openFaqId, setOpenFaqId] = useState<string | null>(resources.faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <PageMeta
        title={resources.seo.title}
        description={resources.seo.description}
      />

      {/* Compact Midnight Navy Title Band */}
      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 sm:py-16 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A45C] mb-2">
            Free Downloads · Jump Start Portal · FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading text-[#FBF7F0] max-w-3xl leading-tight">
            {resources.heading}
          </h1>
          <div className="mt-5 mb-4">
            <span className="ember-rule" aria-hidden="true" />
          </div>
          <p className="text-base sm:text-lg text-[#FBF7F0]/85 max-w-2xl leading-relaxed">
            {resources.lead}
          </p>
        </div>
      </section>

      {/* Free Downloads Section + Archival Study Photo */}
      <section id="free-downloads" className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            <Reveal className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
                  Free Downloads
                </h2>
                <SampleCopyBadge />
              </div>
              <div>
                <span className="ember-rule" aria-hidden="true" />
              </div>
              <p className="text-base text-[#566070] leading-relaxed max-w-2xl">
                Introductory checklists, worksheets, and briefing papers to help your church leadership or nonprofit board organize your project before approaching grantmakers.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <ArchPhotoFrame
                src={SITE_IMAGES.archivalStudy}
                alt="Archival study folders, leather-bound journal, and scripture volume on a walnut desk beside a sunlit arched window"
                caption="Practical readiness checklists and planning worksheets for ministry leaders."
                shape="editorial"
                aspectClass="aspect-[16/10]"
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.downloads.map((dl, idx) => (
              <Reveal
                key={dl.id}
                delayMs={idx * 70}
                className="bg-[#F1E7D8]/55 border border-[#DDD0BC] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-[#C2490A] mb-2">
                    {dl.formatLabel}
                  </p>
                  <h3 className="text-2xl font-serif-heading text-[#0E1A33] mb-3">
                    {dl.title}
                  </h3>
                  <p className="text-base text-[#566070] leading-relaxed mb-8">
                    {dl.description}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      triggerPreviewToast(`Sample download requested: ${dl.title}`)
                    }
                    className="btn-lift inline-flex items-center justify-center gap-2.5 w-full px-5 py-3 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#0E1A33] hover:text-[#FBF7F0] transition-colors min-h-[44px]"
                  >
                    <Download className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
                    <span>Download guide</span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jump Start Resources (Members-Only Note) */}
      <section
        id="jump-start-resources"
        className="py-16 lg:py-20 bg-[#F1E7D8] border-y border-[#DDD0BC]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#FBF7F0] border border-[#C9A45C]/70 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2490A]">
                  <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{resources.jumpStartResources.badge}</span>
                </span>
                {resources.jumpStartResources.isSampleCopy && <SampleCopyBadge />}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                {resources.jumpStartResources.heading}
              </h2>
              <p className="text-base text-[#566070] leading-relaxed">
                {resources.jumpStartResources.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/login"
                className="btn-lift text-center px-6 py-3.5 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#F1E7D8] min-h-[48px] flex items-center justify-center"
              >
                Member log in
              </Link>
              <Link
                to="/services/jump-start"
                className="btn-lift text-center px-6 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-sm hover:bg-[#FF7420] min-h-[48px] flex items-center justify-center"
              >
                Learn about Jump Start ($249)
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Clean Accordion */}
      <section id="faq" className="py-20 lg:py-28 bg-[#FBF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
                Frequently asked questions
              </h2>
              <div className="mt-3">
                <span className="ember-rule" aria-hidden="true" />
              </div>
            </div>
            <SampleCopyBadge />
          </Reveal>

          <div className="divide-y divide-[#DDD0BC] border-y border-[#DDD0BC]">
            {resources.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-5">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left py-2 flex items-center justify-between gap-4 font-serif-heading text-xl sm:text-2xl text-[#0E1A33] hover:text-[#C2490A] transition-colors min-h-[48px]"
                    >
                      <span>{faq.question}</span>
                      <span className="w-8 h-8 rounded-full border border-[#C9A45C]/60 flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#566070]" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div className="pt-3 pb-2 pr-6 space-y-3">
                      <p className="text-base text-[#14161C]/90 leading-relaxed">
                        {faq.answer}
                      </p>
                      {faq.isSampleCopy && (
                        <div>
                          <SampleCopyBadge />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Reveal className="mt-14 bg-[#0E1A33] text-[#FBF7F0] border border-[#C9A45C]/40 rounded-2xl p-6 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 navy-surface">
            <div>
              <h3 className="text-2xl font-serif-heading text-[#FBF7F0]">
                Have another question about your project?
              </h3>
              <p className="text-sm text-[#FBF7F0]/80 mt-1">
                Call {SITE_CONTENT.contact.phone} or schedule a free strategy call with our team.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-lift px-7 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-sm hover:bg-[#FF7420] whitespace-nowrap shrink-0 min-h-[48px] inline-flex items-center"
            >
              Book a free grant strategy call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};
