/* 
  DESIGN: "Confianza Profesional Moderna"
  Acordeón desplegable con transición suave
*/
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Trabajás a domicilio?",
    a: "Sí, el servicio es completamente a domicilio en Mar del Plata y alrededores. No necesitás mover tu PC ni notebook. Me presento en tu casa u oficina con todas las herramientas necesarias.",
  },
  {
    q: "¿Se pierden los archivos?",
    a: "No, en la mayoría de los casos se conservan todos tus archivos. Antes de cualquier intervención realizo un diagnóstico y te informo claramente qué se puede conservar. En casos de formateo, se hace respaldo previo.",
  },
  {
    q: "¿Cuánto tarda el servicio?",
    a: "Depende del trabajo requerido. Muchos casos como eliminación de virus, optimización o instalación de Windows se resuelven en el mismo día. Para trabajos más complejos como cambio de hardware, te informo el tiempo estimado antes de comenzar.",
  },
  {
    q: "¿Hacés mejoras de rendimiento?",
    a: "Sí, realizo mejoras de hardware como instalación de SSD (que mejora drásticamente la velocidad) y ampliación de memoria RAM. También optimizo el software para que el equipo funcione al máximo de sus capacidades.",
  },
  {
    q: "¿Cómo se cotiza el servicio?",
    a: "El precio publicado corresponde al diagnóstico básico. Una vez evaluado el problema, te doy un presupuesto claro y detallado antes de comenzar cualquier trabajo. Sin sorpresas.",
  },
  {
    q: "¿Trabajás con notebooks también?",
    a: "Sí, trabajo con equipos de escritorio y notebooks de todas las marcas: HP, Dell, Lenovo, Asus, Acer, Samsung, y más.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 font-[Sora] text-sm leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-gray-600 font-[Nunito_Sans] text-sm leading-relaxed border-t border-gray-100 pt-3">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 font-[Nunito_Sans] uppercase tracking-wider">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[Sora] mb-4">
              ¿Tenés dudas?
            </h2>
            <p className="text-gray-500 font-[Nunito_Sans]">
              Estas son las consultas más comunes. Si tu pregunta no está aquí, escribime por WhatsApp.
            </p>
          </div>

          {/* FAQ list */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
