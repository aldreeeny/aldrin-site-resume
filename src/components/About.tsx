import React from 'react';
import { Lightbulb, LibraryBig, ListCollapse, ShieldHalf, Mails, Anchor } from 'lucide-react';
import  profpic  from '../assets/IMG_1812.jpg';

const About = () => {
  const highlights = [
    {
      icon: <LibraryBig className="w-8 h-8 text-blue-600" />,
      title: "Fast Learner",
      description: "Willing to learn new technologies and adapt to changing environments quickly, ensuring I stay at the forefront of industry trends."
    },
    {
      icon: <ListCollapse className="w-8 h-8 text-emerald-600" />,
      title: "Detail Oriented",
      description: "Ensuring precision and consistency across workflows, code, and data with a strong focus on accuracy, reliability, and seamless execution."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
      title: "Problem Solver",
      description: "Approaching challenges with creative solutions and continuous learning mindset."
    },
    {
      icon: <Mails className="w-8 h-8 text-green-600" />,
      title: "Clear Communication",
      description: "Conveying complex technical concepts in a simple, concise manner to ensure alignment across teams, clients, and stakeholders."
    },
    {
      icon: <ShieldHalf className="w-8 h-8 text-blue-600" />,
      title: "Team Player",
      description: "Collaborating effectively across teams by sharing knowledge, supporting others, and contributing to a positive, solution-driven work environment."
    },
    {
      icon: <Anchor className="w-8 h-8 text-black-600" />,
      title: "Reliable",
      description: "Consistently meeting expectations with a strong sense of accountability and follow-through."
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl">
                <img src={profpic} alt="Logo" />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate Workflow Specialist with 5+ Years Experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a developer with a strong background in building custom workflow automations and streamlining business processes. My journey started with a degree in Computer Science and has evolved through years of hands-on experience helping clients improve productivity and efficiency through smart automation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I specialize in tools like Make.com, Zapier, and n8n, and work with programming languages such as JavaScript, Apps Script, and Python. I'm also experienced in React.js for frontend development. Also have Data analytics experience and have built data dashboards to help clients visualize and understand their data more effectively.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What drives me is the opportunity to collaborate with teams, design efficient systems, and implement solutions that deliver real value. I enjoy learning from others, sharing what I know, and continuously growing through each project.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;