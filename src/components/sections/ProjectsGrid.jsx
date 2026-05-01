import React from 'react';
import BentoCard from '../ui/BentoCard';
import { ArrowUpRight } from 'lucide-react';

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-full">
      {projects.map((project) => (
        <a 
          key={project.id} 
          href={project.link || '#'} 
          target="_blank" 
          rel="noreferrer"
          className="group block"
        >
          <BentoCard className="flex flex-col justify-between h-full hover:bg-white transition-all hover:-translate-y-1 hover:shadow-glass-hover">
            <div className="mb-4">
              {project.thumbnail && (
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              )}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-navy p-1.5 rounded-full text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{project.title}</h3>
              <p className="text-navy-dark font-semibold mb-2 text-sm">
                Role: <span className="text-slate-900 font-medium">{project.role}</span>
              </p>
              <p className="text-slate-500 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </BentoCard>
        </a>
      ))}
    </div>
  );
};

export default ProjectsGrid;