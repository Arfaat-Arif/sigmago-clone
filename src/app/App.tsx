import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import CareersPage from '@/pages/Careers';
import ContactPage from '@/pages/Contact';
import NotFoundPage from '@/pages/NotFound';
import { ROUTES } from '@/config/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CAREERS} element={<CareersPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;