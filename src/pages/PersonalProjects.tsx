import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { SearchBar } from '../components/SearchBar';
import { projects } from '../data/projects';

export const PersonalProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const personalProjects = projects
    .filter((project) => project.type === 'personal')
    .filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projets Personnels</h1>
      <div className="mb-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};