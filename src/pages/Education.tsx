import React from 'react';
import { education } from '../data/education';

export const Education: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Formation</h1>
      <div className="space-y-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {item.title.includes('ENSEA') ? (
                    <>
                      École d\'ingénieur - <span className="text-blue-600">ENSEA</span>
                    </>
                  ) : (
                    item.title
                  )}
                </h2>
                {item.specialization && (
                  <p className="text-blue-600 mt-1">
                    {item.specialization}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-gray-600">{item.period}</p>
                <p className="text-sm text-gray-500">{item.duration}</p>
              </div>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};