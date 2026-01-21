import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo className="h-10 [&_text]:fill-background [&_path]:fill-background [&_circle]:fill-secondary [&_line]:stroke-secondary" />
          
          <p className="text-background/60 text-sm text-center">
            © {currentYear} Jaqueira Energia Solar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
