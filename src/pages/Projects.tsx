import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import logo1 from '../img/Aborganizr.png';
import logo2 from '../img/Gedtech.png';

const projects = [
  {
    title: 'Ged\'tech',
    description: 'Projet en développement de micro-entreprise de services informatiques. Développement d\'applications web et mobiles sur mesure.',
    image: logo2,
    tags: ['Services informatiques', 'Développement web', 'Développement mobile','...'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Aborganizr',
    description: 'Application mobile et site web permettant de gérer ses abonnements efficacement. Développé en utilisant React native, Next.js et MongoDB.',
    image: logo1,
    tags: ['React native', 'Next.js', 'Scss', 'MongoDB'],
    github: 'https://github.com/aborganizr',
    demo: '#'
  },
  {
    title: 'Portfolio',
    description: 'Pas besoin de décrire, vous y êtes ! Développé en utilisant React, Tailwind CSS et Framer Motion.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/GEDTA/Portfolio',
    demo: '#'
  },
];

export function Projects() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Mes Projets
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.title !== 'Ged\'tech' && (
                  <>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {project.title !== 'Aborganizr' && (
                      <>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                  </>
)}
                  </>
                )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}