import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ d: 3, h: 12, m: 45, s: 30 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => {
        let { d, h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) return { d: 0, h: 0, m: 0, s: 0 };
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 mt-4">
      {Object.entries(time).map(([label, val]) => (
        <div key={label} className="text-center">
          <div className="bg-cream/20 backdrop-blur-sm rounded px-3 py-2 font-body text-xl font-medium text-cream">{String(val).padStart(2, "0")}</div>
          <span className="font-body text-[10px] uppercase text-cream/70 mt-1 block">{label === "d" ? "Days" : label === "h" ? "Hrs" : label === "m" ? "Min" : "Sec"}</span>
        </div>
      ))}
    </div>
  );
};

const PromoBanner = () => (
  <section className="bg-gradient-to-r from-deep-rose to-dusty-rose py-12 relative overflow-hidden">
    <div className="absolute right-0 top-0 text-mauve/20 text-[200px] font-display leading-none select-none pointer-events-none">✦</div>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
      <div>
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light">Up to 50% Off</h2>
        <p className="font-body text-sm text-cream/80 mt-2 max-w-md">Limited time sale on selected styles. Refresh your wardrobe with stunning pieces at unbeatable prices.</p>
        <CountdownTimer />
      </div>
      <Link to="/shop?filter=sale" className="mt-6 md:mt-0 bg-cream text-deep-rose px-8 py-3 rounded font-body text-sm font-medium hover:bg-cream/90 transition-colors">
        Shop the Sale
      </Link>
    </div>
  </section>
);

export default PromoBanner;
