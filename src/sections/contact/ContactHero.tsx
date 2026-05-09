import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

export function ContactHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-[#002d4d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's <span className="text-accent">Connect</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about our mobile ITSM solutions? Our team is ready to help you transform your IT service management.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
