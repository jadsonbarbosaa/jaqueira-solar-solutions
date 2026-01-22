import { Sun, Leaf, PiggyBank, Shield, Zap, Home } from "lucide-react";

const benefits = [
  {
    icon: PiggyBank,
    title: "Economia Garantida",
    description: "Reduza sua conta de luz em até 95% e veja o retorno do investimento em poucos anos.",
  },
  {
    icon: Leaf,
    title: "Energia Limpa",
    description: "Contribua para um planeta mais sustentável utilizando energia 100% renovável.",
  },
  {
    icon: Shield,
    title: "25 Anos de Garantia",
    description: "Painéis de alta qualidade com garantia estendida para sua tranquilidade.",
  },
  {
    icon: Sun,
    title: "Valorização do Imóvel",
    description: "Imóveis com energia solar têm maior valor de mercado e vendem mais rápido.",
  },
  {
    icon: Zap,
    title: "Instalação Rápida",
    description: "Nossa equipe especializada realiza a instalação em poucos dias.",
  },
  {
    icon: Home,
    title: "Projeto Personalizado",
    description: "Cada projeto é desenvolvido de acordo com suas necessidades específicas.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Por que escolher energia solar?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Benefícios que{" "}
            <span className="text-primary">transformam</span> sua vida
          </h2>
          <p className="text-lg text-muted-foreground">
            Investir em energia solar é garantir economia, sustentabilidade e valorização do seu patrimônio.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
