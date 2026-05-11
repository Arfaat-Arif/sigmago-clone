import { createContext } from 'react';

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

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
