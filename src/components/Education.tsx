import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: "ATENEO DE DAVAO UNIVERSITY",
      company: "Primary Education",
      location: "Gen. Douglas MacArthur Hwy, Talomo, Davao City",
      period: "2004 - 2010"
    },
    {
      title: "HOLY CROSS OF DAVAO COLLEGE",
      company: "Secondary Education",
      location: "SOS Drive, Matina, Bajada, Davao City",
      period: "2011 - 2014"
    },
    {
      title: "UNIVERSITY OF IMMACULATE CONCEPTION",
      company: "Bachelor of Science in Computer Science",
      location: "Pichon St, Poblacion District, Davao City",
      period: "2014 - 2019"
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50" style={{ backgroundColor: '#172133' }} >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-600 font-medium mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-600">
                    <div className="flex items-center mb-1">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;