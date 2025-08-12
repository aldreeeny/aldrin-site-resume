import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages and Frameworks",
      skills: [
        { name: "Javascript", level: 90 },
        { name: "Appscript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Html", level: 80 },
        { name: "React", level: 90 }
      ]
    },
    {
      title: "Workflow Automation Tools",
      skills: [
        { name: "Zapier", level: 95 },
        { name: "Make.com", level: 100 },
        { name: "n8n", level: 80 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Google Workspace",
      skills: [
        { name: "Google Docs (Sheets, Docs, Forms and Slides)", level: 100 },
        { name: "Google Sites", level: 95 },
        { name: "Admin Console", level: 85 },
        { name: "Google Analytics", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Looker Studio", level: 95 },
        { name: "FireBase", level: 80 },
      ]
    },
    {
      title: "Project Management and Collaboration Tools",
      skills: [
        { name: "Asana", level: 100 },
        { name: "Monday.com", level: 90 },
        { name: "ClickUp", level: 85 }
      ]
    },
    {
      title: "Customer Relationship Management (CRMs)",
      skills: [
        { name: "Keap", level: 80 },
        { name: "HubSpot", level: 85},
        { name: "Freshsales", level: 95 },
        { name: "Pipedrive", level: 80 },
        { name: "GoHighLevel", level: 95 },
        { name: "Copper", level: 100 },
        { name: "Mailchimp", level: 90 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white" style={{ backgroundColor: '#172133' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;