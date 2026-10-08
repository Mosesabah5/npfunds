import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { MinistryGuideCard } from '../components/MinistryGuideCard';
import { ArchPhotoFrame, Reveal, SITE_IMAGES } from '../components/ArchFrame';

export const ServicesOverviewPage: React.FC = () => {
  const { services, additionalCapabilities } = SITE_CONTENT;

  return (
    <>
      <PageMeta
        title="Grant Writing & Development Services | Here-4-You Consulting"
        description="Explore Jump Start ($249), Grant Ready, Full Service, and Government Grants packages for churches, Christian ministries, and nonprofits."
      />

      {/* Compact Midnight Navy Title Band */}
      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 sm:py-16 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A45C] mb-2">
            Services & packages
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading text-[#FBF7F0] max-w-3xl leading-tight">
            Grant writing and funding development for every stage of ministry.
          </h1>
          <div className="mt-5 mb-4">
            <span className="ember-rule" aria-hidden="true" />
          </div>
          <p className="text-base sm:text-lg text-[#FBF7F0]/85 max-w-2xl leading-relaxed">
            Whether your church is learning how grants work for the first time or looking for a fully outsourced grant-writing team, we help you pursue funding without compromising your faith or your mission.
          </p>
        </div>
      </section>

      {/* Four Packages Side-by-Side */}
      <section className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {services.map((pkg, idx) => {
              const isPopular = Boolean(pkg.badge);
              return (
                <Reveal
                  key={pkg.id}
                  delayMs={idx * 60}
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border ${
                    isPopular
                      ? 'bg-[#F1E7D8] border-2 border-[#0E1A33]'
                      : 'bg-[#F1E7D8]/45 border-[#DDD0BC]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-9 h-11 rounded-t-full rounded-b bg-[#0E1A33] text-[#FBF7F0] font-serif-heading text-sm flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      {pkg.badge && (
                        <span className="text-xs font-bold text-[#C2490A] bg-[#FBF7F0] border border-[#C9A45C] px-2.5 py-0.5 rounded">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl font-serif-heading text-[#0E1A33] mb-1">
                      {pkg.name}
                    </h2>

                    <p className="text-xs font-semibold text-[#C2490A] mb-4">
                      {pkg.priceDisplay}
                    </p>

                    <p className="text-sm sm:text-base text-[#14161C]/90 leading-relaxed mb-4">
                      {pkg.shortSummary}
                    </p>

                    <p className="text-xs text-[#566070] leading-relaxed mb-6">
                      {pkg.whoItIsFor}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DDD0BC]">
                    <Link
                      to={pkg.slug}
                      className="btn-lift inline-flex items-center justify-between w-full px-4 py-3 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#0E1A33] hover:text-[#FBF7F0] transition-colors min-h-[44px]"
                    >
                      <span>View {pkg.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not sure where to start? Reuses Arch Guide */}
      <section className="py-16 lg:py-24 bg-[#F1E7D8] border-y border-[#DDD0BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
                Not sure where to start?
              </h2>
              <div>
                <span className="ember-rule" aria-hidden="true" />
              </div>
              <p className="text-base text-[#14161C]/90 leading-relaxed">
                Use this guide to match your organization’s current stage with our four core services, or book a free grant strategy call to talk directly with our team.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn-lift inline-flex items-center px-7 py-4 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] whitespace-nowrap min-h-[48px]"
                >
                  Book a free grant strategy call
                </Link>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7">
              <MinistryGuideCard
                heading="Not sure where to start?"
                subtitle="Choose the statement that best describes your ministry right now:"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Additional Capabilities + Editorial Strategy Table Photo */}
      <section className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                  {additionalCapabilities.heading}
                </h2>
                <div className="mt-4 mb-4">
                  <span className="ember-rule" aria-hidden="true" />
                </div>
                <p className="text-base text-[#566070] leading-relaxed">
                  {additionalCapabilities.lead}
                </p>
              </div>

              <ArchPhotoFrame
                src={SITE_IMAGES.strategyTable}
                alt="Grant proposal binder, fountain pen, and budget worksheet on an oak study table"
                caption="Proposals written for federal, state and local government, foundations and civic groups."
                shape="arch"
                aspectClass="aspect-[4/3]"
              />
            </Reveal>

            <div className="lg:col-span-7 divide-y divide-[#DDD0BC] border-y border-[#DDD0BC]">
              {additionalCapabilities.items.map((item, idx) => (
                <Reveal
                  key={item.title}
                  delayMs={idx * 60}
                  className="py-6 flex items-baseline gap-5"
                >
                  <span className="font-serif-heading text-xl text-[#C2490A] shrink-0">
                    0{idx + 1}.
                  </span>
                  <div>
                    <h3 className="text-xl font-serif-heading text-[#0E1A33] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#566070] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
