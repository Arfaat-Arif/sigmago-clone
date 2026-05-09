import { motion } from 'framer-motion';
import { Target, Eye, Compass } from 'lucide-react';
import { Container, SectionTitle } from '@/components/ui';

const items = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To bridge the gap between complex ITSM systems and the mobile workforce by providing intuitive, high-performance mobile solutions.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A world where enterprise IT service management is seamlessly accessible from anywhere, empowering professionals to deliver exceptional service on the go.',
  },
  {
    icon: Compass,
    title: 'Our Core Values',
    description: 'Innovation, Reliability, User-Centric Design, and Uncompromising Security form the foundation of everything we build.',
  },
];

export function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Mission & Vision"
          title="Driving the Future of ITSM"
          description="We are passionate about transforming how organizations handle IT service management."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
