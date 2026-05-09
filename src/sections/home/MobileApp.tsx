import { motion } from 'framer-motion';
import { Smartphone, CheckCircle } from 'lucide-react';
import { Container, Button } from '@/components/ui';

const benefits = [
  'Improve your SLA performance',
  'Enable visual proof of work',
  'Perform actions on any ticket',
  'Run One-Steps with prompts',
  'Real-time push notifications',
  'Works on iOS and Android',
];

export function MobileApp() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10 bg-gradient-to-br from-primary to-[#002d4d] rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <Smartphone size={80} className="text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">sigmaGO Mobile</h3>
                <p className="text-white/60 text-sm mb-6">Available on all platforms</p>
                <div className="flex gap-3 justify-center">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-xs font-medium">iOS</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-xs font-medium">Android</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-xs font-medium">Web</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3">
              Mobile ITSM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your ITSM System, Always In Your Pocket
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Connect remotely via Android or iOS directly to your ITSM Service Management system. Bridge the gap between complex ITSM systems and your mobile workforce.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" href="/about">
              Learn More
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
