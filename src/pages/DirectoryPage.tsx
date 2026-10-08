import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Lock } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { usePreviewToast } from '../components/ToastContext';
import { ArchPhotoFrame, Reveal, SITE_IMAGES } from '../components/ArchFrame';

export const DirectoryPage: React.FC = () => {
  const { directory } = SITE_CONTENT;
  const { triggerPreviewToast } = usePreviewToast();

  // Registration form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');

  // Member search preview filter state
  const [focusFilter, setFocusFilter] = useState('All Focus Areas');
  const [stateFilter, setStateFilter] = useState('All States & Regions');
  const [typeFilter, setTypeFilter] = useState('All Funder Types');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerPreviewToast('Free directory account sign-up submitted.');
  };

  const handlePreviewSearch = (e: React.FormEvent) => {
    e.preventDefault();
    triggerPreviewToast('Member directory search triggered.');
  };

  const filteredRows = directory.sampleRows.filter((row) => {
    const matchFocus =
      focusFilter === 'All Focus Areas' || row.focusArea === focusFilter;
    const matchState =
      stateFilter === 'All States & Regions' || row.stateRegion === stateFilter;
    const matchType =
      typeFilter === 'All Funder Types' || row.funderType === typeFilter;
    return matchFocus && matchState && matchType;
  });

  return (
    <>
      <PageMeta
        title={directory.seo.title}
        description={directory.seo.description}
      />

      {/* Compact Midnight Navy Title Band */}
      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 sm:py-16 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A45C] mb-2">
            8,000+ Verified Funding Sources · Free to Browse
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading text-[#FBF7F0] max-w-3xl leading-tight">
            {directory.heading}
          </h1>
          <div className="mt-5 mb-4">
            <span className="ember-rule" aria-hidden="true" />
          </div>
          <p className="text-base sm:text-lg text-[#FBF7F0]/85 max-w-2xl leading-relaxed mb-6">
            {directory.lead}
          </p>
          <p className="text-xs sm:text-sm text-[#FBF7F0] bg-[#091224] border border-[#C9A45C]/50 rounded-lg px-4 py-2.5 inline-block">
            {directory.unchangedSystemNote}
          </p>
        </div>
      </section>

      {/* Explanation & Create Free Account Arch Form */}
      <section id="create-account" className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: How It Works + Community Outreach Photo */}
            <div className="lg:col-span-7 space-y-10">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33] mb-3">
                  How the Christian Funding Directory works
                </h2>
                <p className="text-base sm:text-lg text-[#14161C]/90 leading-relaxed">
                  Finding foundations and civic funders that welcome churches and Christian ministries takes time. Our directory brings together more than 8,000 Christian and mission-aligned funding sources, verified and updated regularly, and makes them free to browse when you create a free account.
                </p>
              </Reveal>

              <div className="divide-y divide-[#DDD0BC] border-y border-[#DDD0BC]">
                {directory.howItWorks.map((item, idx) => (
                  <Reveal
                    key={item.step}
                    delayMs={idx * 70}
                    className="py-6 flex items-baseline gap-5"
                  >
                    <span className="font-serif-heading text-2xl text-[#C2490A] shrink-0">
                      {idx + 1}.
                    </span>
                    <div>
                      <h3 className="text-xl font-serif-heading text-[#0E1A33] mb-1.5">
                        {item.step.replace(/^0\d\.\s*/, '')}
                      </h3>
                      <p className="text-base text-[#566070] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <ArchPhotoFrame
                  src={SITE_IMAGES.communityOutreach}
                  alt="Church community outreach hall with woven baskets of fresh harvest produce and loaves of bread"
                  caption="Connecting churches and Christian ministries with foundations and civic funders that support their mission."
                  shape="editorial"
                  aspectClass="aspect-[16/9]"
                />
              </Reveal>

              <p className="text-sm text-[#566070]">
                Already have a member account?{' '}
                <Link
                  to="/login"
                  className="text-[#0E1A33] font-semibold underline hover:text-[#C2490A]"
                >
                  Log in here
                </Link>
                .
              </p>
            </div>

            {/* Right: Create a Free Account inside an Arch Card */}
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-t-[130px] rounded-b-2xl pt-14 pb-8 px-6 sm:px-8">
                <div className="text-center mb-6">
                  <p className="text-xs font-semibold text-[#C2490A] mb-1">
                    Free directory access
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33]">
                    Create a free account
                  </h2>
                  <p className="text-sm text-[#566070] mt-1">
                    Browse more than 8,000 verified funding sources at no cost.
                  </p>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="dir-name"
                      className="block text-sm font-medium text-[#0E1A33] mb-1"
                    >
                      Your name <span className="text-[#C2490A]">*</span>
                    </label>
                    <input
                      id="dir-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Pastor or ministry leader name"
                      className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dir-email"
                      className="block text-sm font-medium text-[#0E1A33] mb-1"
                    >
                      Email address <span className="text-[#C2490A]">*</span>
                    </label>
                    <input
                      id="dir-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourministry.org"
                      className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dir-org"
                      className="block text-sm font-medium text-[#0E1A33] mb-1"
                    >
                      Church or organization <span className="text-[#C2490A]">*</span>
                    </label>
                    <input
                      id="dir-org"
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Organization name"
                      className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-lift w-full px-6 py-4 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] min-h-[48px]"
                    >
                      Create a free account
                    </button>
                  </div>

                  <p className="text-xs text-[#566070] pt-1 text-center">
                    {directory.unchangedSystemNote}
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Member Search Preview */}
      <section
        id="member-search-preview"
        className="py-16 lg:py-24 bg-[#F1E7D8] border-t border-[#DDD0BC]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-[#C2490A] mb-1">
                Members-only funder search preview
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
                Preview what the directory search feels like
              </h2>
              <div className="mt-4 mb-3">
                <span className="ember-rule" aria-hidden="true" />
              </div>
              <p className="text-base text-[#566070] max-w-2xl">
                Below is a sample preview of the members-only funder search interface. Actual funder names and award profiles are visible once signed in.
              </p>
            </div>
            <p className="text-xs font-medium text-[#0E1A33] bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg px-4 py-2.5 shrink-0">
              {directory.unchangedSystemNote}
            </p>
          </Reveal>

          {/* Search Filters Bar */}
          <form
            onSubmit={handlePreviewSearch}
            className="bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-2xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
          >
            <div>
              <label
                htmlFor="filter-focus"
                className="block text-xs font-semibold text-[#0E1A33] mb-1.5"
              >
                Focus area
              </label>
              <select
                id="filter-focus"
                value={focusFilter}
                onChange={(e) => setFocusFilter(e.target.value)}
                className="w-full px-3.5 py-3 bg-[#FBF7F0] border border-[#DDD0BC] rounded-lg text-sm text-[#14161C] min-h-[44px]"
              >
                <option value="All Focus Areas">All Focus Areas</option>
                <option value="Church Outreach & Youth Ministry">Church Outreach & Youth Ministry</option>
                <option value="Christian Education & Discipleship">Christian Education & Discipleship</option>
                <option value="Food Pantry & Community Benevolence">Food Pantry & Community Benevolence</option>
                <option value="Facility Improvement & Capital Projects">Facility Improvement & Capital Projects</option>
                <option value="International Missions & Evangelism">International Missions & Evangelism</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="filter-state"
                className="block text-xs font-semibold text-[#0E1A33] mb-1.5"
              >
                State / Region
              </label>
              <select
                id="filter-state"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="w-full px-3.5 py-3 bg-[#FBF7F0] border border-[#DDD0BC] rounded-lg text-sm text-[#14161C] min-h-[44px]"
              >
                <option value="All States & Regions">All States & Regions</option>
                <option value="Virginia / Mid-Atlantic">Virginia / Mid-Atlantic</option>
                <option value="National (United States)">National (United States)</option>
                <option value="Southeast / Multi-State">Southeast / Multi-State</option>
                <option value="International / Global">International / Global</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="filter-type"
                className="block text-xs font-semibold text-[#0E1A33] mb-1.5"
              >
                Funder type
              </label>
              <select
                id="filter-type"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-3.5 py-3 bg-[#FBF7F0] border border-[#DDD0BC] rounded-lg text-sm text-[#14161C] min-h-[44px]"
              >
                <option value="All Funder Types">All Funder Types</option>
                <option value="Private Family Foundation">Private Family Foundation</option>
                <option value="Christian Foundation">Christian Foundation</option>
                <option value="Community & Civic Funder">Community & Civic Funder</option>
                <option value="Private Foundation">Private Foundation</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="btn-lift flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0E1A33] text-[#FBF7F0] font-semibold text-sm hover:bg-[#18294D] whitespace-nowrap min-h-[44px]"
              >
                <Search className="w-4 h-4 text-[#F7630D]" aria-hidden="true" />
                <span>Search directory</span>
              </button>
              {(focusFilter !== 'All Focus Areas' ||
                stateFilter !== 'All States & Regions' ||
                typeFilter !== 'All Funder Types') && (
                <button
                  type="button"
                  onClick={() => {
                    setFocusFilter('All Focus Areas');
                    setStateFilter('All States & Regions');
                    setTypeFilter('All Funder Types');
                  }}
                  className="text-xs font-semibold text-[#0E1A33] underline px-2.5 py-2 min-h-[44px]"
                >
                  Reset
                </button>
              )}
            </div>
          </form>

          {/* 5 Sample Listings Table */}
          <div className="bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0E1A33] text-[#FBF7F0] text-xs font-semibold">
                    <th className="py-4 px-4 sm:px-6">Status</th>
                    <th className="py-4 px-4 sm:px-6">Funder Name (Placeholder)</th>
                    <th className="py-4 px-4 sm:px-6">Focus Area</th>
                    <th className="py-4 px-4 sm:px-6">Geographic Scope</th>
                    <th className="py-4 px-4 sm:px-6">Typical Award</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD0BC] text-sm">
                  {filteredRows.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-10 px-6 text-center text-[#566070]">
                        No sample rows match that filter combination. Click Reset to view all 5 sample listings.
                      </td>
                    </tr>
                  ) : (
                    filteredRows.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-[#F1E7D8]/50 transition-colors"
                      >
                        <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                          <span className="text-xs font-semibold text-[#C2490A] bg-[#F1E7D8] border border-[#C9A45C]/60 px-2.5 py-1 rounded">
                            {row.label}
                          </span>
                        </td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-[#0E1A33]">
                          <div className="flex items-center gap-2">
                            <Lock className="w-3.5 h-3.5 text-[#566070] shrink-0" aria-hidden="true" />
                            <span>{row.funderPlaceholder}</span>
                          </div>
                          <p className="text-xs text-[#566070] font-normal mt-0.5">
                            {row.funderType}
                          </p>
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-[#14161C]">
                          {row.focusArea}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-[#566070]">
                          {row.stateRegion}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-[#566070]">
                          {row.typicalAwardPlaceholder}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
