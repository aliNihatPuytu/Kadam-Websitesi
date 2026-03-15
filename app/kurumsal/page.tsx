'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn, SlideIn } from '@/components/ui/section-wrapper';

export default function CorporatePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop')`,
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
              {t.corporate.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#F2F1ED]/80"
            >
              {t.corporate.subtitle}
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <SectionWrapper className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SlideIn direction="left">
                <div className="space-y-6">
                  <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
                    {t.corporate.about.title}
                  </span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#2B2B2B]">
                    KADAM İnşaat
                  </h2>
                  <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
                    Kadam İnşaat, kaliteli, güvenilir ve modern yapı anlayışıyla inşaat sektöründe faaliyet göstermektedir. Kurulduğu günden bu yana müşteri memnuniyetini ön planda tutarak güvenli, estetik ve uzun ömürlü projeler üretmeyi hedeflemektedir. Deneyimli ekibi, güçlü mühendislik altyapısı ve yenilikçi yaklaşımıyla Kadam İnşaat; konut, ticari yapılar ve çeşitli inşaat projelerinde kalite standartlarından ödün vermeden çalışmalarını sürdürmektedir. Her projede sağlamlık, estetik ve fonksiyonelliği bir araya getirerek yaşam alanlarına değer katmayı amaçlamaktadır.
                  </p>
                </div>
              </SlideIn>
              <SlideIn direction="right" delay={0.2}>
                <div className="relative">
                  <div
                    className="aspect-[4/3] bg-cover bg-center rounded-lg shadow-2xl"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')`,
                    }}
                  />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8C1D18] rounded-lg -z-10" />
                </div>
              </SlideIn>
            </div>
          </div>
        </SectionWrapper>

        {/* Vision & Mission */}
        <SectionWrapper className="py-24 lg:py-32 bg-[#F2F1ED]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-[#8C1D18]/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#8C1D18]" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-4">
                  {t.corporate.vision.title}
                </h3>
                <p className="text-[#2B2B2B]/70 leading-relaxed">
                  {t.corporate.vision.description}
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-10 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-[#8C1D18]/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#8C1D18]" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-4">
                  {t.corporate.mission.title}
                </h3>
                <p className="text-[#2B2B2B]/70 leading-relaxed">
                  {t.corporate.mission.description}
                </p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}