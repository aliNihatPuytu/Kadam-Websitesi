'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const quickLinks = [
  { key: 'home', href: '/' },
  { key: 'corporate', href: '/kurumsal' },
  { key: 'team', href: '/ekip' },
  { key: 'projects', href: '/projeler' },
  { key: 'news', href: '/haberler' },
  { key: 'careers', href: '/kariyer' },
  { key: 'contact', href: '/iletisim' },
] as const;

const serviceLinks = [
  { key: 'construction', href: '/hizmetler#insaat' },
  { key: 'development', href: '/hizmetler#proje-gelistirme' },
  { key: 'architecture', href: '/hizmetler#mimarlik' },
  { key: 'engineering', href: '/hizmetler#muhendislik' },
  { key: 'renovation', href: '/hizmetler#tadilat' },
  { key: 'consulting', href: '/hizmetler#danismanlik' },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-stone-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-32 h-12">
                <Image src="/KADAM Logo.png" alt="KADAM" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-sm text-stone-300 leading-relaxed mb-6">{t.footer.company}</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/kadam-i%CC%87n%C5%9Faat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center transition-colors hover:bg-red-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kadaminsaat" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center transition-colors hover:bg-red-900">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-sm text-stone-300 hover:text-red-800 transition-colors">
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">{t.footer.services}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-sm text-stone-300 hover:text-red-800 transition-colors">
                    {t.services[link.key as keyof typeof t.services].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-800 mt-0.5 shrink-0" />
                <span className="text-sm text-stone-300">
                  Esenşehir, Gündeş Sk. No:14<br />34776 Ümraniye / İstanbul
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-800 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+902163141294" className="text-sm text-stone-300 hover:text-red-800 transition-colors">0 (216) 314 12 94</a>
                  <a href="tel:+905534096319" className="text-sm text-stone-300 hover:text-red-800 transition-colors">0 (553) 409 63 19</a>
                  <a href="tel:+90XXXXXXXXXX" className="text-sm text-stone-300 hover:text-red-800 transition-colors">0 (XXX) XXX XX XX</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-800 shrink-0" />
                <a href="mailto:info@kadaminsaat.com" className="text-sm text-stone-300 hover:text-red-800 transition-colors">info@kadaminsaat.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-400">© {currentYear} KADAM. {t.footer.rights}</p>
            <p className="text-sm text-stone-500">
              {t.locale === 'tr' ? 'Site tasarımı' : 'Website by'}{' '}
              <span className="text-stone-400">Ali Nihat Puytu</span>
            </p>
            <div className="flex gap-6">
              <Link href="/gizlilik" className="text-sm text-stone-400 hover:text-red-800 transition-colors">
                {t.locale === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
              </Link>
              <Link href="/kullanim-kosullari" className="text-sm text-stone-400 hover:text-red-800 transition-colors">
                {t.locale === 'tr' ? 'Kullanım Koşulları' : 'Terms of Use'}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}