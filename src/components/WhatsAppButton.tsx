import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const phoneNumber = '919100608695';
  const message = 'Hello Vesra! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="bg-green-500 p-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <MessageCircle size={28} className="text-white" />
      </div>
      
      {/* Tooltip */}
      <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium shadow-lg">
        Chat with us!
      </span>
    </a>
  );
}

export default WhatsAppButton;
