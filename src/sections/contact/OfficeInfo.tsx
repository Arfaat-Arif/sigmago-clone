import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function OfficeInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div>
        <h3 className="text-3xl font-bold text-primary mb-6">Contact Information</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          Whether you have a question about our products, pricing, or need technical support, our team is ready to answer all your questions.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Mail size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Email Us</h4>
              <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-accent transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Phone size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Call Us</h4>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-accent transition-colors">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100">
        <h3 className="text-2xl font-bold text-primary mb-6">Our Offices</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} className="text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">USA Headquarters</h4>
              <p className="text-gray-600 leading-relaxed">
                {siteConfig.address.usa}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} className="text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">India Office</h4>
              <p className="text-gray-600 leading-relaxed">
                {siteConfig.address.india}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
