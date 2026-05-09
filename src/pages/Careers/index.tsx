import { Navbar, Footer } from '@/components/layout';
import { CareersHero, JobOpenings, Culture } from '@/sections/careers';

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <CareersHero />
        <JobOpenings />
        <Culture />
      </main>
      <Footer />
    </div>
  );
}
