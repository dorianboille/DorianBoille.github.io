import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PersonalProjects } from './pages/PersonalProjects';
import { ProfessionalProjects } from './pages/ProfessionalProjects';
import { Education } from './pages/Education';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="py-6">
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