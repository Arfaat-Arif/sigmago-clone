import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui';

const features = [
  'Resolve tickets faster from any location',
  'Access knowledge bases on the go',
  'Improve SLA compliance rates',
  'Reduce downtime with instant alerts',
  'Streamline communication between teams',
  'Enhance user satisfaction with faster responses',
];

export function MobileWorkforce() {
  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3">
              Empowerment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Empowering the Mobile Workforce
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              In today's fast-paced business environment, your IT staff shouldn't be tethered to their desks. We provide the tools they need to stay productive, responsive, and effective, no matter where they are.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-10 rounded-[3rem] blur-3xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mobile Workforce"
              className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
