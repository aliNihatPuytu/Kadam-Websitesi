'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';

const allProjects = [
  {
    id: 'modern-residence',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    name: { tr: 'Ataşehir Projesi', en: 'Ataşehir Project' },
    location: { tr: 'İnönü, Büyük Atatürk Cd. Ataşehir/İstanbul/TÜRKİYE', en: 'İnönü, Büyük Atatürk Cd. Ataşehir/Istanbul/TÜRKİYE' },
    category: 'residential',
    status: 'ongoing',
  },
];

export default function ProjectsPage() {
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
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
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
              {t.projects.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#F2F1ED]/80"
            >
              {t.projects.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <SectionWrapper className="py-24 lg:py-32 bg-[#F2F1ED]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 max-w-md mx-auto gap-8">
              {allProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/projeler/${project.id}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      />
                      <div className="absolute inset-0 bg-[#2B2B2B]/0 group-hover:bg-[#2B2B2B]/40 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.status === 'completed'
                            ? 'bg-green-600 text-white'
                            : project.status === 'ongoing'
                            ? 'bg-[#8C1D18] text-white'
                            : 'bg-[#2B2B2B] text-white'
                        }`}>
                          {t.projects.status[project.status as keyof typeof t.projects.status]}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-6 py-3 bg-white text-[#2B2B2B] font-medium rounded-lg">
                          {t.projects.viewProject}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#8C1D18] tracking-widest uppercase">
                        {t.projects.categories[project.category as keyof typeof t.projects.categories]}
                      </span>
                      <h3 className="font-heading font-semibold text-xl text-[#2B2B2B] mt-2 mb-2 group-hover:text-[#8C1D18] transition-colors">
                        {project.name[locale]}
                      </h3>
                      <div className="flex items-center gap-2 text-[#2B2B2B]/60">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{project.location[locale]}</span>
                      </div>
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