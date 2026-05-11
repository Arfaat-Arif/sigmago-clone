import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

interface User {
  email: string;
}

interface StoredUser extends User {
  password?: string;
}

const USERS_KEY = 'sigmago_users';
const CURRENT_USER_KEY = 'sigmago_current_user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const signup = (email: string, password: string) => {
    try {
      const users: StoredUser[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const exists = users.find((u) => u.email === email);
      
      if (exists) {
        return { success: false, message: 'Account already exists' };
      }

      const newUser: StoredUser = { email, password };
      users.push(newUser);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      
      const sessionUser = { email };
      setUser(sessionUser);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
      
      return { success: true, message: 'Account created successfully' };
    } catch (err) {
      console.error('Signup error:', err);
      return { success: false, message: 'An error occurred during signup. Please try again.' };
    }
  };

  const login = (email: string, password: string) => {
    try {
      const users: StoredUser[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const foundUser = users.find((u) => u.email === email && u.password === password);

      if (foundUser) {
        const sessionUser = { email: foundUser.email };
        setUser(sessionUser);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
        return { success: true, message: 'Logged in successfully' };
      }

      const emailExists = users.find((u) => u.email === email);
      if (!emailExists) {
        return { success: false, message: 'Account does not exist. Please signup first.' };
      }

      return { success: false, message: 'Invalid password' };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, message: 'An error occurred during login. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
