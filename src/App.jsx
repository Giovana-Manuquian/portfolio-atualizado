import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Cpu, Gamepad2 } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  // ###########################################
  // ########## 1. DADOS PESSOAIS ##############
  // ###########################################
  const personalInfo = {
    name: "Giovana Manuquian",
    role: "Desenvolvedora Full Stack | Java & React",
    about: "Desenvolvedora com 4 anos de estudos intensivos e base sólida em arquitetura de sistemas. Superando o desafio da primeira oportunidade com foco em código limpo, modelagem de dados e soluções escaláveis.",
    email: "gmanuquian@gmail.com",
    linkedin: "https://www.linkedin.com/in/giovana-manuquian-a4829a188/",
    github: "https://github.com/Giovana-Manuquian"
  };

  // ###########################################
  // ########## 2. DADOS DOS PROJETOS ##########
  // ###########################################
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão (Freelance)",
      category: "fullstack",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      description: "Desenvolvimento de funcionalidades para um sistema real. Foco na criação de APIs RESTful, CRUDs e integração com front-end.",
      architecture: "Modelagem MVC, autenticação via JWT, Front-end consumindo API via Axios. Uso de DTOs para comunicação segura.",
      linkRep: "#", // Coloque o link do repositório
      linkLive: "#" // Coloque o link do projeto online
    },
    {
      id: 2,
      title: "RPG Textual (Exemplo de Lógica)",
      category: "frontend",
      tech: ["JavaScript", "HTML", "CSS", "Lógica"],
      description: "Jogo interativo focado em lógica de programação e manipulação de estado complexo.",
      architecture: "Uso de máquinas de estado para gerenciar as escolhas do jogador e renderização condicional do DOM (para o React: uso de `useState` com estruturas aninhadas).",
      linkRep: "https://github.com/Giovana-Manuquian", 
      linkLive: "#"
    },
    {
      id: 3,
      title: "API de E-commerce",
      category: "backend",
      tech: ["Java", "Spring Boot", "Hibernate", "SQL"],
      description: "API robusta para gerenciar produtos, pedidos e usuários, simulando um sistema de comércio eletrônico.",
      architecture: "Arquitetura em camadas (Controller, Service, Repository), Mapeamento Objeto-Relacional (JPA/Hibernate), DTOs para transferência de dados e tratamento de exceções global.",
      linkRep: "#",
      linkLive: "#"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    // Adiciona a classe de animação 'anime-entrada' para o fade-in suave
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-purple-500 selection:text-white anime-entrada">
      
      {/* HERO SECTION */}
      <header className="container mx-auto px-6 py-24 flex flex-col items-start justify-center min-h-[80vh]">
        <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full">
          Disponível para contratação
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Olá, eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{personalInfo.name}</span>.
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 max-w-2xl">
          {personalInfo.role}
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
          {personalInfo.about}
        </p>
        
        <div className="flex gap-4">
          <a href="#contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-purple-900/50">
            Vamos conversar?
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="px-8 py-3 border border-slate-600 hover:border-purple-400 text-slate-300 hover:text-white rounded-lg transition-all flex items-center gap-2">
            <Github size={20} /> GitHub
          </a>
        </div>
      </header>

      {/* SKILLS SECTION */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Minha Stack Tecnológica</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-700/50 rounded-xl hover:-translate-y-2 transition-transform">
              <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                <Code size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Front-end</h4>
              <p className="text-slate-400">ReactJS, JavaScript (ES6+), Tailwind, CSS3, HTML5.</p>
            </div>
            
            <div className="p-6 bg-slate-700/50 rounded-xl hover:-translate-y-2 transition-transform border-b-4 border-purple-500">
              <div className="bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400">
                <Server size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Back-end (Foco)</h4>
              <p className="text-slate-400">Java, Spring Boot, Node.js, API RESTful, Integrações.</p>
            </div>

            <div className="p-6 bg-slate-700/50 rounded-xl hover:-translate-y-2 transition-transform">
              <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                <Database size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Dados & Infra</h4>
              <p className="text-slate-400">SQL (Postgres/MySQL), Git/GitHub, Modelagem de Dados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="container mx-auto px-6 py-20" id="projects">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h3 className="text-3xl font-bold">Projetos Selecionados</h3>
          
          {/* Filtros para organizar a visualização */}
          <div className="flex gap-2 mt-4 md:mt-0 bg-slate-800 p-1 rounded-lg">
            {['all', 'fullstack', 'frontend', 'backend'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                  activeTab === tab ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'Todos' : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  {project.category === 'backend' ? <Server size={20} className="text-slate-500" /> : <Gamepad2 size={20} className="text-slate-500" />}
                </div>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Área de "Arquitetura" - Seu diferencial! */}
                <div className="mb-4 bg-slate-900/50 p-3 rounded text-xs text-slate-400 border-l-2 border-purple-500">
                  <span className="font-bold text-purple-400 block mb-1">Arquitetura & Lógica:</span>
                  {project.architecture}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 text-xs rounded text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-900 border-t border-slate-700 flex justify-between">
                <a href={project.linkRep} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Github size={16} /> Repositório
                </a>
                {project.linkLive !== "#" && (
                  <a href={project.linkLive} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-gradient-to-b from-slate-900 to-purple-900/20 py-20" id="contact">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Pronta para integrar sua equipe</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Estou em busca ativa da minha primeira oportunidade oficial. 
            Tenho a base, a vontade e a lógica necessária para resolver problemas reais.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-lg transition-all border border-slate-700 text-white">
              <Mail className="text-purple-400" /> {personalInfo.email}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0077b5] hover:bg-[#006396] text-white rounded-lg text-lg transition-all">
              <Linkedin /> LinkedIn
            </a>
          </div>
          
          <footer className="mt-20 text-slate-600 text-sm">
            © {new Date().getFullYear()} Giovana Manuquian. Construído com React & Tailwind.
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;