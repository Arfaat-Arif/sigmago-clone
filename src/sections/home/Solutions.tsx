import { motion } from 'framer-motion';
import { Shield, RefreshCw, LayoutGrid, Database, BookOpen, Zap } from 'lucide-react';
import { Container, SectionTitle } from '@/components/ui';

const solutions = [
  {
    icon: Shield,
    title: 'Incident Management',
    description: 'Track, prioritize, and resolve incidents quickly with real-time mobile access and automated workflows.',
  },
  {
    icon: RefreshCw,
    title: 'Change Management',
    description: 'Manage changes seamlessly with approval workflows, risk assessments, and audit trails from anywhere.',
  },
  {
    icon: LayoutGrid,
    title: 'Service Catalog',
    description: 'Empower users with a self-service portal to request services, track orders, and find solutions instantly.',
  },
  {
    icon: Database,
    title: 'Asset Management',
    description: 'Track and manage IT assets throughout their lifecycle with barcode scanning and real-time updates.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Management',
    description: 'Build, share, and leverage knowledge bases to speed up resolution and enable self-service.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automate repetitive tasks, trigger workflows, and reduce manual effort across your ITSM operations.',
  },
];

export function Solutions() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Our Solutions"
          title="Enterprise ITSM Solutions"
          description="Comprehensive mobile-first ITSM solutions designed to accelerate your digital transformation and boost workforce productivity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300 shadow-lg shadow-primary/10">
                <solution.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
