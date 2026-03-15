'use client';

import { motion } from 'framer-motion';
import { Building2, Layers, PenTool, Wrench, Hammer, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionWrapper, FadeIn } from '@/components/ui/section-wrapper';

const serviceIcons = {
  construction: Building2,
  development: Layers,
  architecture: PenTool,
  engineering: Wrench,
  renovation: Hammer,
  consulting: Users,
};

const serviceKeys = ['construction', 'development', 'architecture', 'engineering', 'renovation', 'consulting'] as const;

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-[#8C1D18] tracking-widest uppercase">
            {t.services.title}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] mt-3">
            {t.services.subtitle}
          </h2>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key];
            const service = t.services[key];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-lg border border-[#E5E5E5] hover:border-[#8C1D18] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-[#F2F1ED] flex items-center justify-center mb-6 group-hover:bg-[#8C1D18] transition-colors">
                  <Icon className="w-7 h-7 text-[#8C1D18] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#2B2B2B] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#2B2B2B]/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
