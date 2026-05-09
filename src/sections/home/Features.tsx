import { motion } from 'framer-motion';
import { Bell, WifiOff, BarChart3, Lock, Plug, FileSearch } from 'lucide-react';
import { Container, SectionTitle } from '@/components/ui';

const features = [
  { icon: Bell, title: 'Real-time Notifications', description: 'Get instant push notifications for approvals, comments, and critical updates.' },
  { icon: WifiOff, title: 'Offline Support', description: 'Continue working without internet. Changes sync automatically when reconnected.' },
  { icon: BarChart3, title: 'Custom Dashboards', description: 'Build personalized dashboards with drag-and-drop widgets and live data.' },
  { icon: Lock, title: 'Role-based Access', description: 'Enterprise-grade security with granular role-based access controls.' },
  { icon: Plug, title: 'API Integration', description: 'Connect seamlessly with your existing tools through RESTful APIs.' },
  { icon: FileSearch, title: 'Analytics & Reports', description: 'Gain actionable insights with advanced analytics and custom reports.' },
];

export function Features() {
  return (
    <section className="py-24 bg-bg-light">
      <Container>
        <SectionTitle
          subtitle="Features"
          title="Everything You Need In One App"
          description="Our ITSM mobile app provides a seamless experience for end-users and technicians alike."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <feature.icon size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
