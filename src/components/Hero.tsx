import { Sun, Leaf, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-secondary animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-secondary animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Sun decoration */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20">
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-sun shadow-glow animate-pulse" />
          <Sun className="absolute inset-0 m-auto w-12 h-12 md:w-16 md:h-16 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground text-sm font-medium">
              Energia limpa e sustentável
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transforme a luz do sol em{" "}
            <span className="text-gradient">economia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A Jaqueira Energia Solar oferece soluções completas em energia fotovoltaica. 
            Reduza sua conta de luz em até 95% e contribua para um futuro mais verde.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={onContactClick}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6 rounded-full shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
              onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Saiba mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Projetos realizados" },
              { value: "95%", label: "Economia na conta" },
              { value: "25", label: "Anos de garantia" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
