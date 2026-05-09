import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-[#002d4d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-accent">sigmaGO</span> Solutions
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing cutting-edge ITSM mobile solutions that empower businesses to achieve new levels of productivity and efficiency.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
