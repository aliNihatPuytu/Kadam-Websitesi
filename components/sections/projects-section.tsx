'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';

const featuredProjects = [
  {
    id: 'modern-residence',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    name: { tr: 'Ataşehir Projesi', en: 'Ataşehir Project' },
    location: { tr: 'İstanbul, Türkiye', en: 'Istanbul, Turkey' },
    category: 'residential',
    status: 'ongoing',
  },
];

export function ProjectsSection() {
  const { t, locale } = useLanguage();

  return (
    <SectionWrapper className="py-24 lg:py-32 bg-[#F2F1ED]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
              {t.projects.title}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] mt-3">
              {t.projects.subtitle}
            </h2>
          </div>
          <Button asChild variant="outline" className="border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white group w-fit">
            <Link href="/projeler" className="flex items-center gap-2">
              {t.projects.viewAll}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>

        {/* Projects Grid - tek proje için ortada */}
        <div className="grid grid-cols-1 max-w-md mx-auto gap-8">
          {featuredProjects.map((project, index) => (
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
  );
}