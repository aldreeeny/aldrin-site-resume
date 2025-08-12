import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Make.com Projects",
      description: "A collection of automation projects built using Make.com, showcasing various integrations and workflows.",
      image: "https://images.seeklogo.com/logo-png/46/1/make-logo-png_seeklogo-464017.png",
      technologies: ["Make.com", "Automation", "Integrations", "Workflows", "APIs"],
      demoUrl: "#",
      //githubUrl: "#",
      featured: true
    },
    {
      title: "Appscript Projects",
      description: "A collection of automation projects built using Appscript, showcasing various integrations and workflows.",
      image: "https://twenty-four.io/wp-content/uploads/2024/06/Google-Apps-Script-1.png",
      technologies: ["Appscript", "Automation", "Integrations", "Workflows", "APIs"],
      demoUrl: "#",
      //githubUrl: "#",
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.demoUrl}
                        className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View Projects
                      </a>
                      {/* <a 
                        href={project.githubUrl}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a> */}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;