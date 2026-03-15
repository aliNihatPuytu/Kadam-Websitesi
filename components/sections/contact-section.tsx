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
    await new Promise(resolve => setTimeout(resolve, 1500));
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
                    <p className="text-[#2B2B2B]/70">
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
                  src="https://maps.app.goo.gl/GgbrACgGzNFJHVGq5?g_st=iw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KADAM Location"
                />
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </SectionWrapper>
  );
}