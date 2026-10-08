import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Calendar } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Twitter':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" role="img" aria-label="Twitter">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'Facebook':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" role="img" aria-label="Facebook">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" role="img" aria-label="YouTube">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" role="img" aria-label="LinkedIn">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    default:
      return null;
  }
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'services' | 'directory' | 'resources' | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');
  const isDirectoryActive = location.pathname.startsWith('/directory');
  const isResourcesActive = location.pathname.startsWith('/resources');
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F0] text-[#14161C]">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#F7630D] focus:text-[#0E1A33] focus:font-bold focus:px-4 focus:py-2.5 focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Slim Top Preview Banner */}
      <div
        role="region"
        aria-label="Design preview notice"
        className="bg-[#091224] text-[#FBF7F0]/90 text-xs py-2 px-4 text-center border-b border-[#C9A45C]/25"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F7630D] shrink-0" aria-hidden="true" />
          <span>{SITE_CONTENT.previewBanner}</span>
        </div>
      </div>

      {/* Single Sticky Header (condenses on scroll) */}
      <header
        className={`sticky top-0 z-40 bg-[#FBF7F0]/95 backdrop-blur-md border-b border-[#DDD0BC] transition-all duration-200 ${
          scrolled ? 'py-2.5 shadow-sm' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left: Wordmark */}
          <Link
            to="/"
            className="font-serif-heading text-lg sm:text-xl text-[#0E1A33] tracking-tight whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <svg
              className="w-5 h-6 text-[#F7630D] shrink-0"
              viewBox="0 0 20 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 2 22 L 2 10 A 8 8 0 0 1 18 10 L 18 22 Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="10" cy="10" r="2" fill="#C9A45C" />
            </svg>
            <span>{SITE_CONTENT.brand.name}</span>
          </Link>

          {/* Center: Clean Desktop Nav */}
          <nav
            ref={navRef}
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7 text-base font-medium text-[#14161C]"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link-editorial py-1 whitespace-nowrap ${
                  isActive ? 'is-active text-[#0E1A33] font-semibold' : 'hover:text-[#0E1A33]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link-editorial py-1 whitespace-nowrap ${
                  isActive ? 'is-active text-[#0E1A33] font-semibold' : 'hover:text-[#0E1A33]'
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === 'services'}
                aria-haspopup="true"
                onClick={() =>
                  setOpenDropdown(openDropdown === 'services' ? null : 'services')
                }
                className={`nav-link-editorial inline-flex items-center gap-1 py-1 whitespace-nowrap ${
                  isServicesActive ? 'is-active text-[#0E1A33] font-semibold' : 'hover:text-[#0E1A33]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-[#566070]" aria-hidden="true" />
              </button>

              {openDropdown === 'services' && (
                <div className="absolute left-0 mt-3 w-72 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-xl shadow-xl py-2.5 z-50">
                  <Link
                    to="/services"
                    className="block px-4 py-2.5 text-sm font-semibold text-[#0E1A33] hover:bg-[#F1E7D8]"
                  >
                    Services overview
                  </Link>
                  <div className="my-1.5 border-t border-[#DDD0BC]" />
                  {SITE_CONTENT.services.map((service) => (
                    <Link
                      key={service.id}
                      to={service.slug}
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-[#14161C] hover:bg-[#F1E7D8]"
                    >
                      <span className="font-medium">{service.name}</span>
                      {service.badge && (
                        <span className="text-xs font-semibold text-[#C2490A]">
                          · {service.badge}
                        </span>
                      )}
                      {service.id === 'jump-start' && (
                        <span className="text-xs text-[#566070]">
                          {service.priceDisplay}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Directory Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === 'directory'}
                aria-haspopup="true"
                onClick={() =>
                  setOpenDropdown(openDropdown === 'directory' ? null : 'directory')
                }
                className={`nav-link-editorial inline-flex items-center gap-1 py-1 whitespace-nowrap ${
                  isDirectoryActive ? 'is-active text-[#0E1A33] font-semibold' : 'hover:text-[#0E1A33]'
                }`}
              >
                <span>Directory</span>
                <ChevronDown className="w-4 h-4 text-[#566070]" aria-hidden="true" />
              </button>

              {openDropdown === 'directory' && (
                <div className="absolute left-0 mt-3 w-64 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-xl shadow-xl py-2.5 z-50">
                  <Link
                    to="/directory"
                    className="block px-4 py-2.5 text-sm font-semibold text-[#0E1A33] hover:bg-[#F1E7D8]"
                  >
                    Christian Funding Directory
                  </Link>
                  <Link
                    to="/directory#create-account"
                    className="block px-4 py-2.5 text-sm text-[#14161C] hover:bg-[#F1E7D8]"
                  >
                    Create a free account
                  </Link>
                  <Link
                    to="/directory#member-search-preview"
                    className="block px-4 py-2.5 text-sm text-[#14161C] hover:bg-[#F1E7D8]"
                  >
                    Member search preview
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === 'resources'}
                aria-haspopup="true"
                onClick={() =>
                  setOpenDropdown(openDropdown === 'resources' ? null : 'resources')
                }
                className={`nav-link-editorial inline-flex items-center gap-1 py-1 whitespace-nowrap ${
                  isResourcesActive ? 'is-active text-[#0E1A33] font-semibold' : 'hover:text-[#0E1A33]'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 text-[#566070]" aria-hidden="true" />
              </button>

              {openDropdown === 'resources' && (
                <div className="absolute left-0 mt-3 w-64 bg-[#FBF7F0] border border-[#C9A45C]/60 rounded-xl shadow-xl py-2.5 z-50">
                  <Link
                    to="/resources"
                    className="block px-4 py-2.5 text-sm font-semibold text-[#0E1A33] hover:bg-[#F1E7D8]"
                  >
                    All resources
                  </Link>
                  <Link
                    to="/resources#free-downloads"
                    className="block px-4 py-2.5 text-sm text-[#14161C] hover:bg-[#F1E7D8]"
                  >
                    Free Downloads
                  </Link>
                  <Link
                    to="/resources#jump-start-resources"
                    className="block px-4 py-2.5 text-sm text-[#14161C] hover:bg-[#F1E7D8]"
                  >
                    Jump Start Resources
                  </Link>
                  <Link
                    to="/resources#faq"
                    className="block px-4 py-2.5 text-sm text-[#14161C] hover:bg-[#F1E7D8]"
                  >
                    Frequently asked questions
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link-editorial py-1 whitespace-nowrap ${
                  isActive ? 'is-active text-[#0E1A33] font-semibold' : 'hover:text-[#0E1A33]'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right: Desktop Phone + Member Login + Ember CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href={SITE_CONTENT.contact.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#14161C] hover:text-[#C2490A] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#C2490A]" aria-hidden="true" />
              <span>{SITE_CONTENT.contact.phone}</span>
            </a>

            <Link
              to="/login"
              className="text-sm font-medium text-[#566070] hover:text-[#0E1A33] transition-colors whitespace-nowrap"
            >
              Log in
            </Link>

            <Link
              to="/contact"
              className="btn-lift px-5 py-2.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-sm hover:bg-[#FF7420] whitespace-nowrap min-h-[44px] inline-flex items-center"
            >
              Book a free call
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-[#C9A45C]/60 text-[#0E1A33] bg-[#F1E7D8]/70"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-In Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 lg:hidden bg-[#0E1A33] text-[#FBF7F0] flex flex-col overflow-y-auto navy-surface"
        >
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between border-b border-[#C9A45C]/30">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif-heading text-lg text-[#FBF7F0]"
            >
              {SITE_CONTENT.brand.name}
            </Link>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-[#C9A45C]/50 text-[#FBF7F0]"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 space-y-6">
            <div className="space-y-2">
              <NavLink
                to="/"
                end
                className="block py-2.5 text-2xl font-serif-heading text-[#FBF7F0] hover:text-[#F7630D]"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block py-2.5 text-2xl font-serif-heading text-[#FBF7F0] hover:text-[#F7630D]"
              >
                About
              </NavLink>
            </div>

            <div className="pt-4 border-t border-[#C9A45C]/25">
              <Link
                to="/services"
                className="block py-2 text-2xl font-serif-heading text-[#FBF7F0] hover:text-[#F7630D]"
              >
                Services
              </Link>
              <div className="mt-2 pl-4 border-l border-[#C9A45C]/40 space-y-1">
                {SITE_CONTENT.services.map((s) => (
                  <Link
                    key={s.id}
                    to={s.slug}
                    className="block py-2.5 text-base text-[#FBF7F0]/85 hover:text-[#FBF7F0] min-h-[44px]"
                  >
                    {s.name} {s.badge ? `· ${s.badge}` : ''}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#C9A45C]/25">
              <Link
                to="/directory"
                className="block py-2 text-2xl font-serif-heading text-[#FBF7F0] hover:text-[#F7630D]"
              >
                Christian Funding Directory
              </Link>
              <div className="mt-2 pl-4 border-l border-[#C9A45C]/40 space-y-1">
                <Link
                  to="/directory#create-account"
                  className="block py-2.5 text-base text-[#FBF7F0]/85 hover:text-[#FBF7F0] min-h-[44px]"
                >
                  Create a free account
                </Link>
                <Link
                  to="/directory#member-search-preview"
                  className="block py-2.5 text-base text-[#FBF7F0]/85 hover:text-[#FBF7F0] min-h-[44px]"
                >
                  Member search preview
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C9A45C]/25">
              <Link
                to="/resources"
                className="block py-2 text-2xl font-serif-heading text-[#FBF7F0] hover:text-[#F7630D]"
              >
                Resources & FAQ
              </Link>
              <div className="mt-2 pl-4 border-l border-[#C9A45C]/40 space-y-1">
                <Link
                  to="/resources#free-downloads"
                  className="block py-2.5 text-base text-[#FBF7F0]/85 hover:text-[#FBF7F0] min-h-[44px]"
                >
                  Free Downloads
                </Link>
                <Link
                  to="/resources#jump-start-resources"
                  className="block py-2.5 text-base text-[#FBF7F0]/85 hover:text-[#FBF7F0] min-h-[44px]"
                >
                  Jump Start Resources
                </Link>
                <Link
                  to="/resources#faq"
                  className="block py-2.5 text-base text-[#FBF7F0]/85 hover:text-[#FBF7F0] min-h-[44px]"
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C9A45C]/25 space-y-2">
              <NavLink
                to="/contact"
                className="block py-2.5 text-2xl font-serif-heading text-[#FBF7F0] hover:text-[#F7630D]"
              >
                Contact
              </NavLink>
              <div className="flex items-center gap-6 pt-2 text-base">
                <Link
                  to="/login"
                  className="py-2 text-[#C9A45C] font-medium hover:underline min-h-[44px] inline-flex items-center"
                >
                  Log in
                </Link>
                <Link
                  to="/account"
                  className="py-2 text-[#C9A45C] font-medium hover:underline min-h-[44px] inline-flex items-center"
                >
                  My account
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C9A45C]/25 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center px-6 py-3.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-base min-h-[48px] flex items-center justify-center"
              >
                Book a free call
              </Link>
              <a
                href={SITE_CONTENT.contact.phoneHref}
                className="w-full text-center px-6 py-3.5 rounded-lg border border-[#FBF7F0] text-[#FBF7F0] font-medium text-base min-h-[48px] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
                <span>Call {SITE_CONTENT.contact.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Global Midnight Navy Footer */}
      <footer
        className={`navy-atmosphere navy-surface text-[#FBF7F0] border-t border-[#C9A45C]/40 ${
          !isContactPage ? 'pb-20 lg:pb-0' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#C9A45C]/25">
            {/* Column 1: Large Wordmark, Description, Mission Verse */}
            <div className="lg:col-span-5 space-y-5">
              <Link
                to="/"
                className="inline-block font-serif-heading text-2xl sm:text-3xl text-[#FBF7F0] tracking-tight"
              >
                {SITE_CONTENT.brand.wordmark}
              </Link>
              <p className="text-base text-[#FBF7F0]/80 leading-relaxed max-w-md">
                {SITE_CONTENT.brand.oneLineDescription}
              </p>

              <blockquote className="pt-2 border-l-2 border-[#C9A45C] pl-4">
                <p className="font-serif-heading italic text-lg text-[#FBF7F0] leading-snug">
                  {SITE_CONTENT.missionVerse.text}
                </p>
                <footer className="text-xs text-[#C9A45C] mt-1.5">
                  — {SITE_CONTENT.missionVerse.reference}
                </footer>
              </blockquote>
            </div>

            {/* Column 2: Services */}
            <div className="lg:col-span-2 space-y-3">
              <h2 className="text-lg font-serif-heading text-[#FBF7F0]">
                Services
              </h2>
              <ul className="space-y-2.5 text-sm text-[#FBF7F0]/80">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#F7630D] transition-colors inline-block py-0.5"
                  >
                    Services Overview
                  </Link>
                </li>
                {SITE_CONTENT.services.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={service.slug}
                      className="hover:text-[#F7630D] transition-colors inline-block py-0.5"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div className="lg:col-span-2 space-y-3">
              <h2 className="text-lg font-serif-heading text-[#FBF7F0]">
                Explore
              </h2>
              <ul className="space-y-2.5 text-sm text-[#FBF7F0]/80">
                <li>
                  <Link to="/" className="hover:text-[#F7630D] transition-colors inline-block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#F7630D] transition-colors inline-block py-0.5">
                    About & Team
                  </Link>
                </li>
                <li>
                  <Link to="/directory" className="hover:text-[#F7630D] transition-colors inline-block py-0.5">
                    Funding Directory
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="hover:text-[#F7630D] transition-colors inline-block py-0.5">
                    Resources & FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#F7630D] transition-colors inline-block py-0.5">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-[#F7630D] transition-colors inline-block py-0.5">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="hover:text-[#F7630D] transition-colors inline-block py-0.5">
                    My account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Details & Social Icons */}
            <div className="lg:col-span-3 space-y-3">
              <h2 className="text-lg font-serif-heading text-[#FBF7F0]">
                Office & Contact
              </h2>
              <address className="not-italic text-sm text-[#FBF7F0]/80 space-y-1.5 leading-relaxed">
                <p className="text-[#FBF7F0] font-semibold">
                  {SITE_CONTENT.brand.name}
                </p>
                <p>{SITE_CONTENT.contact.street}</p>
                <p>{SITE_CONTENT.contact.cityStateZip}</p>
                <p className="pt-2">
                  Phone:{' '}
                  <a
                    href={SITE_CONTENT.contact.phoneHref}
                    className="text-[#FBF7F0] font-semibold underline decoration-[#C9A45C] hover:text-[#F7630D]"
                  >
                    {SITE_CONTENT.contact.phone}
                  </a>
                </p>
                <p>Fax: {SITE_CONTENT.contact.fax}</p>
              </address>

              <div className="flex items-center gap-3 pt-3">
                {SITE_CONTENT.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE_CONTENT.brand.name} on ${social.name}`}
                    className="w-10 h-10 rounded-full border border-[#C9A45C]/40 flex items-center justify-center text-[#FBF7F0]/85 hover:text-[#0E1A33] hover:bg-[#F7630D] hover:border-[#F7630D] transition-colors"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Legal & Preview Credit Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FBF7F0]/75">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-semibold text-[#C9A45C]">
                {SITE_CONTENT.brand.establishedLine}
              </span>
              <span aria-hidden="true">·</span>
              <Link to="/privacy" className="hover:text-[#FBF7F0] underline">
                Privacy Policy
              </Link>
              <span aria-hidden="true">·</span>
              <Link to="/terms" className="hover:text-[#FBF7F0] underline">
                Terms of Use
              </Link>
            </div>

            <p className="text-[#FBF7F0]/70">
              {SITE_CONTENT.footerPreviewCredit}
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar (visible on phones on all pages except Contact) */}
      {!isContactPage && (
        <div
          role="region"
          aria-label="Quick contact actions"
          className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-[#0E1A33] border-t border-[#C9A45C]/40 px-3 py-2.5 flex items-center gap-2.5 navy-surface"
        >
          <Link
            to="/contact"
            className="flex-1 min-h-[44px] px-4 py-2.5 rounded-lg bg-[#F7630D] text-[#0E1A33] font-bold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Book a free call</span>
          </Link>
          <a
            href={SITE_CONTENT.contact.phoneHref}
            className="min-h-[44px] px-4 py-2.5 rounded-lg border border-[#FBF7F0]/80 text-[#FBF7F0] font-medium text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
            <span>{SITE_CONTENT.contact.phone}</span>
          </a>
        </div>
      )}
    </div>
  );
};
