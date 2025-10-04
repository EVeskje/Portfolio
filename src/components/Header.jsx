import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle.jsx';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

function MobileMenu({ open, onClose }) {
  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop (click to close) */}
      <button
        className="fixed inset-0 z-40 bg-black/40 md:hidden"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        id="mobileMenu"
        className="fixed top-16 left-0 right-0 z-50 mx-4 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900 md:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  href={l.href}
                  onClick={onClose}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary mt-3 w-full justify-center"
            href="#projects"
            onClick={onClose}
          >
            View work
          </a>
        </nav>
      </aside>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-950/60">
      <div className="container relative flex items-center justify-between gap-3 py-3">
        <a href="#top" className="flex items-center gap-2" aria-label="Homepage">
          <img src="/images/Logo-env.png" alt="ENV logo" className="h-9 w-9 rounded-xl" />
          <span className="font-bold tracking-wide">Eirik Veskje</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a className="btn btn-primary" href="#projects">View work</a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="relative z-[60] rounded-xl border border-slate-200/70 bg-white/60 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60"
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}