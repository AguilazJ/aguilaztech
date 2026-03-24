/* 
  DESIGN: "Confianza Profesional Moderna"
  CTA final + Footer con información de contacto
*/
import { MessageCircle, MapPin, Monitor } from "lucide-react";

const WA_NUMBER = "TU_NUMERO_WHATSAPP";
const WA_MSG_PRESUPUESTO = encodeURIComponent("Hola! Quiero solicitar un presupuesto para mi PC.");

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663469292457/ciD9eZKUmWdfMEgMDtLftP/services-bg-nGxGBNbmDbesEBQiKvsdfp.webp')`,
            backgroundSize: "cover",
          }}
        />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Sora] mb-4">
            ¿Tu PC está lenta, falla o necesitás mejorarla?
          </h2>
          <p className="text-blue-200 text-lg font-[Nunito_Sans] mb-8 max-w-xl mx-auto">
            Podés resolverlo hoy mismo. Escribime y te doy una solución rápida y sin vueltas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG_PRESUPUESTO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/30 hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp ahora
            </a>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:bg-white/10"
            >
              Solicitar presupuesto
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white font-[Sora]">TécnicoPC</span>
                <span className="block text-xs text-gray-500 font-[Nunito_Sans]">Mar del Plata</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-[Nunito_Sans]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Mar del Plata y alrededores</span>
              </div>
              <span className="hidden sm:block text-gray-600">•</span>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-600 font-[Nunito_Sans]">
              © {new Date().getFullYear()} Servicio Técnico PC MdP
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
