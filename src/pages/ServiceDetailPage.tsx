import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { SampleCopyBadge } from '../components/SampleCopyBadge';
import { usePreviewToast } from '../components/ToastContext';
import { Reveal } from '../components/ArchFrame';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { triggerPreviewToast } = usePreviewToast();

  const service = SITE_CONTENT.services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SITE_CONTENT.services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageMeta
        title={`${service.name} | Services | Here-4-You Consulting`}
        description={service.whatItIs}
      />

      {/* Compact Midnight Navy Title Band */}
      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 sm:py-16 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C9A45C] hover:text-[#FBF7F0] mb-5"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to all services</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading text-[#FBF7F0]">
              {service.name}
            </h1>
            {service.badge && (
              <span className="text-xs font-bold text-[#0E1A33] bg-[#C9A45C] px-3 py-1 rounded">
                {service.badge}
              </span>
            )}
          </div>

          <div className="mt-4 mb-4">
            <span className="ember-rule" aria-hidden="true" />
          </div>

          <p className="text-base sm:text-lg text-[#FBF7F0]/85 max-w-3xl leading-relaxed">
            {service.shortSummary}
          </p>
        </div>
      </section>

      {/* Main Content + Quiet Sticky Summary Panel on the Side */}
      <section className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-12">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33] mb-3">
                  What it is
                </h2>
                <p className="text-base sm:text-lg text-[#14161C]/90 leading-relaxed">
                  {service.whatItIs}
                </p>
              </Reveal>

              <Reveal className="pt-8 border-t border-[#DDD0BC]">
                <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33] mb-3">
                  Who it is for
                </h2>
                <p className="text-base sm:text-lg text-[#14161C]/90 leading-relaxed">
                  {service.whoItIsFor}
                </p>
              </Reveal>

              <Reveal className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-2xl p-6 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                    What you can expect
                  </h2>
                  {service.hasSampleCopy && <SampleCopyBadge />}
                </div>

                <ul className="space-y-4">
                  {service.whatYouCanExpect.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-base text-[#14161C]"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#0E1A33] text-[#FBF7F0] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#F7630D]" aria-hidden="true" />
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Quiet Summary Panel on the Side */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-t-[100px] rounded-b-2xl pt-12 pb-7 px-6 sm:px-8 space-y-5">
                <div className="text-center border-b border-[#DDD0BC] pb-4">
                  <p className="text-xs font-semibold text-[#566070] mb-1">
                    Package investment
                  </p>
                  <p className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                    {service.priceDisplay}
                  </p>
                </div>

                <p className="text-sm text-[#566070] leading-relaxed">
                  {SITE_CONTENT.brand.customerServicePromise}
                </p>

                {service.ctaType === 'toast' ? (
                  <div className="space-y-3 pt-1">
                    <button
                      type="button"
                      onClick={() =>
                        triggerPreviewToast(
                          `Action clicked: ${service.ctaLabel} (${service.priceDisplay})`
                        )
                      }
                      className="btn-lift w-full px-6 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] min-h-[48px]"
                    >
                      {service.ctaLabel}
                    </button>
                    <Link
                      to="/contact"
                      className="btn-lift flex items-center justify-center w-full text-center px-6 py-3 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#FBF7F0] min-h-[44px]"
                    >
                      Book a free grant strategy call
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3 pt-1">
                    <Link
                      to="/contact"
                      className="btn-lift flex items-center justify-center w-full text-center px-6 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] min-h-[48px]"
                    >
                      Book a free grant strategy call
                    </Link>
                    <p className="text-xs text-[#566070] text-center">
                      Or call us directly at{' '}
                      <a
                        href={SITE_CONTENT.contact.phoneHref}
                        className="text-[#0E1A33] font-semibold underline"
                      >
                        {SITE_CONTENT.contact.phone}
                      </a>
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-[#DDD0BC]">
                  <p className="text-xs font-semibold text-[#0E1A33] mb-2">
                    Other service packages:
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {otherServices.map((other) => (
                      <li key={other.id}>
                        <Link
                          to={other.slug}
                          className="text-[#566070] hover:text-[#0E1A33] underline py-0.5 inline-block"
                        >
                          {other.name} ({other.priceDisplay})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
