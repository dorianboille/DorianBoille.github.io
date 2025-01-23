import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PersonalProjects } from './pages/PersonalProjects';
import { ProfessionalProjects } from './pages/ProfessionalProjects';
import { Education } from './pages/Education';

// Composant pour logger les changements de route
const RouteLogger = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Current pathname:', location.pathname);
    console.log('Current search:', location.search);
    console.log('Current hash:', location.hash);
  }, [location]);
  
  return null;
};

function App() {
  const basename = import.meta.env.BASE_URL;
  console.log('BASE_URL:', basename);
  console.log('Full URL:', window.location.href);
  console.log('Environment:', import.meta.env.MODE);

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-50">
        <RouteLogger />
        <Navigation />
        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<Navigate to="/projets-personnels" replace />} />
            <Route path="/projets-personnels" element={<PersonalProjects />} />
            <Route path="/projets-professionnels" element={<ProfessionalProjects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;