import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  usedTech: string[];
}

interface ProjectAccordionProps {
  project: Project;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const projects: Project[] = [
  {
    title: "Disposal Mail",
    description: "A temporary email service with real-time SMTP, HTTP, and WebSocket support for secure message handling.",
    image: "project1.jpg",
    link: "https://d-mail.sahilkhan.site",
    github: "https://github.com/Itxsahil/Disposal-mail-smtp-http-ws",
    usedTech: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "ReFillAI",
    description: "AI-powered tool for intelligent image resizing, conversion, and context-aware generative fill.",
    image: "project2.jpg",
    link: "https://refillai.sahilkhan.site",
    github: "https://github.com/Itxsahil/image-saas-cloudinary",
    usedTech: ["Next.js", "Cloudinary API", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Deploy",
    description: "A container-based deployment platform enabling fast and scalable application releases.",
    image: "project3.jpg",
    link: "https://example.com/project3",
    github: "https://github.com/Itxsahil/Deploy",
    usedTech: ["React", "Node.js", "MongoDB", "Docker", "AWS", "Redis", "PostgreSQL", "S3"]
  }
];

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ project, isOpen, toggleAccordion }) => (
  <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm transition-all">
    <button
      onClick={toggleAccordion}
      className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
        {project.title}
      </h3>
      {isOpen ? <ChevronUp size={20} color='white' /> : <ChevronDown size={20} color='white' />}
    </button>

    {isOpen && (
      <div className="px-6 pb-5 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-neutral-600 dark:text-neutral-300 py-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-400 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.usedTech.map((tech, idx) => (
              <span
                key={idx}
                className="text-sm px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border dark:border-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4 flex-wrap">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Globe size={16}   />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    )}
  </div>
);

export const Projects: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(()=> index === openIndex ? -1 : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-12">
        Featured Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectAccordion
            key={index}
            project={project}
            isOpen={openIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
