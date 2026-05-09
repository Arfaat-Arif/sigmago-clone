import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Container, Button } from '@/components/ui';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-[#002d4d]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              🚀 #1 Mobile ITSM Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Revolutionizing{' '}
              <span className="text-accent">ITSM</span>{' '}
              On The Go
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
              sigmaGO Solutions offers a refreshed mobile experience for ITSM Service Management, empowering your workforce with productivity at their fingertips.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/about">
                <Play size={18} /> Watch Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gradient-to-br from-accent/40 to-primary/40 flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">1000+ Businesses</p>
                <p className="text-white/60 text-xs">Trust sigmaGO worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Incidents Resolved', value: '99.9%' },
                    { label: 'Response Time', value: '<2min' },
                    { label: 'Active Users', value: '50K+' },
                    { label: 'Uptime SLA', value: '99.99%' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                      <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
                      <p className="text-white/60 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
