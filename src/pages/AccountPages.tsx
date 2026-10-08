import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../data/content';
import { PageMeta } from '../components/PageMeta';
import { SampleCopyBadge } from '../components/SampleCopyBadge';
import { usePreviewToast } from '../components/ToastContext';

export const LoginPage: React.FC = () => {
  const { accountPages } = SITE_CONTENT;
  const { triggerPreviewToast } = usePreviewToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    triggerPreviewToast('Member Log In submitted.');
  };

  return (
    <>
      <PageMeta
        title={accountPages.loginSeo.title}
        description={accountPages.loginSeo.description}
      />

      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A45C] mb-1">
            Member portal
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif-heading text-[#FBF7F0]">
            Member log in
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-t-[130px] rounded-b-2xl pt-14 pb-8 px-6 sm:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-serif-heading text-[#0E1A33]">
                Sign in to your account
              </h2>
              <p className="text-sm text-[#566070] mt-1">
                Access the Christian Funding Directory and Jump Start member resources.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-[#0E1A33] mb-1"
                >
                  Email address
                </label>
                <input
                  id="login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-[#0E1A33] mb-1"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-lift w-full px-6 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] min-h-[48px]"
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-[#DDD0BC] space-y-2 text-xs text-[#566070]">
              <p className="font-semibold text-[#0E1A33]">
                {accountPages.unchangedNote}
              </p>
              <p>
                Need a free directory account?{' '}
                <Link
                  to="/directory#create-account"
                  className="text-[#0E1A33] font-semibold underline hover:text-[#C2490A]"
                >
                  Create a free account here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const MyAccountPage: React.FC = () => {
  const { accountPages } = SITE_CONTENT;
  const { triggerPreviewToast } = usePreviewToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerPreviewToast('My Account sign-in submitted.');
  };

  return (
    <>
      <PageMeta
        title={accountPages.accountSeo.title}
        description={accountPages.accountSeo.description}
      />

      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A45C] mb-1">
            Member portal
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif-heading text-[#FBF7F0]">
            My account
          </h1>
          <div className="mt-4">
            <span className="ember-rule" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-base text-[#566070] mb-10">
            {accountPages.unchangedNote}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-serif-heading text-[#0E1A33] mb-2">
                Sign in to your account
              </h2>
              <p className="text-sm text-[#566070] mb-5">
                Enter your member credentials to view saved directory searches or Jump Start downloads.
              </p>

              <form onSubmit={handleAccountSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="acct-email"
                    className="block text-sm font-medium text-[#0E1A33] mb-1"
                  >
                    Email address
                  </label>
                  <input
                    id="acct-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="acct-password"
                    className="block text-sm font-medium text-[#0E1A33] mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="acct-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-lg text-base text-[#14161C]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-lift w-full px-6 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base hover:bg-[#FF7420] min-h-[48px]"
                >
                  Access my account
                </button>
              </form>
            </div>

            <div className="bg-[#F1E7D8]/50 border border-[#DDD0BC] rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-serif-heading text-[#0E1A33]">
                Member portals
              </h2>
              <p className="text-base text-[#566070] leading-relaxed">
                Your existing account gives you access to:
              </p>
              <ul className="space-y-2 text-sm text-[#0E1A33] font-medium">
                <li>· Christian Funding Directory (8,000+ sources)</li>
                <li>· Jump Start training modules and templates</li>
                <li>· Account profile and password settings</li>
              </ul>
              <div className="pt-4 border-t border-[#DDD0BC]">
                <Link
                  to="/directory#create-account"
                  className="btn-lift inline-flex items-center px-5 py-3 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#0E1A33] hover:text-[#FBF7F0] transition-colors min-h-[44px]"
                >
                  Create a free directory account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const LegalSamplePage: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Use';

  return (
    <>
      <PageMeta
        title={`${title} | Here-4-You Consulting`}
        description={`${title} for Here-4-You Consulting in Front Royal, Virginia.`}
      />

      <section className="navy-atmosphere navy-surface text-[#FBF7F0] py-12 border-b border-[#C9A45C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif-heading text-[#FBF7F0]">
            {title}
          </h1>
          <div className="mt-4">
            <span className="ember-rule" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#FBF7F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <SampleCopyBadge />
          <div className="bg-[#F1E7D8] border border-[#C9A45C]/60 rounded-2xl p-6 sm:p-9 space-y-4">
            <p className="text-base text-[#0E1A33] leading-relaxed">
              This is a non-functional placeholder page for the{' '}
              <strong>{title}</strong> in the Binergi Digital Concepts design preview.
            </p>
            <p className="text-base text-[#566070] leading-relaxed">
              On the live site, the existing {title.toLowerCase()} text from Here-4-You Consulting (109 E. 6th Street, Front Royal, VA 22630) will be carried over here in full.
            </p>
            <div className="pt-2">
              <Link
                to="/"
                className="btn-lift inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#0E1A33] hover:text-[#FBF7F0] transition-colors min-h-[44px]"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Page Not Found | Here-4-You Consulting"
        description="The page you were looking for could not be found."
      />

      <section className="py-20 lg:py-28 bg-[#FBF7F0]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <p className="text-sm font-semibold text-[#C2490A]">404 Error</p>
          <h1 className="text-3xl sm:text-4xl font-serif-heading text-[#0E1A33]">
            We could not find that page.
          </h1>
          <p className="text-base text-[#566070]">
            The link you followed may be outdated, or the page may have moved. Use the button below to return to the home page.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-lift px-7 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-sm hover:bg-[#FF7420] min-h-[48px] inline-flex items-center"
            >
              Return to Home
            </Link>
            <Link
              to="/contact"
              className="btn-lift px-7 py-3.5 rounded-lg border-2 border-[#0E1A33] text-[#0E1A33] font-semibold text-sm hover:bg-[#F1E7D8] min-h-[48px] inline-flex items-center"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
