import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!show) return null;

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-20 z-40 w-10 h-10 bg-deep-rose/80 text-cream rounded-full flex items-center justify-center shadow-lg hover:bg-deep-rose transition-colors"
      aria-label="Back to top">
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
