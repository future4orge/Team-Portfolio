import React from 'react';
import { TeamCard } from './TeamCard';
import { TeamMember } from '../types';

interface TeamSectionProps {
  onMemberClick: (member: TeamMember) => void;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Full-stack developer with 8+ years of experience in building scalable web applications. Passionate about clean code and modern development practices.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'alex@futureforge.dev'
    }
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Creative designer with a passion for user-centered design. Specializes in creating intuitive and beautiful digital experiences.',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
    social: {
      linkedin: 'https://linkedin.com',
      email: 'sarah@futureforge.dev'
    }
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    role: 'Backend Engineer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Backend specialist focused on building robust, scalable server-side applications and APIs. Expert in cloud architecture and DevOps.',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'michael@futureforge.dev'
    }
  },
  {
    id: '4',
    name: 'Emily Watson',
    role: 'Data Scientist',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Data scientist with expertise in machine learning and analytics. Transforms complex data into actionable insights.',
    skills: ['Python', 'TensorFlow', 'Pandas', 'SQL', 'Machine Learning'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'emily@futureforge.dev'
    }
  },
  {
    id: '5',
    name: 'David Kim',
    role: 'DevOps Engineer',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'DevOps engineer passionate about automation, infrastructure, and continuous integration. Ensures seamless deployment and monitoring.',
    skills: ['AWS', 'Jenkins', 'Terraform', 'Docker', 'Monitoring'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'david@futureforge.dev'
    }
  }
];

export const TeamSection: React.FC<TeamSectionProps> = ({ onMemberClick }) => {
  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Our Team
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Meet the talented individuals who make Future Forge possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {teamMembers.slice(0, 3).map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => onMemberClick(member)} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.slice(3).map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => onMemberClick(member)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};