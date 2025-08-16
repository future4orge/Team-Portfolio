import React from 'react';
import { X, Linkedin, Github, Mail } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-slate-800 rounded-2xl border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500/50 mb-6">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
            <p className="text-blue-400 font-medium text-lg">{member.role}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">About</h3>
              <p className="text-slate-300 leading-relaxed">{member.bio}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect</h3>
              <div className="flex space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};