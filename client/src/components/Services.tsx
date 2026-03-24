/* 
  DESIGN: "Confianza Profesional Moderna"
  Grid 3 columnas en desktop, con íconos y borde izquierdo azul
*/
import { useEffect, useRef, useState } from "react";

const services = [
  { icon: "🪟", title: "Instalación de Windows 10 y 11", desc: "Instalación limpia y activación del sistema operativo." },
  { icon: "📦", title: "Instalación de programas esenciales", desc: "Office, antivirus, navegadores y más según tus necesidades." },
  { icon: "🛡️", title: "Eliminación de virus", desc: "Sin pérdida de archivos. Limpieza profunda de malware y spyware." },
  { icon: "⚡", title: "Optimización de sistema", desc: "Inicio rápido y mejor rendimiento general del equipo." },
  { icon: "🔄", title: "Formateo completo", desc: "Reinstalación desde cero con respaldo de datos previo." },
  { icon: "🔧", title: "Limpieza interna (hardware)", desc: "Limpieza de polvo, pasta térmica y mantenimiento preventivo." },
  { icon: "💾", title: "Cambio e instalación de SSD", desc: "Mejora drástica de velocidad con unidades de estado sólido." },
  { icon: "🧠", title: "Ampliación de memoria RAM", desc: "Más fluidez para multitarea y programas exigentes." },
  { icon: "📶", title: "Configuración de redes y WiFi", desc: "Conexión estable, segura y optimizada para tu hogar u oficina." },
  { icon: "🖥️", title: "Armado y configuración de PC", desc: "Ensamblado profesional y puesta en marcha completa." },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex gap-4 items-start border-l-4 border-l-blue-600 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="text-2xl mt-0.5 flex-shrink-0">{service.icon}</div>
      <div>
        <h3 className="font-bold text-gray-800 text-sm leading-snug font-[Sora] mb-1">
          {service.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed font-[Nunito_Sans]">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 font-[Nunito_Sans] uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[Sora] mb-4">
            ¿Qué puedo hacer por tu equipo?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-[Nunito_Sans] text-base">
            Servicio técnico especializado en computadoras a domicilio. Soluciono problemas de lentitud, virus, errores de sistema y realizo mejoras de rendimiento.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
