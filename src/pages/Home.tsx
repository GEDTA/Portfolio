import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe2, 
  Code2, 
  Brain, 
  Languages, 
  GraduationCap, 
  Briefcase, 
  Heart,
  Star,
  Award,
  Cpu,
  Users,
  Sparkles,
  Coffee
} from 'lucide-react';

const skills = [
  { name: 'PHP', level: 90 },
  { name: 'TypeScript / JavaScript', level: 88 },
  { name: 'SQL / NoSQL (MySQL, PostgreSQL, MongoDB)', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Vue & Svelte', level: 70 },
  { name: 'Python (Flask, Django)', level:60 },
  { name: 'Autres bases en Informatique', level:40 },
];

const experiences = [
  {
    title: 'Développeur',
    company: 'FMC-ActioN',
    period: 'Septembre 2022 - Aujourd\'hui',
    description: 'Développement et migration de solutions en PHP, JavaScript, SCSS. Conception d\'outils internes pour les salariés. Création d\'espaces personnels pour stagiaires et salariés.',
  },
  {
    title: 'Cybersécurité & Développement (Stage)',
    company: 'Epita école d’ingénieur',
    period: 'Janvier 2022 - Février 2022',
    description: 'Réalisation d\'un CTF en cybersécurité sur le thème médical avec Python et Flask. Sensibilisation à la cybersécurité.',
  },
  {
    title: 'Développeur Web (Stage)',
    company: 'Alsace Navette',
    period: 'Mai 2021',
    description: 'Création et maintenance de sites web avec Symfony, WordPress et Drupal.',
  },
];

const education = [

  {
    degree: 'Ingénieur Informatique',
    school: 'CNAM Grand Est',
    year: 'Obtention prévue en 2025',
    description: 'Cours du soir en ingénierie, gestion de projet et droit. Autodidacte en Svelte.js et Vue.js.',
  },
  {
    degree: 'M2 Manager en Ingénierie Informatique',
    school: 'CCI Campus',
    year: '2023 - 2025 (en cours)',
    description: 'Alternance : Développement en Java, C#, PHP, et JavaScript. Utilisation de frameworks modernes comme Laravel, Next.js et React. Expérience en DevOps avec AWS et Azure.',
  },
  {
    degree: 'Licence Générale Informatique',
    school: 'CNAM Grand Est',
    year: '2022 - 2023',
    description: 'Formation en alternance, développement logiciel et web.',
  },
  {
    degree: 'BTS SIO (SLAM)',
    school: 'Lycée des Métiers Renée Cassin',
    year: '2020 - 2022',
  },
];

const Projs = [
  {
    name: 'Ged\'Tech',
    year: 'À venir',
    issuer: 'Auto-entreprise',
  },
  {
    name: 'Projet fil rouge : Aborganizr (mobile & web)',
    year: '2024',
    issuer: 'CCI Campus',
  },

];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <main className="main-scroll">
        <section className="px-6  container mx-auto py-24 min-h-screen relative z-10  content-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold mb-4 text-white">Tayyip GEDIK</h1>
            <h2 className="text-3xl mb-6 text-blue-400">Développeur</h2>
            <p className="text-xl text-gray-300">
              Passionné par la création d'applications web et mobiles modernes.
            </p>
            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/GEDTA"
                className="p-2 text-white hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/tayyip-gedik-0b40911b2/"
                className="p-2 text-white hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:portfoliotayyipgedik@gmail.com"
                className="p-2 text-white hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </section>


        <div className={'py-16 px-6  container mx-auto'}>
        {/* À propos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <Code2 className="text-blue-400" />
            À propos
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 text-white">
            <p className="text-lg leading-relaxed">
              Développeur passionné compétent en PHP, Java/TypeScript, et frameworks modernes comme React
              et Laravel.
              Expériences diversifiée en alternance et stages, j'ai contribué au développement de solutions
              web, à la migration, et à la création d'outils internes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <Coffee className="text-blue-400" size={24}/>
                <div>
                  <h3 className="font-semibold">500+</h3>
                  <p className="text-sm text-gray-300">Tasses de café</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-semibold">3+</h3>
                  <p className="text-sm text-gray-300">Années d'expérience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="text-blue-400" size={24}/>
                <div>
                  <h3 className="font-semibold">6+</h3>
                  <p className="text-sm text-gray-300">Projets académiques</p>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* Compétences */}
        <motion.section
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <Brain className="text-blue-400" />
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-blue-400 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Expérience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <Briefcase className="text-blue-400" />
            Expérience Professionnelle
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-300">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Formation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <GraduationCap className="text-blue-400" />
            Formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-blue-400">{edu.school}</p>
                <p className="text-gray-300 mt-2">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projets phares */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <Award className="text-blue-400" />
            Projets phares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Projs.map((proj, index) => (
                <motion.div
                    key={proj.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-blue-400">{proj.issuer}</p>
                  <p className="text-gray-300 mt-2">{proj.year}</p>
                  {proj.name === 'Projet fil rouge : Aborganizr (mobile & web)' && (
                      <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href="https://github.com/aborganizr"
                          className="p-2 text-white hover:text-blue-400 transition-colors"
                      >
                        <Github size={24} />
                      </motion.a>
                  )}
                </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Langues */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <Languages className="text-blue-400" />
            Langues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">Français</h3>
              <p className="text-blue-400">Langue maternelle</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">Anglais</h3>
              <p className="text-blue-400">Professionnel</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">Turc</h3>
              <p className="text-blue-400">Courant</p>
            </motion.div>
          </div>
        </motion.section>
        </div>
      </main>
    </div>
  );
}