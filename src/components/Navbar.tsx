import React from 'react';
import { Zap } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const titleScale = Math.max(0.3, 1 - scrollY / 800);
  const titleOpacity = scrollY < 600 ? 0 : Math.min(1, (scrollY - 600) / 200);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-opacity duration-500"
              style={{ opacity: titleOpacity }}
            >
              Future Forge
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-slate-300 hover:text-white">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};