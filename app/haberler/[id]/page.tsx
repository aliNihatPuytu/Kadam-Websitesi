'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn, SlideIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';

const newsData = {
  'new-project-announcement': {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Yeni Proje Duyurusu', en: 'New Project Announcement' },
    content: { 
      tr: `KADAM olarak yeni konut projemizi sizlerle paylaşmaktan mutluluk duyuyoruz. Modern mimari anlayışı ve kaliteli yaşam standartları ile öne çıkan projemiz, İstanbul'un en prestijli bölgelerinden birinde yükselecek.

Projemiz, çağdaş yaşamın tüm gereksinimlerini karşılayacak şekilde tasarlanmıştır. Geniş yeşil alanlar, sosyal tesisler ve akıllı ev sistemleri ile donatılmış daireler, modern şehir yaşamının konforunu sunmaktadır.

İnşaat çalışmaları önümüzdeki ay başlayacak olup, projenin 2028 yılında tamamlanması planlanmaktadır. Satış ofisimiz yakında açılacaktır.`, 
      en: `We are pleased to share our new residential project with you. Our project, which stands out with its modern architectural approach and quality living standards, will rise in one of Istanbul's most prestigious areas.

Our project is designed to meet all the requirements of contemporary living. Apartments equipped with large green areas, social facilities and smart home systems offer the comfort of modern city life.

Construction work will begin next month, and the project is planned to be completed in 2028. Our sales office will be opening soon.` 
    },
    date: '2026-03-10',
  },
  'sustainability-initiative': {
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Sürdürülebilirlik Girişimi', en: 'Sustainability Initiative' },
    content: { 
      tr: `Çevre dostu inşaat yöntemlerimiz ve sürdürülebilir projelerimiz hakkında bilgi edinin. KADAM olarak doğaya saygılı yapılar inşa etmeyi önceliklerimiz arasında tutuyoruz.

Tüm projelerimizde çevre dostu malzemeler kullanıyor, enerji verimliliğini ön planda tutuyoruz. Güneş enerjisi sistemleri, yağmur suyu toplama sistemleri ve akıllı enerji yönetimi çözümlerini projelerimize entegre ediyoruz.

Bu girişim kapsamında, karbon ayak izimizi azaltmak için somut adımlar atıyoruz ve sektörde örnek olmayı hedefliyoruz.`, 
      en: `Learn about our eco-friendly construction methods and sustainable projects. At KADAM, we prioritize building structures that respect nature.

We use eco-friendly materials in all our projects and prioritize energy efficiency. We integrate solar energy systems, rainwater collection systems and smart energy management solutions into our projects.

As part of this initiative, we are taking concrete steps to reduce our carbon footprint and aim to set an example in the industry.` 
    },
    date: '2026-03-05',
  },
  'team-expansion': {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Ekibimiz Büyüyor', en: 'Our Team is Growing' },
    content: { 
      tr: `Uzman mühendis ve mimarlardan oluşan ekibimize yeni üyeler katıldı. Büyüyen ekibimizle daha büyük projelere imza atmaya hazırız.

Yeni aramıza katılan profesyoneller, farklı uzmanlık alanlarından gelmektedir. Yapısal mühendislik, mekanik mühendislik ve mimari tasarım alanlarında uzman isimler, KADAM ailesinin bir parçası olmuştur.

Bu büyüme stratejisi, şirketimizin 2026 ve sonrası için belirlediği hedeflere ulaşması yolunda önemli bir adımdır.`, 
      en: `New members have joined our team of expert engineers and architects. With our growing team, we are ready to undertake larger projects.

The professionals who have recently joined us come from different areas of expertise. Experts in structural engineering, mechanical engineering and architectural design have become part of the KADAM family.

This growth strategy is an important step towards our company achieving its goals for 2026 and beyond.` 
    },
    date: '2026-02-28',
  },
  'award-winning-design': {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Yenilikçi Tasarım Yaklaşımımız', en: 'Our Innovative Design Approach' },
    content: { 
      tr: `KADAM'ın yenilikçi tasarım yaklaşımı ve mimari vizyonu hakkında detaylı bilgi. Modern ve işlevsel tasarımlarımız ile fark yaratıyoruz.

Tasarım sürecimizde fonksiyonellik ve estetiği dengeli bir şekilde bir araya getiriyoruz. Her proje, benzersiz ihtiyaçlara ve konuma özel çözümlerle tasarlanmaktadır.

Uluslararası tasarım trendlerini yerel ihtiyaçlarla harmanlayan yaklaşımımız, projelerimizi farklı kılmaktadır.`, 
      en: `Detailed information about KADAM's innovative design approach and architectural vision. We make a difference with our modern and functional designs.

In our design process, we bring together functionality and aesthetics in a balanced way. Each project is designed with unique needs and location-specific solutions.

Our approach, which blends international design trends with local needs, makes our projects distinctive.` 
    },
    date: '2026-02-20',
  },
  'community-project': {
    image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Topluluk Projesi Başladı', en: 'Community Project Started' },
    content: { 
      tr: `Sosyal sorumluluk projelerimiz kapsamında başlattığımız topluluk projesi hakkında detaylar. Topluma değer katan projeler geliştirmeye devam ediyoruz.

Bu proje kapsamında, dezavantajlı bölgelerde eğitim tesisleri inşa ediyoruz. Aynı zamanda yerel toplulukların ihtiyaçlarını karşılayan sosyal alanlar oluşturuyoruz.

KADAM olarak, iş hedeflerimizin yanı sıra sosyal sorumluluklarımızı da yerine getirmeyi önemsiyoruz.`, 
      en: `Details about the community project we started as part of our social responsibility projects. We continue to develop projects that add value to society.

As part of this project, we are building educational facilities in disadvantaged areas. We are also creating social spaces that meet the needs of local communities.

At KADAM, we care about fulfilling our social responsibilities alongside our business goals.` 
    },
    date: '2026-02-15',
  },
  'technology-investment': {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
    title: { tr: 'Teknoloji Yatırımları', en: 'Technology Investments' },
    content: { 
      tr: `İnşaat süreçlerimizi optimize etmek için yaptığımız teknoloji yatırımları. En son teknolojileri kullanarak daha kaliteli ve hızlı projeler teslim ediyoruz.

BIM (Building Information Modeling) sistemlerini tüm projelerimizde aktif olarak kullanıyoruz. Bu sayede tasarım hatalarını minimize ediyor ve inşaat süreçlerini optimize ediyoruz.

Ayrıca drone teknolojisi ve yapay zeka destekli kalite kontrol sistemlerini süreçlerimize entegre ettik.`, 
      en: `Technology investments we make to optimize our construction processes. Using the latest technologies, we deliver higher quality and faster projects.

We actively use BIM (Building Information Modeling) systems in all our projects. This allows us to minimize design errors and optimize construction processes.

We have also integrated drone technology and AI-powered quality control systems into our processes.` 
    },
    date: '2026-02-10',
  },
};

