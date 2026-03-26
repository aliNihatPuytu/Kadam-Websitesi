'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn, SlideIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    const mailtoLink = `mailto:info@kadaminsaat.com?subject=${encodeURIComponent('Web Sitesi İletişim Formu - ' + name)}&body=${encodeURIComponent('Ad Soyad: ' + name + '\nE-posta: ' + email + '\nTelefon: ' + phone + '\n\nMesaj:\n' + message)}`;
    window.location.href = mailtoLink;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact" className="py-24 lg:py-32 bg-[#F2F1ED]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
            {t.contact.title}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] mt-3">
            {t.contact.subtitle}
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <SlideIn direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#2B2B2B]">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-white border-[#E5E5E5] focus:border-[#8C1D18] focus:ring-[#8C1D18]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#2B2B2B]">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-white border-[#E5E5E5] focus:border-[#8C1D18] focus:ring-[#8C1D18]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-[#2B2B2B]">
                  {t.contact.form.phone}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="bg-white border-[#E5E5E5] focus:border-[#8C1D18] focus:ring-[#8C1D18]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#2B2B2B]">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="bg-white border-[#E5E5E5] focus:border-[#8C1D18] focus:ring-[#8C1D18] resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[#8C1D18] hover:bg-[#6B1512] text-white py-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    {t.contact.form.sending}
                  </span>
                ) : isSubmitted ? (
                  t.contact.form.success
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {t.contact.form.submit}
                  </span>
                )}
              </Button>
            </form>
          </SlideIn>

          {/* Contact Info & Map */}
          <SlideIn direction="right" delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8C1D18] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-[#2B2B2B] mb-1">
                      {t.contact.info.address}
                    </h3>
                    <p className="text-[#2B2B2B]/70 text-justify">
                      Esenşehir, Gündeş Sk. No:14
                      <br />
                      34776 Ümraniye / İstanbul
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8C1D18] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-[#2B2B2B] mb-1">
                      {t.contact.info.phone}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+902163141294" className="text-[#2B2B2B]/70 hover:text-[#8C1D18] transition-colors">
                        0 (216) 314 12 94
                      </a>
                      <a href="tel:+905534096319" className="text-[#2B2B2B]/70 hover:text-[#8C1D18] transition-colors">
                        0 (553) 409 63 19
                      </a>
                      <a href="tel:+90XXXXXXXXXX" className="text-[#2B2B2B]/70 hover:text-[#8C1D18] transition-colors">
                        0 (XXX) XXX XX XX
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8C1D18] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-[#2B2B2B] mb-1">
                      {t.contact.info.email}
                    </h3>
                    <a href="mailto:info@kadaminsaat.com" className="text-[#2B2B2B]/70 hover:text-[#8C1D18] transition-colors">
                      info@kadaminsaat.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[300px] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.271!2d29.10588!3d41.01789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac97e5b45b5b5%3A0x0!2sG%C3%BCnde%C5%9F+Sk.+No%3A14%2C+Esen%C5%9Fehir%2C+34776+%C3%9Cmraniye%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KADAM Konum"
                />
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </SectionWrapper>
  );
}