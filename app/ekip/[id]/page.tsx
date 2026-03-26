'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Linkedin, ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn, SlideIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/lib/team-data';

export default function TeamMemberPage() {
  const params = useParams();
  const { locale } = useLanguage();
  const member = teamMembers.find((m) => m.id === params.id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2B2B2B] mb-4">Kişi bulunamadı</h1>
          <Link href="/ekip" className="text-[#8C1D18] hover:underline">← Ekibe Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[45vh] min-h-[320px] flex items-end justify-start overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-[#2B2B2B]/60 to-[#2B2B2B]/20" />
          <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-8 pb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-semibold text-[#8C1D18] tracking-widest uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4"
            >
              KADAM İnşaat
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2"
            >
              {member.name[locale]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 font-medium"
            >
              {member.title[locale]}
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <SectionWrapper className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

            {/* Back button */}
            <FadeIn className="mb-12">
              <Button asChild variant="outline" className="border-[#2B2B2B]/25 text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white group">
                <Link href="/ekip" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  {locale === 'tr' ? 'Ekibe Dön' : 'Back to Team'}
                </Link>
              </Button>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-14 items-start">

              {/* LEFT — Photo + Contact */}
              <SlideIn direction="left" className="lg:sticky lg:top-28 space-y-6">

                {/* Photo */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E5E5]">
                  <Image
                    src={member.image}
                    alt={member.name[locale]}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2B2B2B]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-[#8C1D18] text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-lg">
                      {member.title[locale]}
                    </span>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-[#F2F1ED] rounded-2xl p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#2B2B2B] border-b border-[#E5E5E5] pb-3">
                    {locale === 'tr' ? 'İletişim' : 'Contact'}
                  </h3>

                  <a href={`mailto:${member.email}`} className="flex items-center gap-3 group/c p-2 rounded-lg hover:bg-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#8C1D18] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#2B2B2B]/50 mb-0.5">E-posta</p>
                      <p className="text-sm text-[#2B2B2B] group-hover/c:text-[#8C1D18] transition-colors truncate font-medium">{member.email}</p>
                    </div>
                  </a>

                  <a href={`tel:${member.phone.replace(/[\s()]/g, '')}`} className="flex items-center gap-3 group/c p-2 rounded-lg hover:bg-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#8C1D18] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#2B2B2B]/50 mb-0.5">Telefon</p>
                      <p className="text-sm font-medium text-[#2B2B2B] group-hover/c:text-[#8C1D18] transition-colors">{member.phone}</p>
                    </div>
                  </a>

                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/c p-2 rounded-lg hover:bg-white transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#8C1D18] flex items-center justify-center shrink-0">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-[#2B2B2B]/50 mb-0.5">LinkedIn</p>
                        <p className="text-sm font-medium text-[#2B2B2B] group-hover/c:text-[#8C1D18] transition-colors">Profili Görüntüle →</p>
                      </div>
                    </a>
                  )}
                </div>

                <Button asChild className="w-full bg-[#8C1D18] hover:bg-[#6B1512] text-white py-6 rounded-xl text-base">
                  <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    {locale === 'tr' ? 'E-posta Gönder' : 'Send Email'}
                  </a>
                </Button>
              </SlideIn>

              {/* RIGHT — Bio + Expertise */}
              <SlideIn direction="right" delay={0.15} className="lg:col-span-2 space-y-12">

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-12 bg-[#8C1D18] rounded-full shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#8C1D18] tracking-widest uppercase">KADAM İnşaat</p>
                      <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#2B2B2B]">{member.name[locale]}</h2>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-[#8C1D18] via-[#E5E5E5] to-transparent" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl text-[#2B2B2B] mb-5 flex items-center gap-3">
                    <span className="w-6 h-0.5 bg-[#8C1D18] inline-block shrink-0" />
                    {locale === 'tr' ? 'Hakkında' : 'About'}
                  </h3>
                  <p className="text-lg text-[#2B2B2B]/75 leading-relaxed text-justify">{member.bio[locale]}</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl text-[#2B2B2B] mb-6 flex items-center gap-3">
                    <span className="w-6 h-0.5 bg-[#8C1D18] inline-block shrink-0" />
                    {locale === 'tr' ? 'Uzmanlık Alanları' : 'Areas of Expertise'}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {member.expertise[locale].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-3 p-4 bg-[#F2F1ED] rounded-xl border border-transparent hover:border-[#8C1D18]/20 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#8C1D18] shrink-0" />
                        <span className="font-semibold text-[#2B2B2B]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </SectionWrapper>

        {/* Other team members */}
        <SectionWrapper className="py-16 bg-[#F2F1ED]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h3 className="font-heading font-bold text-2xl text-[#2B2B2B]">
                {locale === 'tr' ? 'Diğer Ekip Üyeleri' : 'Other Team Members'}
              </h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {teamMembers.filter((m) => m.id !== member.id).map((m, index) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={`/ekip/${m.id}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-all group border border-transparent hover:border-[#8C1D18]/15"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E5E5E5]">
                      <Image src={m.image} alt={m.name[locale]} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading font-bold text-[#2B2B2B] group-hover:text-[#8C1D18] transition-colors truncate">{m.name[locale]}</p>
                      <p className="text-sm text-[#2B2B2B]/55 truncate">{m.title[locale]}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8C1D18] shrink-0 group-hover:translate-x-1 transition-transform" />
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
