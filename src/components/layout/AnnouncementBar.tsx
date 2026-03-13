import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const messages = [
  "✦ Free Shipping on orders above ₹999",
  "✦ New Arrivals Every Friday",
  "✦ Use code SHADES10 for 10% off your first order",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(() => localStorage.getItem("she-announce-dismissed") === "true");

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem("she-announce-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <div className="relative bg-deep-rose text-primary-foreground py-2 px-4 text-center font-body text-xs tracking-wide">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {messages[index]}
        </motion.span>
      </AnimatePresence>
      <button onClick={dismiss} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100" aria-label="Dismiss">
        <X size={14} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
