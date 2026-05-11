import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { success: boolean; message: string };
  signup: (email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = 'sigmago_users';
const CURRENT_USER_KEY = 'sigmago_current_user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signup = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const exists = users.find((u: any) => u.email === email);
    
    if (exists) {
      return { success: false, message: 'Account already exists' };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Automatically log in after signup
    const sessionUser = { email };
    setUser(sessionUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
    
    return { success: true, message: 'Account created successfully' };
  };

  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const sessionUser = { email: foundUser.email };
      setUser(sessionUser);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
      return { success: true, message: 'Logged in successfully' };
    }

    const emailExists = users.find((u: any) => u.email === email);
    if (!emailExists) {
      return { success: false, message: 'Account does not exist. Please signup first.' };
    }

    return { success: false, message: 'Invalid password' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          <p className="text-primary font-bold animate-pulse text-xl">sigmaGO</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
