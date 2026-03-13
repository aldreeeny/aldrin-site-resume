import React from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util.js';

const NNProjects = () => {
  const projects = [
    {
      title: "AI Image-to-Video Automation via Telegram",
      description: "An event-driven Telegram bot pipeline that transforms a single image and caption into short AI-generated videos. It enforces strict input validation, hosts assets via CDN, performs objective multimodal image analysis, and renders videos asynchronously with controlled synchronization. Final outputs are delivered in-chat and stored with durable public URLs, ensuring safety, accessibility, and reliable execution for creative AI media workflows.",
      image: getImageUrl('AUT1.png'),
      technologies: ["n8n", "Telegram", "OpenAI (GPT-4o)", "Imagekit", "Veo3", "Gemini"],
      demoUrl: "https://drive.google.com/file/d/1_TU7lIvk5q-CUlB5ETXFiBG1pj49ZeyF/view?usp=sharing",
      featured: true
    },
    {
      title: "AI-Driven Viral VideoGeneration & Multi-Platform Publishing System",
      description: "A fully automated, multi-stage pipeline that generates and publishes short-form social media videos without human intervention. Starting from a structured input form, it transforms topics into viral concepts, cinematic prompts, and rendered video assets through sequential AI reasoning. Videos are hosted on a CDN and distributed across platforms via APIs, enabling scalable, repeatable, and time-efficient content production for creators and marketing teams.",
      image: getImageUrl('AUT2.png'),
      technologies: ["n8n", "OpenAI (GPT-4.1)", "Imagekit", "Veo3", "Gemini", "Instagram (GraphAPI)", "YouTube API", "X (Twitter) API"],
      demoUrl: "https://drive.google.com/file/d/1DsBKrWBHcg5ZFDMG4dAtrriC_iUp0mnu/view?usp=sharing",
      featured: true
    },
    {
      title: "Autonomous AI-Driven Outbound Voice Engagement & Callback Orchestration System",
      description: "A distributed, event-driven automation that fully automates outbound lead outreach, qualification, scheduling, and callbacks using an AI-powered voice agent. Built on n8n and integrated with Google Sheets, Apps Script, ElevenLabs voice APIs, and external booking services, it runs primary and secondary workflows for calls and deferred callbacks. The AI agent conducts structured conversations, adapts to responses, verifies leads, books meetings, and logs outcomes in a centralized spreadsheet, eliminating manual dialing while ensuring reliability, traceability, and conversational nuance.",
      image: getImageUrl('Aut 6.png'),
      technologies: ["n8n", "OpenAI", "Javascript", "Google Sheets", "Elevenlabs", "Google Calendar", "HTML", "Slack", "Gmail API"],
      demoUrl: "https://drive.google.com/file/d/13Wa_hdLIK2oM1a61Jo7R5fGTAeaGlO4E/view?usp=sharing",
      featured: true
    },
    {
      title: "AI-Powered Single-PageSEO Audit Automation",
      description: "A distributed, AI-assisted system that performs deterministic SEO audits of webpages by analyzing both technical structure and visible content in parallel. Using n8n orchestration, it dispatches data into separate pipelines for technical signals and semantic quality, then merges results into a standardized HTML report. Delivered automatically via email, the workflow provides precise, repeatable SEO intelligence while leaving implementation decisions to downstream teams.",
      image: getImageUrl('AUT3.png'),
      technologies: ["n8n", "OpenAI (GPT-4.1)", "SEO", "HTML", "Gmail API"],
      demoUrl: "https://drive.google.com/file/d/1Yy72OmvnLdWtFPnL8mR6VioMSc5ZxhGG/view?usp=sharing",
      featured: true
    },
    {
      title: "End-to-End AI-Orchestrated Social Media Publishing Pipeline",
      description: "A fully orchestrated, AI-assisted pipeline that manages social media content creation, validation, asset generation, publishing, and reporting. Initiated via an n8n form, it uses specialized AI agents to craft platform-specific copy, enforces human approval through structured email review, generates visual assets with AI, and publishes to Instagram and X via APIs. Results are consolidated into an HTML report, ensuring governance, auditability, and scalable content workflows.",
      image: getImageUrl('AUT4.png'),
      technologies: ["n8n", "OpenAI", "Gmail API", "Imagekit", "Instagram (GraphAPI)", "X (Twitter) API", "DALLE-3"],
      demoUrl: "https://drive.google.com/file/d/1njhnfoEIhMKVsGkk8hCwOwbxuctiTRnn/view?usp=sharing",
      featured: true
    },
    {
      title: "Automated Trend-Driven Social Media Publishing System",
      description: "A scheduled, event-driven automation that generates and distributes social media posts based on real-time Google Trends data. Using n8n orchestration, it integrates APIs for trend intelligence, language generation, and platform publishing, enforcing deterministic timing and rate-aware posting. The system eliminates manual research and posting, enabling scalable, consistent, and highly relevant social media operations for content and growth teams.",
      image: getImageUrl('AUT5.png'),
      technologies: ["n8n", "SerpAPI", "Javascript", "OpenAI (GPT-4.1)", "Facebook (GraphAPI)", "X (Twitter) API"],
      demoUrl: "https://drive.google.com/file/d/13Wa_hdLIK2oM1a61Jo7R5fGTAeaGlO4E/view?usp=sharing",
      featured: true
    }
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
            <img src="https://vectorseek.com/wp-content/uploads/2025/07/N8n-Ai-Logo-PNG-SVG-Vector.png" alt="n8n Logo" className="mx-auto mb-4 w-24 h-24" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">n8n Projects</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A showcase of projects built using n8n, highlighting how different apps and services can be integrated and automated with n8n’s powerful workflow tools.
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

export default NNProjects;