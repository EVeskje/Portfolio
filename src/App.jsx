// src/App.jsx
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Projects from '@/components/Projects.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';
import Toolbox from '@/components/Toolbox.jsx';
import { useReveal } from '@/hooks/useReveal.js';

export default function App() {
  useReveal();

  return (
    <div>
      <Header />
      <main id="main">
        <Hero />

        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-title">
              <h2 className="text-2xl font-bold">About</h2>
            </div>
            <p className="reveal max-w-prose text-slate-600 dark:text-slate-300">
              I’m a front-end developer based in Norway. Over the last years I’ve built projects that strengthened my skills in UX/UI, HTML, CSS and JavaScript — lately with a growing love for React. I aim to craft interfaces that are fast, accessible and pleasant to use.
            </p>
          </div>
        </section>

        {/* Stack (Toolbox) */}
        <section id="stack" className="section">
          <div className="container">
            <div className="section-title">
              <h2 className="text-2xl font-bold">Stack</h2>
            </div>
            <div className="reveal">
              <Toolbox />
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}