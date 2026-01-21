import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo className={`h-10 md:h-12 transition-all ${isScrolled ? "" : "[&_text]:fill-primary-foreground [&_path]:fill-primary-foreground"}`} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#beneficios"
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Benefícios
            </a>
            <a
              href="#contato"
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Contato
            </a>
            <Button
              onClick={onContactClick}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full px-6"
            >
              Orçamento Grátis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#beneficios"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-medium transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Benefícios
            </a>
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-medium transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Contato
            </a>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full w-full"
            >
              Orçamento Grátis
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
