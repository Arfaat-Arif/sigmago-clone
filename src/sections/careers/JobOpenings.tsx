import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ChevronRight } from 'lucide-react';
import { Container, SectionTitle, Button } from '@/components/ui';
import type { JobListing } from '@/types';

const jobs: JobListing[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (USA)',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Engineer to lead the development of our next-generation mobile ITSM web portal.',
    requirements: ['5+ years React/TypeScript', 'Experience with mobile-first design', 'Strong understanding of web performance'],
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'Dallas, TX (Hybrid)',
    type: 'Full-time',
    description: 'Join our product team to help define and execute the roadmap for our core ITSM mobile application.',
    requirements: ['3+ years in B2B SaaS Product Management', 'Experience with ITSM solutions', 'Strong analytical skills'],
  },
  {
    id: '3',
    title: 'Customer Success Specialist',
    department: 'Customer Support',
    location: 'Remote (India)',
    type: 'Full-time',
    description: 'Help our enterprise clients successfully onboard and maximize value from the sigmaGO platform.',
    requirements: ['2+ years in customer success or support', 'Excellent communication skills', 'Technical troubleshooting ability'],
  },
];

export function JobOpenings() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Open Positions"
          title="Find Your Next Role"
          description="Explore our current openings and find the perfect fit for your skills and career goals."
        />

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-light border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-sm text-gray-500 font-medium flex items-center gap-1">
                    <Clock size={14} /> {job.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={16} /> Experience Required
                  </span>
                </div>
              </div>

              <div className="shrink-0 mt-4 md:mt-0">
                <Button variant="outline" className="w-full md:w-auto text-primary border-primary hover:bg-primary hover:text-white group-hover:bg-accent group-hover:border-accent">
                  Apply Now <ChevronRight size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
