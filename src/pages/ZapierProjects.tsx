import React from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util.js';

const ZapierProjects = () => {
  const projects = [
    {
      title: "Payment Status Processing and Copper CRM Update",
      description: "Automates payment event updates from Xero to Copper CRM, ensuring accurate payment tracking and timely client follow-ups.",
      image: getImageUrl('Payment Status Processing and Copper CRM Update.jpg'),
      technologies: ["Zapier", "Xero", "Copper CRM", "Webhooks"],
      demoUrl: "https://drive.google.com/file/d/1pGp6KL996wpIuXLPCgaLQzTsAeHFD7jV/view?usp=sharing",
      featured: true
    }, 
    {
      title: "Kartra Opt-in Form → CRM, Tasking, and Contact Sync",
      description: "Automatically syncs Kartra form submissions to spreadsheets, Xero, Google Contacts, and Asana for streamlined lead management and data consistency.",
      image: getImageUrl('Kartra Opt-in Form CRM, Tasking, and Contact Sync.jpg'),
      technologies: ["Zapier", "Kartra", "Google Sheets", "Xero", "Google Contacts", "Asana", "Copper CRM"],
      demoUrl: "https://drive.google.com/file/d/1QG-N6up5XfN9yGm_KUxAGdUOFSGyFHhH/view?usp=sharing",
      featured: true
    }, 
    {
      title: "Gravity Forms Submission → CRM Updates, Task Creation, and Notifications",
      description: "Instantly logs and syncs Gravity Forms submissions, assigns them to the right team members, and notifies the team.",
      image: getImageUrl('Gravity Forms Submission CRM Updates, Task Creation, and Notifications.jpg'),
      technologies: ["Zapier", "Gravity Forms", "Google Sheets", "Asana", "Keap"],
      demoUrl: "https://drive.google.com/file/d/1EOYaZ-1UqjLyd4T294BJs1ctjGi-pn81/view?usp=sharing",
      featured: true
    },
    {
      title: "Dialpad Call State Change → Copper CRM Activity Logging",
      description: "Automatically logs all employee calls in Copper CRM for accurate communication history and improved client tracking.",
      image: getImageUrl('Dialpad Call State Change Copper CRM Activity Logging.jpg'),
      technologies: ["Zapier", "Dialpad", "Copper"],
      demoUrl: "https://drive.google.com/file/d/1HiyCSj_JQPnvwz8JV5le1R0xmF_aMuz-/view?usp=sharing",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVwOzVey6XcMevohRDman3xgDFw91v8qZfw&s" alt="Make.com Logo" className="mx-auto mb-4 w-24 h-24" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Zapier Projects</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A showcase of projects built using Zapier, demonstrating various integrations and workflows.
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
                            Open Documentaion
                          </a>
                          {/* <a 
                            href={project.githubUrl}
                            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 flex-1 justify-center"
                          >
                            <Github size={18} />
                            Source Code
                          </a> */}
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
                        {/* <a 
                          href={project.githubUrl}
                          className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
                        >
                          <Github size={18} />
                          Source Code
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Other Projects</h2>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a> */}
                        {/* <a 
                          href={project.githubUrl}
                          className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a> */}
                      {/* </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ZapierProjects;