'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn, SlideIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const { t, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-[#2B2B2B]/70" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            >
              {t.contact.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#F2F1ED]/80"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <SectionWrapper className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <SlideIn direction="left">
                <div className="bg-[#F2F1ED] p-8 lg:p-12 rounded-lg">
                  <h2 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-6">
                    {locale === 'tr' ? 'Bize Ulaşın' : 'Reach Out to Us'}
                  </h2>
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
                </div>
              </SlideIn>

              {/* Contact Info */}
              <SlideIn direction="right" delay={0.2}>
                <div className="space-y-8">
                  <h2 className="font-heading font-bold text-2xl text-[#2B2B2B]">
                    {locale === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
                  </h2>

                  <div className="space-y-6">
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

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#8C1D18] flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-[#2B2B2B] mb-1">
                          {t.contact.info.phone}
                        </h3>
                        <a
                          href="tel:+902163141294"
                          className="text-[#2B2B2B]/70 hover:text-[#8C1D18] transition-colors"
                        >
                          0 (216) 314 12 94
                        </a><br />
                        <a
                          href="tel:+905534096319"
                          className="text-[#2B2B2B]/70 hover:text-[#8C1D18] transition-colors"
                        >
                          0 (553) 409 63 19
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#8C1D18] flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-[#2B2B2B] mb-1">
                          {t.contact.info.email}
                        </h3>
                        <a
                          href="mailto:info@kadam.com.tr"
                          className="text-[#2B2B2B]/70 hover:text-[#8C1D18] transition-colors"
                        >
                          info@kadaminsaat.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#8C1D18] flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-[#2B2B2B] mb-1">
                          {locale === 'tr' ? 'Çalışma Saatleri' : 'Working Hours'}
                        </h3>
                        <p className="text-[#2B2B2B]/70">
                          {locale === 'tr' ? 'Pazartesi - Cumartesi: 09:00 - 18:00' : 'Monday - Friday: 09:00 - 18:00'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="rounded-lg overflow-hidden h-[300px] shadow-lg mt-8">
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
      </main>
      <Footer />
    </div>
  );
}
