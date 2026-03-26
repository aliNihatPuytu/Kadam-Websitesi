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
      tr: 'Hayalinizdeki modern ve güvenli yaşam alanlarını gerçeğe dönüştürüyoruz. Konut projelerinden ticari yapılara, endüstriyel tesislerden karma kullanımlı projelere kadar geniş bir yelpazede uzman kadromuzla kalıcı ve sağlam yapılar inşa ediyoruz.',
      en: 'We turn your dream modern and safe living spaces into reality. We build durable structures with our expert team across a wide range from residential projects to commercial buildings and industrial facilities.',
    },
    development: {
      tr: 'İşinizi büyütecek, estetik ve verimli ticari yapılar tasarlıyoruz. Ofislerden alışveriş merkezlerine, otellere kadar her ölçekte ticari projenizi titizlikle planlıyor ve hayata geçiriyoruz. Arazi değerlendirmesinden teslimata kadar tüm süreci yönetiyoruz.',
      en: 'We design aesthetic and efficient commercial buildings that will grow your business. We carefully plan and implement commercial projects of every scale from offices to shopping centers and hotels.',
    },
    architecture: {
      tr: 'Şehirle uyumlu, sürdürülebilir ve güvenli dönüşüm çözümleri sunuyoruz. Eskiyen yapılarınızı modern standartlara taşıyor, bölgenin değerini artıran kentsel dönüşüm projeleri geliştiriyoruz.',
      en: 'We offer urban transformation solutions that are compatible with the city, sustainable and safe. We bring your aging buildings to modern standards and develop urban transformation projects.',
    },
    engineering: {
      tr: 'Mekanlarınızı işlevsellik ve estetikle buluşturuyoruz. Konut ve ticari alanlarda özgün iç mimarlık çözümleri üretiyor; her detayı özenle tasarlayarak yaşam ve çalışma alanlarınıza değer katıyoruz.',
      en: 'We combine your spaces with functionality and aesthetics. We produce unique interior architecture solutions for residential and commercial areas, adding value by carefully designing every detail.',
    },
    renovation: {
      tr: 'Tüm süreçleri eksiksiz yönetiyor, projelerinizi zamanında ve bütçenize uygun tamamlıyoruz. Planlama, tedarik, uygulama ve kontrol aşamalarında profesyonel proje yönetimi hizmetiyle yanınızdayız.',
      en: 'We manage all processes seamlessly, completing your projects on time and within budget. We are with you with professional project management services in planning, procurement, implementation and control phases.',
    },
    consulting: {
      tr: 'Hayalinizdeki projeyi baştan sona sorunsuz teslim ediyoruz. Arsa tespitinden ruhsat süreçlerine, inşaat uygulamasından anahtar teslimine kadar tüm adımları tek elden, şeffaf bir şekilde yönetiyoruz.',
      en: 'We deliver your dream project seamlessly from start to finish. We manage all steps from site identification to permits, construction to key handover in a single-handed, transparent manner.',
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
                      <p className="text-lg text-[#2B2B2B]/80 leading-relaxed text-justify">
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
