/* 
  DESIGN: "Confianza Profesional Moderna"
  Hero asimétrico: texto izquierda + imagen derecha
  Fondo con gradiente azul sutil
*/
import { MessageCircle, ChevronDown, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const WA_NUMBER = "+5491154668178";
const WA_MSG_DIAGNOSTICO = encodeURIComponent("Hola! Quiero solicitar un diagnóstico para mi PC.");

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 pt-16">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663469292457/ciD9eZKUmWdfMEgMDtLftP/services-bg-nGxGBNbmDbesEBQiKvsdfp.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-950/60 to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-16">
          {/* Left: Text Content */}
          <div className="space-y-6 fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              Mar del Plata y alrededores
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[Sora]">
              Servicio Técnico{" "}
              <span className="text-blue-400">PC y Cámaras de Seguridad</span>{" "}
              <span className="block">A Domicilio</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-blue-100/80 leading-relaxed max-w-lg font-[Nunito_Sans]">
              Reparación, optimización y actualización de PC en Mar del Plata.{" "}
              <strong className="text-white">Respuesta rápida el mismo día.</strong>
            </p>

            {/* Quick info badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                <Clock className="w-3.5 h-3.5 text-blue-300" />
                Mismo día
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                <span className="text-green-400">✓</span>
                Sin mover tu PC
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                <span className="text-green-400">✓</span>
                Diagnóstico previo
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/5491154668178?text=${WA_MSG_DIAGNOSTICO}`}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-green-500/30 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar diagnóstico por WhatsApp
              </a>
              <button
                onClick={onOpenModal}
                className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold text-base px-6 py-3.5 rounded-xl transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                Solicitar presupuesto
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl scale-110" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469292457/ciD9eZKUmWdfMEgMDtLftP/hero-tech-ZS8TQbppbRsMi8GXmmyz57.webp"
                alt="Técnico de PC trabajando a domicilio en Mar del Plata"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg object-cover border border-white/10"
                style={{ aspectRatio: "16/10" }}
              />
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-[Nunito_Sans]">Tiempo de respuesta</p>
                  <p className="text-sm font-bold text-gray-800 font-[Sora]">Mismo día</p>
                </div>
              </div>
              {/* Floating card 2 */}
              <div className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🛡️</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-[Nunito_Sans]">Archivos</p>
                  <p className="text-sm font-bold text-gray-800 font-[Sora]">Sin pérdida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs font-[Nunito_Sans]">Ver más</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
