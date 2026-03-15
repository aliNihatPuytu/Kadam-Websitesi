'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, SlideIn } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function IntroSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="intro" className="py-24 lg:py-32 bg-[#F2F1ED]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <SlideIn direction="left">
            <div className="space-y-6">
              <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
                {t.intro.title}
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] leading-tight">
                {t.intro.subtitle}
              </h2>
              <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
                {t.intro.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white group"
              >
                <Link href="/kurumsal" className="flex items-center gap-2">
                  {t.intro.learnMore}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </SlideIn>

          {/* Image */}
          <SlideIn direction="right" delay={0.2}>
            <div className="relative">
              <div 
                className="aspect-[4/3] bg-cover bg-center rounded-lg shadow-2xl"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')`,
                }}
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8C1D18] rounded-lg -z-10" />
            </div>
          </SlideIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
