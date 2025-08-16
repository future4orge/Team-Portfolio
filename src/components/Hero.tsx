import React from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const titleScale = Math.max(0.3, 1 - scrollY / 800);
  const titleY = Math.min(scrollY * 0.5, 300);
  const titleOpacity = scrollY < 600 ? Math.max(0.1, 1 - scrollY / 600) : 0;

  const scrollToTeam = () => {
    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div> */}

      {/* Dotted SVG pattern background (corrected) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%239C92AC'%20fill-opacity='0.1'%3E%3Ccircle%20cx='30'%20cy='30'%20r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] animate-pulse"></div>

      {/* Content */}
      <div className="text-center z-10">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl pb-5 font-bold 
             bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 
             bg-clip-text text-transparent transition-all duration-300 ease-out 
             leading-none"
          style={{
            transform: `scale(${titleScale}) translateY(-${titleY}px)`,
            opacity: titleOpacity,
          }}
        >
          Future Forge
        </h1>

        <p
          className="mt-6 text-xl md:text-2xl text-slate-300 transition-opacity duration-500 h-16 "
          style={{ opacity: Math.max(0, 1 - scrollY / 400) }}
        >
          Crafting Tomorrow's Solutions Today
        </p>
        <div
          className="mt-12 animate-bounce"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <button
            onClick={scrollToTeam}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
