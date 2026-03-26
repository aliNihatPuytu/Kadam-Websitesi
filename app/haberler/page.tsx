'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';

const newsItems = [
  {
    id: 'new-project-announcement',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Yeni Proje Duyurusu', en: 'New Project Announcement' },
    summary: { 
      tr: 'KADAM olarak yeni konut projemizi sizlerle paylaşmaktan mutluluk duyuyoruz. Modern mimari anlayışı ve kaliteli yaşam standartları ile öne çıkan projemiz, İstanbul\'un en prestijli bölgelerinden birinde yükselecek.', 
      en: 'We are pleased to share our new residential project with you. Our project, which stands out with its modern architectural approach and quality living standards, will rise in one of Istanbul\'s most prestigious areas.' 
    },
    date: '2026-03-10',
  },
  {
    id: 'team-expansion',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Ekibimiz Büyüyor', en: 'Our Team is Growing' },
    summary: { 
      tr: 'Uzman mühendis ve mimarlardan oluşan ekibimize yeni üyeler katıldı. Büyüyen ekibimizle daha büyük projelere imza atmaya hazırız.', 
      en: 'New members have joined our team of expert engineers and architects. With our growing team, we are ready to undertake larger projects.' 
    },
    date: '2026-02-28',
  },
  {
    id: 'milan-design-week',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Milan Design Week\'e Katıldık', en: 'We Attended Milan Design Week' },
    summary: { 
      tr: 'KADAM olarak Nisan ayında düzenlenen dünyanın en prestijli tasarım etkinliği Milan Design Week\'e katıldık. Güncel mimari trendleri ve inovatif tasarım anlayışlarını yakından takip ederek projelerimize ilham kattık.', 
      en: 'As KADAM, we attended Milan Design Week, the world\'s most prestigious design event held in April. We closely followed current architectural trends and innovative design approaches.' 
    },
    date: '2026-04-10',
  },
];

export default function NewsPage() {
  const { t, locale } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
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
              backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop')`,
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
              {t.news.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#F2F1ED]/80"
            >
              {t.news.subtitle}
            </motion.p>
          </div>
        </section>

        {/* News Grid */}
        <SectionWrapper className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href={`/haberler/${item.id}`}>
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-[#2B2B2B]/60 mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={item.date}>{formatDate(item.date)}</time>
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-[#2B2B2B] mb-3 group-hover:text-[#8C1D18] transition-colors">
                        {item.title[locale]}
                      </h3>
                      <p className="text-[#2B2B2B]/70 leading-relaxed mb-4 line-clamp-3">
                        {item.summary[locale]}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#8C1D18] font-medium group-hover:gap-3 transition-all">
                        {t.news.readMore}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
