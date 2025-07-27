import React from 'react';
import { CodeIcon, PaintbrushIcon, UsersIcon, LightbulbIcon } from 'lucide-react';
export function PortfolioAbout() {
  const skills = [{
    id: 1,
    name: 'Web Development',
    description: 'Building responsive websites using modern frameworks',
    icon: CodeIcon
  }, {
    id: 2,
    name: 'UI/UX Design',
    description: 'Creating intuitive interfaces focused on user experience',
    icon: PaintbrushIcon
  }, {
    id: 3,
    name: 'Client Collaboration',
    description: 'Working closely with clients to deliver exceptional results',
    icon: UsersIcon
  }, {
    id: 4,
    name: 'Creative Solutions',
    description: 'Finding innovative approaches to design challenges',
    icon: LightbulbIcon
  }];
  return <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-6 text-lg">
              I'm a web designer and developer with over 5 years of experience
              creating stunning websites and applications for businesses of all
              sizes.
            </p>
            <p className="text-gray-600 mb-8">
              My unique background combines technical expertise with design
              sensibility, allowing me to build solutions that are both
              beautiful and functional.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all">
              Let's Work Together
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl transform -rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Designer working" className="relative rounded-xl shadow-lg w-full h-auto" />
          </div>
        </div>
        <div id="skills" className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map(skill => {
            const Icon = skill.icon;
            return <div key={skill.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}