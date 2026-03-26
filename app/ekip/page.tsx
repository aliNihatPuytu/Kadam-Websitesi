'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';
import { teamMembers } from '@/lib/team-data';

export default function EkipPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')`,
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
              {locale === 'tr' ? 'Ekibimiz' : 'Our Team'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#F2F1ED]/80"
            >
              {locale === 'tr'
                ? 'KADAM\'ı inşa eden güçlü ekip'
                : 'The strong team building KADAM'}
            </motion.p>
          </div>
        </section>

        {/* Team Grid */}
        <SectionWrapper className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
                {locale === 'tr' ? 'Kadromuz' : 'Our Team'}
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] mt-3">
                {locale === 'tr' ? 'Liderlik Kadromuz' : 'Our Leadership Team'}
              </h2>
              <p className="mt-4 text-lg text-[#2B2B2B]/60 max-w-2xl mx-auto">
                {locale === 'tr'
                  ? 'Deneyim, vizyon ve tutkuyla bir araya gelen ekibimiz KADAM\'ı her geçen gün daha ileriye taşıyor.'
                  : 'Our team, brought together by experience, vision and passion, takes KADAM further every day.'}
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/ekip/${member.id}`}>
                    {/* Photo */}
                    <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-5 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name[locale]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-[#8C1D18]/0 group-hover:bg-[#8C1D18]/20 transition-all duration-300" />
                      {/* Arrow */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <ArrowRight className="w-5 h-5 text-[#8C1D18]" />
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#2B2B2B] group-hover:text-[#8C1D18] transition-colors">
                        {member.name[locale]}
                      </h3>
                      <p className="text-sm font-medium text-[#8C1D18] mt-1 mb-3">
                        {member.title[locale]}
                      </p>

                      {/* Contact quick links */}
                      <div className="flex items-center gap-3 mt-2" onClick={(e) => e.preventDefault()}>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-9 h-9 rounded-full bg-[#F2F1ED] hover:bg-[#8C1D18] flex items-center justify-center transition-colors group/icon"
                          title={member.email}
                        >
                          <Mail className="w-4 h-4 text-[#8C1D18] group-hover/icon:text-white transition-colors" />
                        </a>
                        <a
                          href={`tel:${member.phone.replace(/\s|\(|\)|-/g, '')}`}
                          className="w-9 h-9 rounded-full bg-[#F2F1ED] hover:bg-[#8C1D18] flex items-center justify-center transition-colors group/icon"
                          title={member.phone}
                        >
                          <Phone className="w-4 h-4 text-[#8C1D18] group-hover/icon:text-white transition-colors" />
                        </a>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[#F2F1ED] hover:bg-[#8C1D18] flex items-center justify-center transition-colors group/icon"
                          >
                            <Linkedin className="w-4 h-4 text-[#8C1D18] group-hover/icon:text-white transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
