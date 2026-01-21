import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Olá! Gostaria de saber mais sobre energia solar." }: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse ring effect */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-pulse-ring" />
      
      <MessageCircle className="w-8 h-8 text-white fill-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
};

export default WhatsAppButton;
