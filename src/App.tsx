import React from 'react';
import { Code2, Database, BarChart, Globe, Mail, Github, Linkedin } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';

function App() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      githubLink: "#",
      demoLink: "#",
      tags: ["React", "Node.js", "MongoDB", "Redux"]
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing and analyzing business metrics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      githubLink: "#",
      demoLink: "#",
      tags: ["Python", "Pandas", "React", "D3.js"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      githubLink: "#",
      demoLink: "#",
      tags: ["React", "Firebase", "Material-UI"]
    }
  ];

  const skills = [
    { name: "JavaScript", description: "Modern ES6+, async/await, DOM manipulation" },
    { name: "TypeScript", description: "Type-safe development with interfaces and generics" },
    { name: "React", description: "Component lifecycle, hooks, context API" },
    { name: "Node.js", description: "RESTful APIs, Express, middleware" },
    { name: "Python", description: "Data analysis, automation, web scraping" },
    { name: "SQL", description: "Complex queries, database design, optimization" },
    { name: "Git", description: "Version control, branching strategies, collaboration" },
    { name: "AWS", description: "S3, Lambda, EC2, deployment" },
    { name: "Docker", description: "Containerization, Docker Compose, deployment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              John Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors">
                View Work
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a passionate developer fresh out of college with a strong foundation in modern web technologies. 
              I love building things that live on the internet and am constantly learning new technologies to stay 
              ahead in this ever-evolving field.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 bg-gray-700 rounded-lg">
                <Code2 className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="font-semibold">Frontend Developer</h3>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg">
                <Globe className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="font-semibold">Web Developer</h3>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg">
                <Database className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <h3 className="font-semibold">Python Developer</h3>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg">
                <BarChart className="w-8 h-8 mx-auto mb-4 text-red-400" />
                <h3 className="font-semibold">Analyst</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill.name} description={skill.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col gap-6 items-center">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-lg hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
                your.email@example.com
              </a>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;