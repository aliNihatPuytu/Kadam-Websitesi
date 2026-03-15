'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper className="py-24 lg:py-32 bg-[#8C1D18]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#F2F1ED] mb-4"
          >
            {t.cta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#F2F1ED]/80 mb-8 max-w-2xl mx-auto"
          >
            {t.cta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#8C1D18] hover:bg-[#F2F1ED] px-8 py-6 text-base font-medium group"
            >
              <Link href="/iletisim" className="flex items-center gap-2">
                {t.cta.button}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
