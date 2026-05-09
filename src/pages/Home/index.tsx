import { Navbar, Footer } from '@/components/layout';
import { Hero, Solutions, Features, MobileApp, Topics, CTA } from '@/sections/home';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <Features />
        <MobileApp />
        <Topics />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}