import { Navbar, Footer } from '@/components/layout';
import { ContactHero, ContactForm, OfficeInfo } from '@/sections/contact';
import { Container } from '@/components/ui';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <section className="py-24 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ContactForm />
              <OfficeInfo />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
