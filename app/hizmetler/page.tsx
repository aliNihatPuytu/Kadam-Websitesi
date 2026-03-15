'use client';

import { motion } from 'framer-motion';
import { Building2, Layers, PenTool, Wrench, Hammer, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';

const serviceIcons = {
  construction: Building2,
  development: Layers,
  architecture: PenTool,
  engineering: Wrench,
  renovation: Hammer,
  consulting: Users,
};

const serviceImages = {
  construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
  development: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  architecture: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
  engineering: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
  renovation: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
  consulting: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
};

const serviceKeys = ['construction', 'development', 'architecture', 'engineering', 'renovation', 'consulting'] as const;

export default function ServicesPage() {
  const { t, locale } = useLanguage();

  const detailedDescriptions = {
    construction: {
      tr: 'Konut, ticari ve endüstriyel yapıların inşaatında uzman kadromuzla hizmetinizdeyiz. En son teknolojileri ve malzemeleri kullanarak, kalıcı ve güvenli yapılar inşa ediyoruz. Proje planlamasından teslimata kadar tüm süreçleri titizlikle yönetiyoruz.',
      en: 'We serve you with our expert team in the construction of residential, commercial and industrial buildings. Using the latest technologies and materials, we build durable and safe structures. We meticulously manage all processes from project planning to delivery.'
    },
    development: {
      tr: 'Arazi değerlendirmesinden proje tamamlanmasına kadar tüm süreçlerde yanınızdayız. Fizibilite çalışmaları, bütçeleme ve proje yönetimi konularında kapsamlı hizmetler sunuyoruz.',
      en: 'We are with you in all processes from land evaluation to project completion. We offer comprehensive services in feasibility studies, budgeting and project management.'
    },
    architecture: {
      tr: 'Modern ve işlevsel tasarımlarla yaşam alanlarınızı şekillendiriyoruz. Estetik ve fonksiyonelliği bir arada sunan özgün mimari çözümler üretiyoruz.',
      en: 'We shape your living spaces with modern and functional designs. We produce unique architectural solutions that combine aesthetics and functionality.'
    },
    engineering: {
      tr: 'Yapısal, mekanik ve elektrik mühendisliği hizmetleri sunuyoruz. Deneyimli mühendis kadromuzla projelerinize en uygun teknik çözümleri sunuyoruz.',
      en: 'We offer structural, mechanical and electrical engineering services. With our experienced team of engineers, we provide the most suitable technical solutions for your projects.'
    },
    renovation: {
      tr: 'Mevcut yapılarınızı modernize ediyor ve yeniliyoruz. Fonksiyonellik ve estetiği artırarak yapılarınıza yeni bir soluk getiriyoruz.',
      en: 'We modernize and renovate your existing structures. We bring a new breath to your buildings by increasing functionality and aesthetics.'
    },
    consulting: {
      tr: 'Proje yönetimi ve teknik danışmanlık hizmetleri sağlıyoruz. İnşaat süreçlerinizde profesyonel rehberlik sunarak projelerinizin başarıyla tamamlanmasını sağlıyoruz.',
      en: 'We provide project management and technical consulting services. We ensure the successful completion of your projects by providing professional guidance in your construction processes.'
    },
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
              backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')`,
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
              {t.services.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#F2F1ED]/80"
            >
              {t.services.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Services List */}
        <SectionWrapper className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="space-y-24">
              {serviceKeys.map((key, index) => {
                const Icon = serviceIcons[key];
                const service = t.services[key];
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={key}
                    id={key === 'development' ? 'proje-gelistirme' : key === 'architecture' ? 'mimarlik' : key === 'engineering' ? 'muhendislik' : key}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="w-16 h-16 rounded-lg bg-[#8C1D18]/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#8C1D18]" />
                      </div>
                      <h2 className="font-heading font-bold text-3xl text-[#2B2B2B]">
                        {service.title}
                      </h2>
                      <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
                        {detailedDescriptions[key][locale]}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#8C1D18] text-[#8C1D18] hover:bg-[#8C1D18] hover:text-white group"
                      >
                        <Link href="/iletisim" className="flex items-center gap-2">
                          {locale === 'tr' ? 'İletişime Geç' : 'Contact Us'}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div 
                        className="aspect-[4/3] bg-cover bg-center rounded-lg shadow-2xl"
                        style={{
                          backgroundImage: `url('${serviceImages[key]}')`,
                        }}
                      />
                      <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-[#8C1D18] rounded-lg -z-10`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="py-24 lg:py-32 bg-[#8C1D18]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#F2F1ED] mb-4">
                {t.cta.title}
              </h2>
              <p className="text-lg text-[#F2F1ED]/80 mb-8 max-w-2xl mx-auto">
                {t.cta.subtitle}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#8C1D18] hover:bg-[#F2F1ED] px-8 py-6 text-base font-medium group"
              >
                <Link href="/iletisim" className="flex items-center gap-2">
                  {t.cta.button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
