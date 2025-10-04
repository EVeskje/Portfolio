import { projects } from '@/data/projects.js';
import ProjectCard from '@/components/ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="text-2xl font-bold">Selected projects</h2>
          <a className="btn" href="https://github.com/EVeskje" target="_blank" rel="noopener">
            More on GitHub ↗
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}