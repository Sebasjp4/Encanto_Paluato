// ========================================
// APP.TSX - Componente Principal
// ========================================

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <div className="App">
      {/* Navbar fijo en la parte superior */}
      <Navbar />

      {/* Contenido principal */}
      <main>
        {/* Hero Section - Primera sección con carrusel */}
        <HeroSection />

        {/* Placeholder para próximas secciones */}
        <div
          style={{
            minHeight: "100vh",
            padding: "100px 20px",
            textAlign: "center",
            background: "var(--fondo-crema)",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Próximas Secciones
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#666" }}>
            🏡 Historia del Destino
            <br />
            ✨ Amenidades (Bento Grid)
            <br />
            🛏️ Nuestros Refugios
            <br />
            🌿 Experiencias
            <br />
            💼 Planes
            <br />
            💬 Testimonios
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
