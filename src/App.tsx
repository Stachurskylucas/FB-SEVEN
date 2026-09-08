import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { HomePage } from './pages/HomePage';
import { ClasesPage } from './pages/ClasesPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ContactoPage } from './pages/ContactoPage';
import { TerminosPage } from './pages/TerminosPage';
import { PrivacidadPage } from './pages/PrivacidadPage';

export function App() {
  // Bloquear clic derecho y arrastre de imágenes, logos y videos
  useEffect(() => {
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.closest('img') || target.closest('video'))) {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.closest('img') || target.closest('video'))) {
        e.preventDefault();
      }
    };

    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <BrowserRouter>
      {/* Scroll restoration helper on route and anchor transitions */}
      <ScrollToTop />

      <div className="min-h-screen bg-black text-slate-100 selection:bg-brand-neon selection:text-black font-sans antialiased flex flex-col justify-between">
        {/* Barra de progreso de scroll fija arriba de todo */}
        <ScrollProgressBar />

        {/* 1. Header with large logo, right-aligned navigation & top-right Anotarse WhatsApp button */}
        <Navbar />

        {/* 2. Dynamic Route Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clases" element={<ClasesPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/terminos" element={<TerminosPage />} />
            <Route path="/privacidad" element={<PrivacidadPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* 3. Official Brand Footer with Embedded Google Maps for the 3 Sedes */}
        <Footer />

        {/* 4. Floating WhatsApp & Scroll-To-Top Button (Bottom Right) */}
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
