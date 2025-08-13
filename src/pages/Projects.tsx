import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Appscript Projects",
      description: "A collection of automation projects built using Appscript, showcasing various integrations and workflows.",
      image: "https://twenty-four.io/wp-content/uploads/2024/06/Google-Apps-Script-1.png",
      technologies: ["Appscript", "Automation", "Integrations", "Workflows", "APIs"],
      demoUrl: "/AppscriptProjects",
      featured: true
    },
    {
      title: "Make.com Projects",
      description: "A collection of automation projects built using Make.com, showcasing various integrations and workflows.",
      image: "https://images.seeklogo.com/logo-png/46/1/make-logo-png_seeklogo-464017.png",
      technologies: ["Make.com", "Automation", "Integrations", "Workflows", "APIs"],
      demoUrl: "/MakeProjects",
      featured: true
    },
    {
      title: "Zapier Projects",
      description: "A collection of automation projects built using Appscript, showcasing various integrations and workflows.",
      image: "data:image/png;base64,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",
      technologies: ["Zapier", "Automation", "Integrations", "Workflows", "APIs"],
      demoUrl: "/ZapierProjects",
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A collection of projects that showcase my skills in various technologies, applications and platforms.
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
                          <Link 
                            to={project.demoUrl} 
                            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 flex-1 justify-center"
                          >
                            View All Projects
                          </Link>
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
                        <Link 
                            to={project.demoUrl} 
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                          >
                            View All Projects
                          </Link>
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

export default Projects;