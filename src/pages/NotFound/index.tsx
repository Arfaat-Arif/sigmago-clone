import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Button, Container } from '@/components/ui';
import { Navbar, Footer } from '@/components/layout';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex items-center bg-bg-light py-32">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-black text-primary/10 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
              The page you are looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            <Button variant="primary" size="lg" href="/">
              <Home size={18} /> Back to Home
            </Button>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
