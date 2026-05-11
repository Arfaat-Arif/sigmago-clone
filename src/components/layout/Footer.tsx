import { Link } from 'react-router-dom';
import type { SVGProps } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/ui';
import { navLinks } from '@/config/navigation';
import { siteConfig } from '@/config/site';

const services = [
  { label: 'Incident Management', href: '#' },
  { label: 'Change Management', href: '#' },
  { label: 'Service Catalog', href: '#' },
  { label: 'Asset Management', href: '#' },
];

const SocialIcons = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: ({ size = 24, ...props }: { size?: number | string } & SVGProps<SVGSVGElement>) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: ({ size = 24, ...props }: { size?: number | string } & SVGProps<SVGSVGElement>) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: ({ size = 24, ...props }: { size?: number | string } & SVGProps<SVGSVGElement>) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-heading text-white">
                sigma<span className="text-accent">GO</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Leading the way in mobile ITSM solutions. Empowering your workforce with innovation and efficiency.
            </p>
            <div className="flex gap-4">
              {SocialIcons.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    title={social.name}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-1 shrink-0" />
                <span className="text-white/70 text-sm">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-1 shrink-0" />
                <span className="text-white/70 text-sm">{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 shrink-0" />
                <span className="text-white/70 text-sm">{siteConfig.address.usa}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
