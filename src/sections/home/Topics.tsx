import { motion } from 'framer-motion';
import { Cloud, Brain, ShieldCheck, Smartphone, GitBranch, PieChart } from 'lucide-react';
import { Container, SectionTitle } from '@/components/ui';

const topics = [
  { icon: Cloud, title: 'Cloud Computing', description: 'Scalable cloud infrastructure for modern enterprise workloads.' },
  { icon: Brain, title: 'Artificial Intelligence', description: 'AI-powered automation and intelligent ticket routing.' },
  { icon: ShieldCheck, title: 'Cybersecurity', description: 'Enterprise-grade security protocols and compliance.' },
  { icon: Smartphone, title: 'Mobile Development', description: 'Cross-platform mobile solutions for the modern workforce.' },
  { icon: GitBranch, title: 'DevOps', description: 'Streamlined CI/CD pipelines and infrastructure automation.' },
  { icon: PieChart, title: 'Data Analytics', description: 'Actionable insights from your operational data.' },
];

export function Topics() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-[#002d4d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Technologies"
          title="Cutting-Edge Technologies"
          description="We leverage the latest technologies to deliver world-class ITSM solutions."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <topic.icon size={32} className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
