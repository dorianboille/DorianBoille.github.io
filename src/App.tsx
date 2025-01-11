import React, { useState, useMemo } from 'react';
import { Brain } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return projects.filter((project) => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.some(tech => tech.toLowerCase().includes(query)) ||
      project.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Portfolio de Dorian BOILLE</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ingénieur en Intelligence Artificielle
          </h2>
          <p className="text-xl text-gray-600 max-w-7xl mx-auto px-4 text-left">
          Ingénieur spécialisé en Python, Intelligence Artificielle, et Data Engineering, je maîtrise ces domaines tout en nourrissant une passion pour l'exploration de nouveaux horizons. En dehors de mes engagements professionnels, je consacre mon temps libre à des projets variés, reflétant ma capacité à relever des défis divers et apporter une perspective unique. Mon expertise couvre toutes les étapes d'un projet, de sa conception à son achèvement, en optimisant coûts et efficacité.
          </p>
        </div>

        {/* Search Section */}
        <div className="flex justify-center mb-12">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucun projet trouvé pour "{searchQuery}"</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;