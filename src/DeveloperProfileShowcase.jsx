import React, { useState } from 'react';

/**
 * DeveloperProfileShowcase
 * 
 * Interactive, dark-cinematic developer portfolio showcase component.
 * Built with React, Tailwind CSS, and SVG iconography.
 * 
 * Target Engineer: Mani Nakka (Software Engineer | Backend Developer)
 * Live Portfolio: https://nmanikumar.netlify.app
 */

export default function DeveloperProfileShowcase() {
  const [activeTab, setActiveTab] = useState('all');

  const coreTechnologies = [
    { name: 'Python', category: 'Backend', color: '#3776AB', level: 'Primary' },
    { name: 'Django', category: 'Backend', color: '#092E20', level: 'Primary' },
    { name: 'Django REST Framework', category: 'Backend', color: '#A30000', level: 'Primary' },
    { name: 'PostgreSQL', category: 'Database', color: '#4169E1', level: 'Primary' },
    { name: 'AWS (EC2, S3, IAM)', category: 'Cloud', color: '#FF9900', level: 'Primary' },
    { name: 'Docker', category: 'DevOps', color: '#2496ED', level: 'Primary' },
    { name: 'Pytest', category: 'Testing', color: '#0A9EDC', level: 'Primary' },
    { name: 'Redis', category: 'Database', color: '#DC382D', level: 'Cache & Queue' },
    { name: 'Linux & Bash', category: 'DevOps', color: '#FCC624', level: 'System' },
    { name: 'Flask', category: 'Backend', color: '#000000', level: 'Secondary' },
  ];

  const featuredProjects = [
    {
      id: 'healthcare',
      title: 'Healthcare Clinical Platform & Document Pipeline',
      category: 'Healthcare',
      description: 'Backend platform engineered for clinical data processing, automated PDF report generation (ReportLab), and extraction pipelines (pdfplumber).',
      tags: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'ReportLab', 'pdfplumber'],
      status: 'Live Clinical System',
      link: 'https://nmanikumar.netlify.app',
    },
    {
      id: 'portfolio',
      title: 'Developer Portfolio & Technical Showcase',
      category: 'Web',
      description: 'Interactive portfolio platform presenting engineering trajectory, architectural studies, and telemetry.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify CI/CD'],
      status: 'Live at nmanikumar.netlify.app',
      link: 'https://nmanikumar.netlify.app',
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="w-full max-w-5xl mx-auto my-8 bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans antialiased">
      {/* Top Cybernetic Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 animate-pulse" />

      {/* Hero Header Section */}
      <div className="relative px-8 pt-10 pb-8 bg-gradient-to-b from-slate-900/80 to-slate-950 border-b border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE FOR BACKEND ROLES
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Mani Nakka
            </h1>
            <p className="text-sky-400 font-mono text-sm sm:text-base mt-1 font-semibold">
              Software Engineer <span className="text-slate-600">•</span> Backend Developer <span className="text-slate-600">•</span> Product Builder
            </p>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl leading-relaxed">
              Specializing in Python, Django, DRF, SQL, and AWS cloud workflows. Focused on practical backend architecture, API security, and production data pipelines.
            </p>
          </div>

          {/* Social Quick Action Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://nmanikumar.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-sky-400 text-xs font-semibold border border-slate-700/80 transition-all flex items-center gap-2"
            >
              <span>🌐</span> Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/manikumarnakka/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-xs font-semibold border border-blue-500/30 transition-all flex items-center gap-2"
            >
              <span>💼</span> LinkedIn
            </a>
            <a
              href="mailto:narayanamanikumar2004@gmail.com"
              className="px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold border border-red-500/30 transition-all flex items-center gap-2"
            >
              <span>✉️</span> Email
            </a>
            <a
              href="https://github.com/ManiKumar208"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition-all flex items-center gap-2"
            >
              <span>🐙</span> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Chips Bar */}
      <div className="px-8 py-6 bg-slate-950/60 border-b border-slate-800/60">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
          Primary Engineering Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {coreTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono flex items-center gap-2 text-slate-300 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
            >
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: tech.color || '#38BDF8' }}
              />
              <span className="font-medium">{tech.name}</span>
              <span className="text-[10px] text-slate-500 bg-slate-800/80 px-1.5 py-0.2 rounded">
                {tech.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Interactive Showcase */}
      <div className="px-8 py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>🚀</span> Featured Engineering Systems
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Production workflows, API integrations, and document intelligence pipelines.
            </p>
          </div>
          {/* Tab Filter */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
            {['all', 'healthcare', 'e-commerce', 'web'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-md capitalize font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-sky-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:underline"
                >
                  View System Details <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-8 py-4 bg-slate-950 border-t border-slate-800/80 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>Mani Kumar Nakka • Software Engineering Profile</span>
        <span>Built with Python • Django • SQL • React • AWS</span>
      </div>
    </div>
  );
}
