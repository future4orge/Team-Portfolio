import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isEven: boolean;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isEven, onClick }) => {
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={onClick}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 cursor-pointer group`}
    >
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-2xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-blue-500/50 group-hover:bg-slate-800/70 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              {project.category}
            </span>
            <div className="flex space-x-2">
              {project.demoUrl && (
                <button
                  onClick={(e) => handleLinkClick(e, project.demoUrl!)}
                  className="p-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              )}
              {project.githubUrl && (
                <button
                  onClick={(e) => handleLinkClick(e, project.githubUrl!)}
                  className="p-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-slate-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};