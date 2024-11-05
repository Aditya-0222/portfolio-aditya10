import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, githubLink, demoLink, tags }: ProjectCardProps) {
  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={githubLink}
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={demoLink}
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}