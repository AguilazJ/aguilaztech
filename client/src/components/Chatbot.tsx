/* 
  DESIGN: "Confianza Profesional Moderna"
  Chatbot en esquina inferior derecha con respuestas a preguntas frecuentes
*/
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";

const WA_NUMBER = "TU_NUMERO_WHATSAPP";

interface Message {
  from: "bot" | "user";
  text: string;
  time: string;
}

const quickReplies = [
  "¿Cuánto cuesta?",
  "¿Trabajás a domicilio?",
  "¿Cuánto tarda?",
  "¿Se pierden los archivos?",
  "Quiero un presupuesto",
];

const botResponses: Record<string, string> = {
  "¿Cuánto cuesta?":
    "El precio del diagnóstico básico se publica en la web. Cada trabajo se cotiza según el problema. ¡Sin sorpresas! Te doy un presupuesto claro antes de empezar. 💬",
  "¿Trabajás a domicilio?":
    "¡Sí! Trabajo a domicilio en toda Mar del Plata y alrededores. No necesitás mover tu PC. 🏠",
  "¿Cuánto tarda?":
    "Depende del trabajo. Muchos casos (virus, optimización, Windows) se resuelven el mismo día. Te informo el tiempo estimado antes de comenzar. ⏱️",
  "¿Se pierden los archivos?":
    "En la mayoría de los casos NO se pierden los archivos. Siempre hago un diagnóstico previo y te informo qué se puede conservar. 📁",
  "Quiero un presupuesto":
    "¡Perfecto! Para darte un presupuesto preciso necesito más detalles sobre tu equipo. Te paso a WhatsApp donde podemos hablar mejor. 👇",
};

function getTime() {
  return new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "¡Hola! 👋 Soy el asistente de TécnicoPC. ¿En qué puedo ayudarte hoy?",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { from: "user", text, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowQuick(false);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const response =
        botResponses[text] ||
        "Esa consulta es un poco más específica. Te recomiendo escribirme directamente por WhatsApp para darte la mejor respuesta. 😊";
      const isComplex =
        !botResponses[text] || text === "Quiero un presupuesto";

      const botMsg: Message = { from: "bot", text: response, time: getTime() };
      setMessages((prev) => [...prev, botMsg]);

      if (isComplex) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "👇 Podés escribirme directamente:",
              time: getTime(),
            },
          ]);
        }, 600);
      }
    }, 1000 + Math.random() * 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 max-w-sm shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col"
          style={{ maxHeight: "480px" }}
        >
          {/* Header */}
          <div className="bg-blue-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-400">
                <span className="text-lg">🖥️</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm font-[Sora]">TécnicoPC</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <p className="text-blue-200 text-xs font-[Nunito_Sans]">En línea</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-blue-200 hover:text-white transition-colors p-1"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm font-[Nunito_Sans] leading-relaxed ${
                    msg.from === "user"
                      ? "bg-blue-700 text-white rounded-br-sm"
                      : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                  <div className={`text-[10px] mt-1 ${msg.from === "user" ? "text-blue-200" : "text-gray-400"}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp redirect button */}
            {messages.some((m) => m.text.includes("escribirme directamente:")) && (
              <div className="flex justify-start">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola! Quiero consultar sobre el servicio técnico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Abrir WhatsApp
                </a>
              </div>
            )}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {showQuick && (
            <div className="px-3 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="flex-shrink-0 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-3 py-1.5 rounded-full border border-blue-200 transition-colors font-[Nunito_Sans]"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta..."
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm font-[Nunito_Sans] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 bg-blue-700 hover:bg-blue-800 disabled:bg-gray-200 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Enviar"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 chat-bounce"
        aria-label="Abrir chat"
      >
        {open ? (
          <ChevronDown className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        {/* Notification dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold flex items-center justify-center">
            1
          </span>
        )}
      </button>
    </>
  );
}
