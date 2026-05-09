import { motion } from 'framer-motion';
import { Heart, Zap, Users, GraduationCap } from 'lucide-react';
import { Container, SectionTitle } from '@/components/ui';

const cultureItems = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs to keep you and your family healthy.',
  },
  {
    icon: Zap,
    title: 'Work-Life Balance',
    description: 'Flexible working hours, remote options, and generous paid time off policies.',
  },
  {
    icon: Users,
    title: 'Inclusive Environment',
    description: 'We celebrate diversity and foster an inclusive culture where everyone can thrive.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Budgets for conferences, courses, and certifications to support your professional growth.',
  },
];

export function Culture() {
  return (
    <section className="py-24 bg-bg-light">
      <Container>
        <SectionTitle
          subtitle="Life at sigmaGO"
          title="Our Culture & Benefits"
          description="We believe in taking care of our people so they can do their best work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {cultureItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
