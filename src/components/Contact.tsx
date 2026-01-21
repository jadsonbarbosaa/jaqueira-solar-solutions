import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  phoneNumber: string;
}

const Contact = ({ phoneNumber }: ContactProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para energia solar.")}`;

  return (
    <section id="contato" className="py-20 md:py-32 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-4">
            Entre em contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para{" "}
            <span className="text-gradient">economizar</span>?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Solicite um orçamento gratuito e descubra quanto você pode economizar com energia solar.
          </p>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar pelo WhatsApp
            </Button>
          </a>

          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-medium">Telefone</span>
              <span className="text-sm mt-1">(XX) XXXXX-XXXX</span>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-medium">E-mail</span>
              <span className="text-sm mt-1">contato@jaqueirasolar.com.br</span>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-medium">Localização</span>
              <span className="text-sm mt-1">Sua cidade, Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
