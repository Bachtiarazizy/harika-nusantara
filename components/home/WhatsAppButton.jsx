"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+905421793483"; // Replace with actual number
  const message = "Hello! I am interested in your premium Indonesian coffee and cocoa products. Could you please provide more information?";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleClick} className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group" aria-label="Contact us on WhatsApp">
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
    </button>
  );
}
