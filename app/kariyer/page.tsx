'use client';

import { motion } from 'framer-motion';
import { Mail, Briefcase, Users, Target, Heart } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn, SlideIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Briefcase,
    title: { tr: 'Kariyer Gelişimi', en: 'Career Development' },
    description: { 
      tr: 'Sürekli öğrenme ve gelişim fırsatları sunuyoruz.', 
      en: 'We offer continuous learning and development opportunities.' 
    },
  },
  {
    icon: Users,
    title: { tr: 'Takım Çalışması', en: 'Team Work' },
    description: { 
      tr: 'Deneyimli ve profesyonel ekiplerle çalışma imkanı.', 
      en: 'Opportunity to work with experienced and professional teams.' 
    },
  },
  {
    icon: Target,
    title: { tr: 'Büyük Projeler', en: 'Big Projects' },
    description: { 
      tr: 'Prestijli ve büyük ölçekli projelerde yer alma şansı.', 
      en: 'Chance to be part of prestigious and large-scale projects.' 
    },
  },
  {
    icon: Heart,
    title: { tr: 'Çalışan Memnuniyeti', en: 'Employee Satisfaction' },
    description: { 
      tr: 'Çalışan odaklı şirket kültürü ve sosyal haklar.', 
      en: 'Employee-focused company culture and social benefits.' 
    },
  },
];

export default function CareersPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')`,
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
              {t.careers.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#F2F1ED]/80"
            >
              {t.careers.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Open Positions */}
        <SectionWrapper className="py-24 lg:py-32 bg-[#F2F1ED]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <div className="bg-white p-12 rounded-lg shadow-lg">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#8C1D18]/10 flex items-center justify-center mb-6">
                    <Briefcase className="w-10 h-10 text-[#8C1D18]" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-4">
                    {locale === 'tr' ? 'Açık Pozisyonlar' : 'Open Positions'}
                  </h2>
                  <p className="text-lg text-[#2B2B2B]/70 mb-8">
                    {t.careers.noPositions}
                  </p>
                  <div className="border-t border-[#E5E5E5] pt-8">
                    <p className="text-[#2B2B2B]/70 mb-4">
                      {t.careers.cvSubmit}
                    </p>
                    <Button
                      asChild
                      className="bg-[#8C1D18] hover:bg-[#6B1512] text-white"
                    >
                      <a href={`mailto:${t.careers.cvEmail}`} className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        {t.careers.cvEmail}
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
