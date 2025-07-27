import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
interface PortfolioProjectsProps {
  onViewProject: () => void;
}
export function PortfolioProjects({
  onViewProject
}: PortfolioProjectsProps) {
  const projects = [{
    id: 1,
    title: 'Polished Nail Salon',
    description: 'A premium website for a luxury nail salon featuring service listings, testimonials, and online booking.',
    image: 'https://images.unsplash.com/photo-1519748771451-a94c596fad67?auto=format&fit=crop&w=800&q=80', // direct nail polish Unsplash image
    tags: ['React', 'Tailwind CSS'],
    demo: true
  }, {
    id: 2,
    title: 'Fitness Tracker App',
    description: 'A mobile-friendly web application for tracking workouts, setting fitness goals, and monitoring progress.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'TypeScript'],
    demo: false
  }, {
    id: 3,
    title: 'Restaurant Ordering System',
    description: 'An online ordering platform for a restaurant chain with menu management and order tracking.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Firebase'],
    demo: false
  }];
  return <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-24">
          {projects.map((project, index) => <div key={project.id} className="flex flex-col lg:flex-row gap-12 items-center">
              <div className={`w-full lg:w-3/5 relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white p-3 rounded-2xl overflow-hidden shadow-lg">
                  <img src={project.image} alt={project.title} className="w-full h-64 sm:h-80 object-cover rounded-xl" />
                  {project.demo && <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                      <button onClick={onViewProject} className="bg-white text-indigo-700 px-5 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-indigo-50 transition-colors">
                        View Live Demo
                        <ExternalLinkIcon className="h-5 w-5" />
                      </button>
                    </div>}
                </div>
              </div>
              <div className={`w-full lg:w-2/5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>)}
                </div>
                {project.demo ? <button onClick={onViewProject} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 group">
                    View Project Details
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button> : <span className="text-gray-400 italic">Coming soon</span>}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}