'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Layers, Ruler } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn, SlideIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';

const projectsData = {
  'modern-residence': {
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    ],
    name: { tr: 'Ataşehir Projesi', en: 'Ataşehir Project' },
    location: { tr: 'İnönü, Büyük Atatürk Cd. Ataşehir/İstanbul/TÜRKİYE', en: 'İnönü, Büyük Atatürk Cd. Ataşehir/Istanbul/TÜRKİYE' },
    category: 'residential',
    status: 'ongoing',
    area: '1000 m²',
    description: {
      tr: 'Modern Konut Projesi, İstanbul\'un en prestijli bölgelerinden birinde konumlanan lüks bir konut kompleksidir. Proje, çağdaş mimari anlayışı ile konfor ve estetiği bir araya getirmektedir. Toplam 15.000 m² alan üzerine inşa edilen kompleks, farklı metrekarelerde daireler sunmaktadır.',
      en: 'Modern Residence Project is a luxury residential complex located in one of Istanbul\'s most prestigious areas. The project combines contemporary architectural understanding with comfort and aesthetics. Built on a total area of 15,000 m², the complex offers apartments of various sizes.'
    },
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const { t, locale } = useLanguage();
  const projectId = params.id as string;
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-[#2B2B2B] mb-4">
            {locale === 'tr' ? 'Proje bulunamadı' : 'Project not found'}
          </h1>
          <Button asChild>
            <Link href="/projeler">{t.projectDetail.backToProjects}</Link>
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
            style={{ backgroundImage: `url('${project.images[0]}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-[#2B2B2B]/50 to-transparent" />
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 text-[#F2F1ED]/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t.projectDetail.backToProjects}
              </Link>
              <span className="block text-sm font-medium text-[#8C1D18] tracking-widest uppercase mb-3">
                {t.projects.categories[project.category as keyof typeof t.projects.categories]}
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                {project.name[locale]}
              </h1>
              <div className="flex items-center gap-2 text-[#F2F1ED]/80">
                <MapPin className="w-5 h-5" />
                <span>{project.location[locale]}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <SectionWrapper className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <SlideIn direction="left">
                  <h2 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-6">
                    {t.projectDetail.description}
                  </h2>
                  <p className="text-lg text-[#2B2B2B]/80 leading-relaxed mb-12">
                    {project.description[locale]}
                  </p>
                  <h2 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-6">
                    {t.projectDetail.gallery}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`rounded-lg overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}
                      >
                        <div
                          className={`bg-cover bg-center ${index === 0 ? 'aspect-video' : 'aspect-square'}`}
                          style={{ backgroundImage: `url('${image}')` }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </SlideIn>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <SlideIn direction="right" delay={0.2}>
                  <div className="bg-[#F2F1ED] p-8 rounded-lg sticky top-24">
                    <h3 className="font-heading font-semibold text-xl text-[#2B2B2B] mb-6">
                      {locale === 'tr' ? 'Proje Bilgileri' : 'Project Information'}
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-[#8C1D18] mt-1" />
                        <div>
                          <span className="block text-sm text-[#2B2B2B]/60 mb-1">{t.projectDetail.location}</span>
                          <span className="font-medium text-[#2B2B2B]">{project.location[locale]}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Layers className="w-5 h-5 text-[#8C1D18] mt-1" />
                        <div>
                          <span className="block text-sm text-[#2B2B2B]/60 mb-1">{t.projectDetail.projectType}</span>
                          <span className="font-medium text-[#2B2B2B]">
                            {t.projects.categories[project.category as keyof typeof t.projects.categories]}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Ruler className="w-5 h-5 text-[#8C1D18] mt-1" />
                        <div>
                          <span className="block text-sm text-[#2B2B2B]/60 mb-1">{t.projectDetail.area}</span>
                          <span className="font-medium text-[#2B2B2B]">{project.area}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Calendar className="w-5 h-5 text-[#8C1D18] mt-1" />
                        <div>
                          <span className="block text-sm text-[#2B2B2B]/60 mb-1">{t.projectDetail.status}</span>
                          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                            project.status === 'completed'
                              ? 'bg-green-600 text-white'
                              : project.status === 'ongoing'
                              ? 'bg-[#8C1D18] text-white'
                              : 'bg-[#2B2B2B] text-white'
                          }`}>
                            {t.projects.status[project.status as keyof typeof t.projects.status]}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-[#2B2B2B]/10">
                      <Button asChild className="w-full bg-[#8C1D18] hover:bg-[#6B1512] text-white">
                        <Link href="/iletisim">
                          {locale === 'tr' ? 'Bu Proje Hakkında Bilgi Al' : 'Get Info About This Project'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}