'use client';

import { motion } from 'framer-motion';
import { Users, Target, Cpu, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';

const whyUsIcons = {
  experience: Users,
  quality: Target,
  modern: Cpu,
  management: ClipboardCheck,
};

const whyUsKeys = ['experience', 'quality', 'modern', 'management'] as const;

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper className="py-24 lg:py-32 bg-[#2B2B2B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
            {t.whyUs.title}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#F2F1ED] mt-3">
            {t.whyUs.subtitle}
          </h2>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsKeys.map((key, index) => {
            const Icon = whyUsIcons[key];
            const item = t.whyUs[key];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#3D3D3D] p-8 rounded-lg border border-[#4D4D4D] hover:border-[#8C1D18] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#8C1D18] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#F2F1ED] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#F2F1ED]/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
