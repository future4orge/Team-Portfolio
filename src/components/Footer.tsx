import React from "react";
import { Zap, Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Future Forge
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              We're a passionate team of developers, designers, and innovators
              dedicated to crafting exceptional digital experiences and solving
              complex technical challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/future4orge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-white" />
              </a>
              <a
                href="#home"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
              </a>
              <a
                href="future4orge@gmail.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <nav className="space-y-3">
              <button
                onClick={scrollToTop}
                className="block text-slate-400 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block text-slate-400 hover:text-white transition-colors duration-200"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-slate-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
            </nav>
          </div>

        
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © 2025 Future Forge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
