import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              ALDRIN ARGONCILLO
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-fade-in-delay">
              Workflow Automation Specialist & Project Manager
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-2">
              Passionate about streamlining processes and enhancing productivity through innovative automation solutions. Designing and implementing workflows that save time and resources, allowing teams to focus on what truly matters.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </button>
               <Link to= "/projects" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105">
                View All Projects </Link>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-white hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;