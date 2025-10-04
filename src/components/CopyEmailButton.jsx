import { useState } from "react";

export default function CopyEmailButton({ email = "eirik.nv@hotmail.com" }) {
  const [ok, setOk] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setOk(true);
      setTimeout(() => setOk(false), 1400);
    } catch {}
  }
  return (
    <button onClick={copy} className="btn" aria-live="polite">
      Copy email
      {ok && <span className="ml-2 text-xs text-slate-500">Copied!</span>}
    </button>
  );
}