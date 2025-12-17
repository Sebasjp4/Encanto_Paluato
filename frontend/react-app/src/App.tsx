// ========================================
// APP.TSX - Componente Principal
// ========================================

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import HistorySection, {
  historySections,
} from "./components/sections/HistorySection";
import AmenitiesSection from "./components/sections/AmenitiesSection";
import RoomsSection from "./components/sections/RoomsSection";
import ExperiencesSection from "./components/sections/ExperiencesSection";
import PlansSection from "./components/sections/PlansSection";

function App() {
  return (
    <div className="App">
      {/* Navbar fijo */}
      <Navbar />

      <main>
        {/* Hero Section - Carrusel principal */}
        <HeroSection />

        {/* Intro - Texto sobre el destino */}
        <IntroSection />

        {/* Historia - 3 secciones con colores (amarillo, azul, rojo) */}
        {historySections.map((section, index) => (
          <HistorySection
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            colorTheme={section.colorTheme}
            imageOnLeft={section.imageOnLeft}
          />
        ))}

        {/* Amenidades - Bento Grid */}
        <AmenitiesSection />

        {/* Habitaciones - Pósters flotantes */}
        <RoomsSection />

        {/* Experiencias - Actividades */}
        <ExperiencesSection />

        {/* Planes - Paquetes disponibles */}
        <PlansSection />

        {/* Placeholder para próximas secciones */}
        <div
          style={{
            minHeight: "50vh",
            padding: "100px 20px",
            textAlign: "center",
            background: "#fff",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Próximas Secciones
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#666" }}>💬 Testimonios</p>
          <br />
          <p style={{ fontSize: "1.2rem", color: "#666" }}>
            {" "}
            📍 Ubicación y Contacto
          </p>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
