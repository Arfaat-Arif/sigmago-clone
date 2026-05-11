import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import CareersPage from '@/pages/Careers';
import ContactPage from '@/pages/Contact';
import LoginPage from '@/pages/Login';
import NotFoundPage from '@/pages/NotFound';
import { ROUTES } from '@/config/routes';
import { AuthProvider } from '@/context/AuthProvider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<LoginPage />} />
          
          <Route path={ROUTES.HOME} element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.ABOUT} element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.CAREERS} element={
            <ProtectedRoute>
              <CareersPage />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.CONTACT} element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;