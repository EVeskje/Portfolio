import { useTheme } from '@/hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded-full border border-slate-200/70 bg-white/60 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      🌗
    </button>
  );
}