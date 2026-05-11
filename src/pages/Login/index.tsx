import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus, Mail, Lock, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/config/routes';
import { Button } from '@/components/ui';

export default function LoginPage() {
  const { login, signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.HOME;

  const isLogin = location.pathname !== ROUTES.SIGNUP;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (isLogin) {
      const result = login(email, password);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => navigate(from, { replace: true }), 1000);
      } else {
        setError(result.message);
      }
    } else {
      const result = signup(email, password);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => navigate(from, { replace: true }), 1000);
      } else {
        setError(result.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link to="/" className="inline-block mb-6">
            <span className="text-4xl font-bold font-heading text-primary">
              sigma<span className="text-accent">GO</span>
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-primary mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600">
            {isLogin 
              ? 'Enter your credentials to access your account' 
              : 'Join SigmaGo and experience modern ITSM'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-medium"
              >
                <AlertCircle size={18} />
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-100 rounded-xl flex items-center gap-3 text-green-600 text-sm font-medium"
              >
                <CheckCircle2 size={18} />
                {success}
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-1 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-gray-700 bg-gray-50/50"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-gray-700 bg-gray-50/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-accent hover:text-accent/80 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-accent/20"
              variant="primary"
            >
              {isLogin ? (
                <span className="flex items-center gap-2">
                  Sign In <LogIn size={20} />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Create Account <UserPlus size={20} />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="text-center">
              <button
                onClick={() => {
                  setError('');
                  setSuccess('');
                  navigate(isLogin ? ROUTES.SIGNUP : ROUTES.LOGIN);
                }}
                className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
              >
                {isLogin 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
                <span className="text-accent font-bold">
                  {isLogin ? 'Sign up for free' : 'Sign in here'}
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-4 text-gray-400 text-xs font-medium uppercase tracking-widest">
          <span className="flex items-center gap-1"><ShieldCheck size={14} /> Secure Login</span>
          <span>•</span>
          <span>256-bit Encryption</span>
        </div>
      </div>
    </div>
  );
}
