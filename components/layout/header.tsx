'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Locale, localeNames } from '@/i18n/config';

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'corporate', href: '/kurumsal' },
  { key: 'services', href: '/hizmetler' },
  { key: 'projects', href: '/projeler' },
  { key: 'news', href: '/haberler' },
  { key: 'careers', href: '/kariyer' },
  { key: 'contact', href: '/iletisim' },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'tr' ? 'en' : 'tr');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <div className="relative w-32 h-12">
                <Image
                  src="/Kadam Dark Header.png"
                  alt="KADAM"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[#8C1D18] ${
                    isScrolled ? 'text-[#2B2B2B]' : 'text-white'
                  }`}
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </Link>
              ))}
            </nav>

            {/* Language Switcher & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#8C1D18] ${
                  isScrolled ? 'text-[#2B2B2B]' : 'text-white'
                }`}
              >
                <span className={locale === 'tr' ? 'font-bold text-[#8C1D18]' : ''}>TR</span>
                <span className="mx-1">|</span>
                <span className={locale === 'en' ? 'font-bold text-[#8C1D18]' : ''}>EN</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? 'text-[#2B2B2B]' : 'text-white'
                }`}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#2B2B2B]"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative w-32 h-12">
                    <Image
                      src="/KADAM Logo.png"
                      alt="KADAM"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <nav className="flex-1 flex flex-col justify-center px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-2xl font-heading font-medium text-white hover:text-[#8C1D18] transition-colors"
                    >
                      {t.nav[link.key as keyof typeof t.nav]}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Language Switcher */}
              <div className="px-6 py-8">
                <button
                  onClick={toggleLanguage}
                  className="text-lg font-medium text-white"
                >
                  <span className={locale === 'tr' ? 'font-bold text-[#8C1D18]' : ''}>TR</span>
                  <span className="mx-2">|</span>
                  <span className={locale === 'en' ? 'font-bold text-[#8C1D18]' : ''}>EN</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}