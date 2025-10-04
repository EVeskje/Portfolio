export default function ProjectCard({ project, i = 0 }) {
  const { title, desc, img, tech, live, repo } = project;
  return (
    <article
      className="card overflow-hidden transition hover:-translate-y-0.5 reveal"
      style={{ transitionDelay: `${Math.min(i, 10) * 80}ms` }}
    >
      <img
        src={img}
        alt={`Screenshot of ${title}`}
        className="aspect-[16/10] w-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = '/images/projects/placeholder.jpg';
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-slate-600 dark:text-slate-300">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech?.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {live && (
            <a className="btn" href={live} target="_blank" rel="noopener">
              Live ↗
            </a>
          )}
          {repo && (
            <a className="btn" href={repo} target="_blank" rel="noopener">
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}