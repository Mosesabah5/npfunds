import React, { useState } from 'react';
import { Phone, MapPin, Printer } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { usePreviewToast } from '../components/ToastContext';
import { ArchPhotoFrame, Reveal, SITE_IMAGES } from '../components/ArchFrame';

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

            {/* Right: Contact Details & Front Royal / Shenandoah Valley Photo */}
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

              {/* Arch-Framed Shenandoah Valley Photo + Location Note */}
              <Reveal>
                <ArchPhotoFrame
                  src={SITE_IMAGES.shenandoahValley}
                  alt="Front Royal and the Shenandoah Valley in Virginia at golden hour with Blue Ridge mountains and historic town architecture"
                  caption={`${contact.street} · ${contact.cityStateZip} — Located in the Shenandoah Valley in Front Royal, Virginia.`}
                  shape="arch"
                  aspectClass="aspect-[4/3]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
