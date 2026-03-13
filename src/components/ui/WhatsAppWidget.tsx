import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => (
  <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20with%20my%20order" target="_blank" rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp">
    <MessageCircle size={22} className="text-cream" />
  </a>
);

export default WhatsAppWidget;
