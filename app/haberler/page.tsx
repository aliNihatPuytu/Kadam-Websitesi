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
    id: 'sustainability-initiative',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Sürdürülebilirlik Girişimi', en: 'Sustainability Initiative' },
    summary: { 
      tr: 'Çevre dostu inşaat yöntemlerimiz ve sürdürülebilir projelerimiz hakkında bilgi edinin. KADAM olarak doğaya saygılı yapılar inşa etmeyi önceliklerimiz arasında tutuyoruz.', 
      en: 'Learn about our eco-friendly construction methods and sustainable projects. At KADAM, we prioritize building structures that respect nature.' 
    },
    date: '2026-03-05',
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
    id: 'award-winning-design',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Yenilikçi Tasarım Yaklaşımımız', en: 'Our Innovative Design Approach' },
    summary: { 
      tr: 'KADAM\'ın yenilikçi tasarım yaklaşımı ve mimari vizyonu hakkında detaylı bilgi. Modern ve işlevsel tasarımlarımız ile fark yaratıyoruz.', 
      en: 'Detailed information about KADAM\'s innovative design approach and architectural vision. We make a difference with our modern and functional designs.' 
    },
    date: '2026-02-20',
  },
  {
    id: 'community-project',
    image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Topluluk Projesi Başladı', en: 'Community Project Started' },
    summary: { 
      tr: 'Sosyal sorumluluk projelerimiz kapsamında başlattığımız topluluk projesi hakkında detaylar. Topluma değer katan projeler geliştirmeye devam ediyoruz.', 
      en: 'Details about the community project we started as part of our social responsibility projects. We continue to develop projects that add value to society.' 
    },
    date: '2026-02-15',
  },
  {
    id: 'technology-investment',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Teknoloji Yatırımları', en: 'Technology Investments' },
    summary: { 
      tr: 'İnşaat süreçlerimizi optimize etmek için yaptığımız teknoloji yatırımları. En son teknolojileri kullanarak daha kaliteli ve hızlı projeler teslim ediyoruz.', 
      en: 'Technology investments we make to optimize our construction processes. Using the latest technologies, we deliver higher quality and faster projects.' 
    },
    date: '2026-02-10',
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
