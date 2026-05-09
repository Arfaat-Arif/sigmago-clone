import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

export function CareersHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-[#002d4d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Careers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join Our <span className="text-accent">Innovative</span> Team
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Help us build the future of mobile ITSM solutions. We're always looking for passionate, talented individuals to join our growing family.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
