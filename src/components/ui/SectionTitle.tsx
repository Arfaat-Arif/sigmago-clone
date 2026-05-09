import { motion } from 'framer-motion';
import type { SectionTitleProps } from '@/types';

export function SectionTitle({ subtitle, title, description, centered = true, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="inline-block text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && <div className="w-16 h-1 bg-accent mx-auto mb-6" />}
      {description && (
        <p className={`text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
