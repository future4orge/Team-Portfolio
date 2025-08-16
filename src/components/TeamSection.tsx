import React from "react";
import { TeamCard } from "./TeamCard";
import { TeamMember } from "../types";

interface TeamSectionProps {
  onMemberClick: (member: TeamMember) => void;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Amit K. Mahindra",
    role: "Python Developer, AI model Arciteture and Trainer",
    image: "",
    bio: "2nd Year Btech Student speciliazing in AI and ML. Workng on few startup projects which requires AI integration.",
    skills: [
      "Python",
      "jupyter notebook",
      "AI integration",
      "AI Model Pipelines",
      "Google DialogFlow",
      "n8n AI Workflows for automation",
      "IOT integration",
      "Maya 3D Rigging and Animation",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/amit-mahindra/",
      github: "https://github.com/Amit-Mahi",
      email: "Amit.mahindra765@gmail.com",
    },
  },
  {
    id: "2",
    name: "Garvit Galhotra",
    role: "Frontend Developer | AI/ML Enthusiast | Creative Tech Explorer",
    image: "",
    bio: "I’m a 2nd-year B.Tech CSE (AI/ML) student passionate about building interactive web apps, AI-driven tools, and creative experiences. I enjoy merging frontend development with AI/ML and experimenting with design, chatbots, and animation.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Flask",
      "Python",
      "SQL",
      "NLP-Basics",
      "YOLOv8",
      "Autodesk Maya",
      "Rigging",
      "Live2D",
      "Three.js",
      "Unity-Basics",
      "GitHub",
      "SEO",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/garvit-galhotra/",
      github: "https://github.com/Garvit-Galhotra",
      email: "garvitgalhotra1905@gmail.com",
    },
  },
  {
    id: "3",
    name: "Kinshuk Dhingra",
    role: "Data Collection & Entry | Reseach & Data Preparation",
    image: "",
    bio: "2nd Year Undergraduate in AI & ML. Passionate about intelligent systems, automation, and real world AI solutions.",
    skills: [""],
    social: {
      linkedin: "https://www.linkedin.com/in/kinshuk-dhingra-62859a334/",
      github: "https://github.com/kinshukdhingra",
      email: "kinshukd60@gmail.com",
    },
  },
  {
    id: "4",
    name: "Jasleen Kaur",
    role: "Data Handler and Team Marketer",
    image: "",
    bio: "2ndYear Btech Student speciliazing in AI and ML. Works for the team to handle and process data on Ongoing projects. and also handles team's reach and marketing team in various platforms.",
    skills: [""],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "jaslinkaur2804@gmail.com",
    },
  },
  {
    id: "5",
    name: "Deepanshi",
    role: "Data Collection & Entry | Reseach & Data Preparation",
    image: "",
    bio: "DevOps engineer passionate about automation, infrastructure, and continuous integration. Ensures seamless deployment and monitoring.",
    skills: ["Python", "Data Integration", "Machine learning", "C"],
    social: {
      linkedin: "https://www.linkedin.com/in/deepanshi-deepanshi-7763ba333/",
      github: "https://github.com/Deepanshi2007",
      email: "deepanshid35@gmail.com",
    },
  },
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
