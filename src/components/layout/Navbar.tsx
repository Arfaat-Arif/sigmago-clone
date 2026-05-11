import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User } from 'lucide-react';
import { navLinks } from '@/config/navigation';
import { Container } from '@/components/ui';
import { useAuth } from '@/context/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!isAuthenticated && location.pathname !== '/login') return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-heading text-primary">
              sigma<span className="text-accent">GO</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-accent ${
                  location.pathname === link.href ? 'text-accent' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                  <User size={16} className="text-accent" />
                  <span className="text-xs font-bold truncate max-w-[120px]">{user?.email}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 shadow-md shadow-primary/20"
                >
                  Logout <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent/90 transition-colors duration-200 shadow-md shadow-accent/20"
              >
                Sign In
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block text-sm font-semibold uppercase tracking-wide py-2 transition-colors ${
                    location.pathname === link.href ? 'text-accent' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full font-semibold text-sm mt-4"
                >
                  Logout <LogOut size={16} />
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block bg-accent text-white text-center px-6 py-3 rounded-full font-semibold text-sm mt-4"
                >
                  Sign In
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
