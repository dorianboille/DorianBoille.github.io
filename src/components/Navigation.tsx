import React from 'react';
import { NavLink } from 'react-router-dom';
import { Briefcase, FolderGit2, GraduationCap } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navItems = [
    { to: '/projets-personnels', icon: FolderGit2, label: 'Projets Personnels' },
    { to: '/projets-professionnels', icon: Briefcase, label: 'Projets Professionnels' },
    { to: '/education', icon: GraduationCap, label: 'Formation' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`
                }
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};