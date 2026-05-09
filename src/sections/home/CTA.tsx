import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container, Button } from '@/components/ui';

export function CTA() {
  return (
    <section className="py-24 bg-bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent to-[#45b866] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your ITSM?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 1000+ companies that trust sigmaGO to power their mobile ITSM operations. Get started with a free demo today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" href="/contact">
                Request a Demo <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
