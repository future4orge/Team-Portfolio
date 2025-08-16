import React from 'react';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
  onClick: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-slate-700 group-hover:ring-blue-500/50 transition-all duration-300">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-slate-400 font-medium mb-3">{member.role}</p>
        <p className="text-slate-500 text-sm line-clamp-3">{member.bio}</p>
      </div>
    </div>
  );
};