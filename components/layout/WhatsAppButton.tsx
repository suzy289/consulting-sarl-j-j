"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_MESSAGE } from "@/lib/constants";

export function WhatsAppButton() {
  const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Discutons sur WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
