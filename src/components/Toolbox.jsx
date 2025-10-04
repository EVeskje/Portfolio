// src/components/Toolbox.jsx
export default function Toolbox() {
  const tools = [
    { name: 'HTML5', slug: 'html5' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'React', slug: 'react' },
    { name: 'Vite', slug: 'vite' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Figma', slug: 'figma' },
    { name: 'Git', slug: 'git' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Netlify', slug: 'netlify' }
  ];

  return (
    <div className="card p-5">
      <h3 className="mb-1 text-xl font-semibold">Toolbox</h3>
      <p className="mb-3 text-slate-600 dark:text-slate-300">What I use and enjoy:</p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {tools.map((t) => (
          <li
            key={t.slug}
            className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/60 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60"
            title={t.name}
          >
            <img
              src={`https://cdn.simpleicons.org/${t.slug}`}
              alt={`${t.name} logo`}
              className="h-6 w-6 shrink-0"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-sm">{t.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}