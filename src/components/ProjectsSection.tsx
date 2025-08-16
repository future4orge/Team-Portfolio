import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Intergrated Chatbot',
    description: 'An intelligent conversational AI that can understand context and provide meaningful responses across multiple domains.',
    image: 'https://pin.it/6BrJPSlZn',
    technologies: ['Python', 'Html', 'Css', 'JavaScript'],
    features: ['Real-time data processing', 'Interactive charts', 'Custom dashboards', 'Export functionality'],
    category: 'Web Application',
    demoUrl: '',
    githubUrl: ''
  },
  {
    id: '2',
    title: 'PotHole Detection System using YoloV8',
    description: '',
    image: '',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    features: ['Natural language processing', 'Multi-language support', 'Learning capabilities', 'API integration'],
    category: 'AI/ML',
    demoUrl: 'https://chatbot.example.com',
    githubUrl: 'https://github.com/futureforge/chatbot'
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Manager',
    description: 'A robust platform for managing cloud resources with automated scaling, monitoring, and cost optimization features.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    features: ['Auto-scaling', 'Cost optimization', 'Resource monitoring', 'Deployment automation'],
    category: 'DevOps',
    demoUrl: 'https://cloud.example.com',
    githubUrl: 'https://github.com/futureforge/cloud-manager'
  }
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover the innovative solutions we've built for our clients and the community
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isEven={index % 2 === 0}
              onClick={() => onProjectClick(project)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};