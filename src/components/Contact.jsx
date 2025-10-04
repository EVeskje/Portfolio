export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold">Let’s talk</h2>
        <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
          Available for junior front-end roles, internships and freelance UI work. If you have an opportunity or just want to say hi, drop a message.
        </p>

        <div className="reveal card mt-4 p-4">
          <ul className="space-y-2">
            <li>
              <a href="mailto:eirik.nv@hotmail.com" className="hover:underline">
                📧 eirik.nv@hotmail.com
              </a>
            </li>
            <li>
              <a href="tel:+4795249744" className="hover:underline">
                📞 +47 952 49 744
              </a>
            </li>
          </ul>

          <div className="mt-3 flex flex-wrap gap-2">
            <a
              className="btn"
              href="https://www.linkedin.com/in/env-link/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              className="btn"
              href="https://github.com/EVeskje"
              target="_blank"
              rel="noopener"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}