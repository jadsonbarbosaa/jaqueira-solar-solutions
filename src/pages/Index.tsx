import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Substitua pelo seu número de WhatsApp (código do país + DDD + número, sem espaços ou símbolos)
const WHATSAPP_NUMBER = "5511999999999";

const Index = () => {
  const handleContactClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para energia solar.")}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen">
      <Header onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <Benefits />
      <Contact phoneNumber={WHATSAPP_NUMBER} />
      <Footer />
      <WhatsAppButton phoneNumber={WHATSAPP_NUMBER} />
    </main>
  );
};

export default Index;
