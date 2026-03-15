'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Lightbulb, Leaf, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';

const valueIcons = {
  quality: Award,
  trust: Shield,
  innovation: Lightbulb,
  sustainability: Leaf,
  professionalism: Briefcase,
};

const valueKeys = ['quality', 'trust', 'innovation', 'sustainability', 'professionalism'] as const;

export function ValuesSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
            {t.values.title}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] mt-3">
            {t.values.subtitle}
          </h2>
        </FadeIn>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {valueKeys.map((key, index) => {
            const Icon = valueIcons[key];
            const value = t.values[key];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F2F1ED] flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#8C1D18]" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#2B2B2B] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#2B2B2B]/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
