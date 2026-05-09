import { Navbar, Footer } from '@/components/layout';
import { AboutHero, MissionVision, MobileWorkforce } from '@/sections/about';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <MobileWorkforce />
      </main>
      <Footer />
    </div>
  );
}
