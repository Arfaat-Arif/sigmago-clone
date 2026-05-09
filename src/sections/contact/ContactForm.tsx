import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50"
    >
      <h3 className="text-2xl font-bold text-primary mb-8">Send us a message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-bold text-primary uppercase tracking-wider">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-light rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
              placeholder="John"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-bold text-primary uppercase tracking-wider">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-light rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-primary uppercase tracking-wider">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-light rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
              placeholder="john@company.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-bold text-primary uppercase tracking-wider">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-light rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-primary uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-bg-light rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none h-32 resize-none"
            placeholder="How can we help you?"
            required
          />
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Send Message <Send size={18} />
        </Button>
      </form>
    </motion.div>
  );
}
