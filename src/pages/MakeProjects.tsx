import React from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util.js';

const MakeProjects = () => {
  const projects = [
    {
      title: "Kartra, Xero, Google Contacts, Asana Sync Automation",
      description: "This automation monitors updates in a Google Sheet contact database. When a row is updated, it searches for the corresponding lead in Kartra and updates their details. It then updates the matching contact in Xero, followed by relevant Asana tasks linked to that contact. Finally, it syncs the latest contact information to Google Contacts, ensuring all platforms stay up to date.",
      image: getImageUrl('kartra-sync.png'),
      technologies: ["Make.com", "Kartra", "Xero", "Google Contacts", "Asana", "Google Sheets"],
      demoUrl: "https://drive.google.com/file/d/1XtcN3sRc0XgJyXmKQZVzjfFFkx2cN8Wl/view?usp=sharing",
      featured: true
    },
    {
      title: "Company Field Update Automation",
      description: "This automation monitors company records for specific field updates. When conditions are met, it retrieves related company and people data, then updates associated Person, Opportunities, and Company records. Filtering ensures updates only affect records matching criteria like Region, LGA, Industry, CRE Sub Sector, and Products & Services.",
      image: getImageUrl('Company-Field-Update.png'),
      technologies: ["Make.com", "Copper"],
      demoUrl: "https://drive.google.com/file/d/1q_HBjp6fLX-mgzPUQPiqpUm4bS0tX2Nw/view?usp=sharing",
      featured: true
    },
    {
      title: "Copper to Google Drive Automation",
      description: "This automation monitors project updates and, when a specific custom field changes, automatically creates a Google Drive folder for the project. It then updates the project in Copper with a link to the new Drive folder.",
      image: getImageUrl('Copper-GoogleDrive.png'),
      technologies: ["Make.com", "Copper", "Google Drive"],
      demoUrl: "https://drive.google.com/file/d/1r7xapcugHRuhmzxSAraX1eLzKLgm2bgd/view?usp=sharing",
      featured: true
    },
    {
      title: "Harvest Leave Request",
      description: "This automation monitors Harvest time entries for leave requests, sends the details to an internal script for processing, and updates the entry to confirm the request has been received. Managers or HR are notified to manually review and approve the leave.",
      image: getImageUrl('harvest-leave-request.png'),
      technologies: ["Make.com", "Harvest"],
      demoUrl: "https://drive.google.com/file/d/1XtcN3sRc0XgJyXmKQZVzjfFFkx2cN8Wl/view?usp=sharing",
      featured: true
    },
    {
      title: "Copper to Mailchimp Automation",
      description: "This automation monitors person records for updates to a specific custom field. When triggered, it filters based on set conditions and updates Mailchimp segments by adding or removing the person, depending on whether the criteria are met.",
      image: getImageUrl('Copper-to-Mailchimp.png'),
      technologies: ["Make.com", "Copper", "Mailchimp"],
      demoUrl: "https://drive.google.com/file/d/1wVISaRnhwgwrp3M4mtFlRyZDNS_YmwVl/view?usp=sharing",
      featured: true
    },
    {
      title: "Copper to Xero invoice (Opportunity)",
      description: "This automation monitors Copper opportunities for specific custom field conditions. When triggered, it retrieves related company and person data, formats fields to meet Xero’s requirements, and checks for an existing Xero contact. It then creates an invoice (creating the contact first if needed) and updates the opportunity with the Xero invoice link.",
      image: getImageUrl('Copper-Xero.png'),
      technologies: ["Make.com", "Copper", "Xero"],
      demoUrl: "https://drive.google.com/file/d/1tWiUmMz7o04ndoZCWFZRDO8Uk1PUB27D/view?usp=sharing",
      featured: true
    },
    {
      title: "Google Forms, Copper and Google Drive Automation",
      description: "This automation triggers from a Google Form submission via webhook, formats the received JSON payload, and logs it to a separate spreadsheet. It then creates a lead in Copper with form details, assigns a follow-up task, and—based on form responses—routes the lead to the appropriate subfolder, creates the folder, and updates the lead with the folder link.",
      image: getImageUrl('forms-copper-drive.png'),
      technologies: ["Make.com", "Copper", "Google Forms", "Google Drive"],
      demoUrl: "https://drive.google.com/file/d/1licv91hKDhv72Isho8hrOcFuIhwEOVpU/view?usp=sharing",
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
            <img src="https://cdn.sendcloud.com/app-store-media/images/app-logos/37219c73-6e0f-42a2-9d96-2f8d26f6e3af.png" alt="Make.com Logo" className="mx-auto mb-4 w-24 h-24" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Make.com Projects</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A showcase of projects built using Make.com, highlighting how different apps and services can be integrated and automated with Make.com’s powerful workflow tools.
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

export default MakeProjects;