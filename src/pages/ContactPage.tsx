import React, { useState } from 'react';
import { Phone, MapPin, Printer } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { usePreviewToast } from '../components/ToastContext';
import { Reveal } from '../components/ArchFrame';

export const ContactPage: React.FC = () => {
  const { contactPage, contact, brand } = SITE_CONTENT;
  const { triggerPreviewToast } = usePreviewToast();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerPreviewToast('Contact & Strategy Call form submitted.');
  };

  return (
    <>
      <PageMeta
        title={contactPage.seo.title}
        description={contactPage.seo.description}
      />

      {/* Compact Midnight Navy Title Band */}
      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 sm:py-16 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A45C] mb-2">
            {contact.availabilityNote}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading text-[#FBF7F0]">
            {contactPage.heading}
          </h1>
          <div className="mt-5 mb-4">
            <span className="ember-rule" aria-hidden="true" />
          </div>
          <p className="text-base sm:text-lg text-[#FBF7F0]/85 max-w-2xl leading-relaxed">
            {contactPage.lead}
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Calm Warm Sand Callout Above the Form for the Official Disclaimer */}
          <Reveal>
            <div
              role="note"
              aria-label="Important notice regarding grant requests"
              className="bg-[#F1E7D8] border-l-4 border-[#C9A45C] rounded-r-2xl p-6 sm:p-8 max-w-4xl"
            >
              <p className="text-sm font-semibold text-[#C2490A] mb-1.5">
                Important notice before you write
              </p>
              <p className="text-base text-[#14161C] leading-relaxed">
                {contact.disclaimer}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form */}
            <Reveal className="lg:col-span-7 bg-[#F1E7D8]/55 border border-[#DDD0BC] rounded-2xl p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-serif-heading text-[#0E1A33] mb-2">
                Send a message or request a free strategy call
              </h2>
              <p className="text-sm text-[#566070] mb-8">
                Fill out the form below and a member of our team will respond personally.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-first-name"
                      className="block text-sm font-medium text-[#0E1A33] mb-1.5"
                    >
                      First name <span className="text-[#C2490A]">*</span>
                    </label>
                    <input
                      id="contact-first-name"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-last-name"
                      className="block text-sm font-medium text-[#0E1A33] mb-1.5"
                    >
                      Last name <span className="text-[#C2490A]">*</span>
                    </label>
                    <input
                      id="contact-last-name"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-sm font-medium text-[#0E1A33] mb-1.5"
                  >
                    Organization / Church / Ministry <span className="text-[#C2490A]">*</span>
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#0E1A33] mb-1.5"
                    >
                      Email <span className="text-[#C2490A]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-[#0E1A33] mb-1.5"
                    >
                      Phone <span className="text-[#C2490A]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#0E1A33] mb-1.5"
                  >
                    Message <span className="text-[#C2490A]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us briefly about your church or ministry and what kind of project or grant support you are considering."
                    className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-lift px-8 py-4 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] whitespace-nowrap min-h-[48px]"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </Reveal>

            {/* Right: Contact Details & Arch Topographic Map Placeholder */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-2xl p-6 sm:p-8 space-y-5">
                <h2 className="text-2xl font-serif-heading text-[#0E1A33]">
                  Direct contact details
                </h2>

                <p className="text-sm text-[#566070] leading-relaxed">
                  {contact.servicePromise}
                </p>

                <div className="space-y-4 pt-2 text-sm border-t border-[#DDD0BC]">
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-4 h-4 text-[#C2490A] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#0E1A33]">Phone</p>
                      <a
                        href={contact.phoneHref}
                        className="text-[#0E1A33] font-semibold underline hover:text-[#C2490A]"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Printer className="w-4 h-4 text-[#C2490A] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#0E1A33]">Fax</p>
                      <p className="text-[#566070]">{contact.fax}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-4 h-4 text-[#C2490A] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#0E1A33]">Office address</p>
                      <p className="text-[#566070]">{brand.name}</p>
                      <p className="text-[#566070]">{contact.street}</p>
                      <p className="text-[#566070]">{contact.cityStateZip}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Arch-Topped Map-Style Architectural Placeholder */}
              <Reveal
                role="img"
                aria-label={`Location illustration for ${contact.fullAddress}`}
                className="bg-[#0E1A33] text-[#FBF7F0] border border-[#C9A45C]/50 rounded-t-[130px] rounded-b-2xl pt-12 pb-8 px-6 text-center relative overflow-hidden"
              >
                <svg
                  className="w-full h-36 mx-auto mb-3 text-[#C9A45C]"
                  viewBox="0 0 360 130"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Shenandoah Valley topographic contour curves */}
                  <path
                    d="M 10 105 Q 95 65 180 90 T 350 75"
                    stroke="currentColor"
                    strokeOpacity="0.28"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M 10 80 Q 110 40 190 68 T 350 52"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="1.25"
                  />
                  <line x1="60" y1="65" x2="300" y2="65" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="180" y1="15" x2="180" y2="115" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
                  <circle cx="180" cy="65" r="18" stroke="#C9A45C" strokeOpacity="0.6" strokeWidth="1" />
                  <circle cx="180" cy="65" r="6" fill="#F7630D" />
                </svg>
                <p className="text-lg font-serif-heading text-[#FBF7F0]">
                  {contact.street} · {contact.cityStateZip}
                </p>
                <p className="text-xs text-[#C9A45C] mt-1">
                  Map placeholder · Located in the Shenandoah Valley in Front Royal, Virginia
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
