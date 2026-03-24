/* 
  DESIGN: "Confianza Profesional Moderna"
  Landing page completa para servicio técnico PC a domicilio en Mar del Plata
  Componentes: Header, Hero, Services, Differential, ZoneInfo, FAQ, Footer, WhatsAppButton, Chatbot, BudgetModal
*/
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differential from "@/components/Differential";
import ZoneInfo from "@/components/ZoneInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import BudgetModal from "@/components/BudgetModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenModal={() => setModalOpen(true)} />

        {/* 2. Services Grid */}
        <Services />

        {/* 3. Differential + Benefits */}
        <Differential />

        {/* 4. Zone + Important Notice */}
        <ZoneInfo />

        {/* 5. FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer + CTA */}
      <Footer onOpenModal={() => setModalOpen(true)} />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Chatbot */}
      <Chatbot />

      {/* Budget Modal */}
      <BudgetModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
