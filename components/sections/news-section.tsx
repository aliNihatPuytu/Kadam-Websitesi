'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    id: 'new-project-announcement',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Yeni Proje Duyurusu', en: 'New Project Announcement' },
    summary: { 
      tr: 'KADAM olarak yeni konut projemizi sizlerle paylaşmaktan mutluluk duyuyoruz.', 
      en: 'We are pleased to share our new residential project with you.' 
    },
    date: '2026-03-10',
  },
  {
    id: 'team-expansion',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Ekibimiz Büyüyor', en: 'Our Team is Growing' },
    summary: { 
      tr: 'Uzman mühendis ve mimarlardan oluşan ekibimize yeni üyeler katıldı.', 
      en: 'New members have joined our team of expert engineers and architects.' 
    },
    date: '2026-02-28',
  },
  {
    id: 'milan-design-week',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Milan Design Week\'e Katıldık', en: 'We Attended Milan Design Week' },
    summary: { 
      tr: 'KADAM olarak Nisan ayında düzenlenen Milan Design Week\'e katıldık.', 
      en: 'As KADAM, we attended Milan Design Week held in April.' 
    },
    date: '2026-04-10',
  },
];

export function NewsSection() {
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
    <SectionWrapper className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
              {t.news.title}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] mt-3">
              {t.news.subtitle}
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white group w-fit"
          >
            <Link href="/haberler" className="flex items-center gap-2">
              {t.news.viewAll}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <Link href={`/haberler/${item.id}`}>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-lg mb-5">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-[#2B2B2B]/60 mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#2B2B2B] mb-2 group-hover:text-[#8C1D18] transition-colors">
                    {item.title[locale]}
                  </h3>
                  <p className="text-[#2B2B2B]/70 leading-relaxed mb-4">
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
  );
}
