/* 
  DESIGN: "Confianza Profesional Moderna"
  Header sticky con logo + botón WhatsApp visible
*/
import { Monitor, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const WA_NUMBER = "+5491154668178";
const WA_MSG = encodeURIComponent("Hola! Quiero consultar sobre el servicio técnico de PC.");

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center shadow-sm group-hover:bg-blue-800 transition-colors">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold text-blue-700 font-[Sora]">Aguila Tech</span>
              <span className="block text-[10px] text-gray-500 font-[Nunito_Sans] leading-none">Mar del Plata</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