export default function NewsDetailPage() {
  const params = useParams();
  const { t, locale } = useLanguage();
  const newsId = params.id as string;
  const news = newsData[newsId as keyof typeof newsData];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-[#2B2B2B] mb-4">
            {locale === 'tr' ? 'Haber bulunamadı' : 'News not found'}
          </h1>
          <Button asChild>
            <Link href="/haberler">{locale === 'tr' ? 'Haberlere Dön' : 'Back to News'}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-end">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${news.image}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-[#2B2B2B]/50 to-transparent" />
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/haberler" 
                className="inline-flex items-center gap-2 text-[#F2F1ED]/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {locale === 'tr' ? 'Haberlere Dön' : 'Back to News'}
              </Link>
              <div className="flex items-center gap-2 text-sm text-[#F2F1ED]/80 mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={news.date}>{formatDate(news.date)}</time>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white">
                {news.title[locale]}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <SectionWrapper className="py-24 lg:py-32 bg-white">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <SlideIn direction="left">
              <div className="prose prose-lg max-w-none">
                {news.content[locale].split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[#2B2B2B]/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#2B2B2B]">
                    {locale === 'tr' ? 'Paylaş:' : 'Share:'}
                  </span>
                  <button className="w-10 h-10 rounded-full bg-[#F2F1ED] flex items-center justify-center hover:bg-[#8C1D18] hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </SlideIn>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
