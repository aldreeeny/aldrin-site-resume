import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Trainee",
      company: "Callbox Inc. Davao",
      location: "Landco Building, 9th Floor, J.P. Laurel Ave, Bajada, Davao City",
      period: "Nov 2018 - Jan 2019 (3 months)",
      description: [
        "Sales support,Marketing strategy implementation and Lead generation processes",
        "Computer Networking, Technical Support, Hardware and Software Troubleshooting, Monitoring and Maintenance"
      ]
    },
    {
      title: "Graphic Artist",
      company: "3sixtyfactory",
      location: "Phase 2, Capricorn St, Dona Luisa, Davao City",
      period: "Sept 2019 - Jan 2020 (5 months)",
      description: [
          "Brand-aligned graphic designs like social media content, website banners, marketing materials",
          "Real Estate Photo Editing",
          "Adobe Photoshop, Adobe lightroom"
      ]
    },
    {
      title: "Automation Specialist & Web Developer",
      company: "itGenius - Google Cloud Experts",
      location: "Remote",
      period: "Jan 2020 - Feb 2024 (4 years 2 months)",
      description: [
          "Developed and implemented custom workflow automation scripts to streamline internal operations and improve productivity.",
          "Maintained and updated website content, ensuring functionality, mobile responsiveness, and adherence to modern web standards.",
          "Handled project-based client requests including building custom pages, forms, and integrated tools according to client specifications.",
          "Conducted website performance reviews and optimized code for speed, SEO, and user experience."
      ]
    },
    {
      title: "Project Manager",
      company: "itGenius - Google Cloud Experts",
      location: "Remote",
      period: "Feb 2024 - Mar 2025 (1 year 2 months)",
      description: [
        "Managed cross-functional teams and coordinated project deliverables from inception to completion, ensuring that milestones and deadlines were consistently met.",
        "Facilitated effective client communication, serving as the bridge between technical teams and stakeholders to clearly define requirements, manage expectations, and deliver solutions.",
        "Utilized project management tools (e.g., Asana, Trello, ClickUp) to track progress, assign tasks, and ensure smooth workflow across teams.",
        "Led regular status meetings, created documentation, and maintained transparency with all project stakeholders to support project success.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
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
                
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-3 mt-2">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;