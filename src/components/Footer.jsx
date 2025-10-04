export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 text-slate-500 dark:border-slate-800">
      <div className="container flex flex-wrap items-center justify-between gap-3">
        <small>© {new Date().getFullYear()} Eirik Nordstrand Veskje</small>
        <small>Built with ♥, performance & accessibility in mind</small>
      </div>
    </footer>
  );
}
