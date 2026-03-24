/* 
  DESIGN: "Confianza Profesional Moderna"
  Dos bloques lado a lado: Zona de trabajo + Aviso de precio
*/
import { MapPin, Info } from "lucide-react";

export default function ZoneInfo() {
  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Zona de trabajo */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 font-[Sora] text-lg mb-2">
                Zona de trabajo
              </h3>
              <p className="text-gray-600 font-[Nunito_Sans] text-sm leading-relaxed mb-3">
                Atiendo a domicilio en toda la ciudad y alrededores. Sin necesidad de trasladar tu equipo.
              </p>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-bold text-sm px-4 py-2 rounded-lg border border-blue-200">
                <MapPin className="w-4 h-4" />
                📍 Mar del Plata y alrededores
              </div>
            </div>
          </div>

          {/* Aviso de precio */}
          <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-6 flex gap-4 items-start hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 font-[Sora] text-lg mb-2 flex items-center gap-2">
                Información sobre precios
                <span className="bg-amber-200 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  Importante
                </span>
              </h3>
              <p className="text-gray-600 font-[Nunito_Sans] text-sm leading-relaxed">
                El precio publicado corresponde a <strong>diagnóstico básico</strong>. Cada trabajo se cotiza según el problema o mejora requerida, con presupuesto claro antes de comenzar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
