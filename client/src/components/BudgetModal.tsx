/* 
  DESIGN: "Confianza Profesional Moderna"
  Modal con formulario de presupuesto o enlace a WhatsApp
*/
import { X, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const WA_NUMBER = "TU_NUMERO_WHATSAPP";

interface BudgetModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BudgetModal({ open, onClose }: BudgetModalProps) {
  const [form, setForm] = useState({ nombre: "", telefono: "", consulta: "" });
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola! Soy ${form.nombre}.\nTeléfono: ${form.telefono}\nConsulta: ${form.consulta}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ nombre: "", telefono: "", consulta: "" });
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <Send className="w-6 h-6 text-blue-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 font-[Sora] mb-1">
            Solicitar presupuesto
          </h2>
          <p className="text-gray-500 text-sm font-[Nunito_Sans]">
            Completá el formulario y te respondo por WhatsApp a la brevedad.
          </p>
        </div>

        {sent ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-gray-700 font-semibold font-[Sora]">¡Mensaje enviado!</p>
            <p className="text-gray-500 text-sm font-[Nunito_Sans] mt-1">Te redirigimos a WhatsApp...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-[Nunito_Sans]">
                Tu nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Ej: Juan García"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-[Nunito_Sans] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-[Nunito_Sans]">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                placeholder="Ej: 223 4567890"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-[Nunito_Sans] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-[Nunito_Sans]">
                ¿Qué problema tiene tu equipo? *
              </label>
              <textarea
                name="consulta"
                value={form.consulta}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Ej: Mi PC está muy lenta, tarda mucho en iniciar..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-[Nunito_Sans] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold text-base py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar por WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 font-[Nunito_Sans]">
              Al enviar, se abrirá WhatsApp con tu mensaje listo.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
