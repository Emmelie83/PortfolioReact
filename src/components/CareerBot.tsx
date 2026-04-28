import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function CareerBot() {
  const [open, setOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);

    window.addEventListener("open-career-bot", handler);
    return () => window.removeEventListener("open-career-bot", handler);
  }, []);

  useEffect(() => {
    if (open) setHasOpenedOnce(true);
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="
fixed bottom-6 right-6 z-50
w-14 h-14 rounded-full
bg-[#d392a0]
flex items-center justify-center
shadow-lg
hover:scale-105 hover:shadow-xl
transition-all duration-300 ease-out
"

      >
        <MessageCircle size={24} />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sliding panel */}
    <aside
  className={`
    fixed top-0 right-0 h-full
    w-full sm:w-[420px] md:w-[520px]
    bg-[#0f0f14]
    border-l border-white/10
    z-50
    shadow-2xl
    transform transition-transform duration-500 ease-out
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#d392a0] rounded-full" />
            <p className="text-white/90 tracking-wide font-light">
  Career Assistant
</p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* iframe */}
        <div className="h-full p-4">
          <iframe
            src="https://emi83-career-conversation.hf.space"
            className="w-full h-full rounded-xl border border-white/10"
          />
        </div>
      </aside>
    </>
  );
}
