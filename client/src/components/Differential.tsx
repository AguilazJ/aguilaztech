/* 
  DESIGN: "Confianza Profesional Moderna"
  Bloque diferencial destacado + lista de beneficios con checkmarks verdes
*/
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Mejora notable de velocidad y rendimiento",
  "Equipos más estables y seguros",
  "Atención a domicilio sin mover tu PC",
  "Diagnóstico claro antes de empezar a trabajar",
  "Soluciones adaptadas a cada equipo",
];

export default function Differential() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Differential block */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/20 relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/10 rounded-full" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-500/30 text-blue-100 text-xs font-bold px-3 py-1.5 rounded-full mb-6 font-[Nunito_Sans] uppercase tracking-wider border border-blue-400/30">
                  ⭐ Mi diferencial
                </div>
                <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed font-[Sora] mb-6">
                  "No solo reparo el problema. Optimizo el equipo para que funcione rápido y estable a largo plazo."
                </blockquote>
                <p className="text-blue-200 text-sm font-[Nunito_Sans] leading-relaxed">
                  Cada intervención incluye una revisión general del equipo para identificar problemas potenciales y asegurar un rendimiento óptimo.
                </p>
              </div>
            </div>

            {/* Image below */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469292457/ciD9eZKUmWdfMEgMDtLftP/laptop-repair-oVnDG3tEQP3ampGtFVHWCP.webp"
                alt="Instalación de SSD en laptop"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Right: Benefits */}
          <div id="beneficios">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 font-[Nunito_Sans] uppercase tracking-wider">
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[Sora] mb-6">
              ¿Por qué elegir este servicio?
            </h2>
            <p className="text-gray-500 font-[Nunito_Sans] mb-8 leading-relaxed">
              Trabajo con equipos de escritorio y notebooks, brindando soluciones personalizadas para cada caso con atención profesional y cercana.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold font-[Nunito_Sans] text-sm">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
