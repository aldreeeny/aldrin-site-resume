import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util.js';

const WebDevProjects = () => {
  const projects = [
    {
      title: "ServiceLite CRM",
      description: "ServiceLite CRM is a lightweight, responsive, and highly secure Customer Relationship Management application engineered specifically for service-based and field-service businesses. It eschews the bloat of traditional enterprise CRMs in favor of a streamlined, high-performance architecture. The system provides a centralized dashboard to track client profiles, manage and dispatch appointments to field staff, dynamically calculate projected and actual revenue based on a scalable service catalog, and dispatch standard operational communications seamlessly.",
      image: getImageUrl('ServiceLiteCRM.png'),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"],
      demoUrl: "https://drive.google.com/file/d/1T8CwHtAztBNOdAPGS17qLW_ZIrmTIHCS/view?usp=sharing",
      visitUrl: "https://service-lite-kgdibzg0g-aldreeenys-projects.vercel.app",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm" style={{ backgroundColor: '#172133' }}>
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            {/* Added a placeholder icon or title for Web Dev Projects */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Web Development Projects</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A showcase of web development projects highlighting responsive designs, robust architectures, and high-performance applications.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
            
            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-6 left-6 right-6 flex space-x-4">
                          <a 
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 flex-1 justify-center"
                          >
                            <ExternalLink size={18} />
                            Open Documentation
                          </a>
                          {project.visitUrl && (
                            <a 
                              href={project.visitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 flex-1 justify-center"
                            >
                              <ExternalLink size={18} />
                              Visit
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <ExternalLink size={18} />
                          Open Documentation
                        </a>
                        {project.visitUrl && (
                          <a 
                            href={project.visitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                          >
                            <ExternalLink size={18} />
                            Visit
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevProjects;
