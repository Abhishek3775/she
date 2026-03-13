import { Heart } from "lucide-react";

// Real high-quality lifestyle/fashion photos for Instagram grid
const imgs = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=85&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=85&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=85&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=85&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=85&fit=crop&crop=center",
];

const InstagramGrid = () => (
  <section className="py-16 bg-blush/30">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl italic text-charcoal mb-2">#SheAndShades</h2>
      <p className="font-body text-sm text-taupe mb-8">Tag us to get featured</p>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {imgs.map((src, i) => (
          <div key={i} className="relative aspect-square group overflow-hidden rounded">
            <img src={src} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Heart size={24} className="text-cream" />
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="inline-flex items-center gap-2 mt-6 font-body text-sm text-deep-rose hover:underline">
        Follow us @sheandshades
      </a>
    </div>
  </section>
);

export default InstagramGrid;
