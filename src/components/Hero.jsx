import { useTypedText } from "@/hooks/useTypedText.js";

export default function Hero() {
  const typed = useTypedText(
    [
      "Hi, I’m Eirik — I build clean, accessible interfaces."
   
    ],
    { typeSpeed: 26, eraseSpeed: 16, delayBetween: 1200, loop: false }
  );

  return (
    <section className="section">
      <div className="container grid items-center gap-8 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/60">
            <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true" className="opacity-70"><path fill="currentColor" d="M10 0l2.39 6.91h7.27l-5.88 4.27 2.39 6.91L10 13.82l-6.17 4.27 2.39-6.91L.34 6.91h7.27L10 0z"/></svg>
            Front-end developer
          </span>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
            {/* Animated for sighted users */}
            <span aria-hidden="true">
              {typed}
              <span className="typing-cursor" />
            </span>
            {/* Static for screen readers to avoid noisy announcements */}
            <span className="sr-only">Hi, I’m Eirik — I build clean, accessible interfaces.</span>
          </h1>

          <p className="mt-3 max-w-prose text-slate-600 dark:text-slate-300">
            Front-end developer with a focus on modern tooling (React, Vite, Tailwind) and delightful UX. I care about performance, semantics and design systems.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#projects" aria-label="See selected projects">See projects</a>
            <a className="btn" href="/cv/Eirik-Nordstrand-Veskje.pdf" target="_blank" rel="noopener" aria-label="Open CV in new tab">Download CV</a>
          </div>
        </div>

        <div className="relative place-self-center">
          <img
            className="h-auto w-[92%] max-w-sm rounded-2xl border border-slate-200/70 shadow-strong dark:border-slate-800"
            src="/images/profile.jpg"
            alt="Portrait of Eirik Nordstrand Veskje"
            width="640"
            height="800"
            loading="eager"
          />
          <div
            className="pointer-events-none absolute -bottom-3 -left-3 h-36 w-36 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%), radial-gradient(circle at 70% 70%, #a78bfa, transparent 60%)",
              opacity: 0.55
            }}
          />
        </div>
      </div>
    </section>
  );
}