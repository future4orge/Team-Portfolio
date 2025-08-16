import  { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TeamSection } from './components/TeamSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { TeamMemberModal } from './components/TeamMemberModal';
import { ProjectModal } from './components/ProjectModal';
import { TeamMember, Project } from './types';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <TeamSection onMemberClick={setSelectedMember} />
      <ProjectsSection onProjectClick={setSelectedProject} />
      <Footer />
      
      {selectedMember && (
        <TeamMemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;