import React, { useState, useEffect } from "react";
import { siteConfig } from "../../config/site.config";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

interface WhatsAppFloatingButtonProps {
  message?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  message,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const waMessage = message || siteConfig.whatsappMessages.default;
  const waUrl = siteConfig.contact.whatsappUrl(waMessage);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end animate-in fade-in slide-in-from-bottom-5 duration-500">
      {/* Tooltip */}
      <div className="bg-white px-4 py-2 rounded-2xl shadow-lg border border-neutral-100 mb-3 relative max-w-[200px] text-center hidden md:block">
        <p className="text-sm font-body text-neutral-600">
          Ada pertanyaan? Chat dengan tim kami sekarang.
        </p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-neutral-100 transform rotate-45"></div>
      </div>

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat via WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 relative z-10" />
        <span className="sr-only">Chat WhatsApp</span>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      </a>
    </div>
  );
};
