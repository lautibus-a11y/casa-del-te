/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Events from "./components/Events";
import LocationAndContact from "./components/LocationAndContact";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import CartBottomBar from "./components/CartBottomBar";
import CartModal from "./components/CartModal";
import CinematicReveal from "./components/CinematicReveal";

export default function App() {
  return (
    <CartProvider>
      {/* Entry Intro Screen Loader Overlay */}
      <CinematicReveal />

      <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-olive/20 overflow-x-hidden antialiased">
        {/* Floating Zen Navbar */}
        <Navbar />

        {/* Main Structural Flow */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Story & Philosophy Section */}
          <About />

          {/* Interactive Atmospheric Gallery with Lightbox */}
          <Gallery />

          {/* Premium Leaf & Pastry Menu */}
          <Menu />

          {/* Experiences & Calendar Events */}
          <Events />

          {/* Coordinates, Hours & Direct WhatsApp Booking */}
          <LocationAndContact />
        </main>

        {/* Brand Footer */}
        <Footer />

        <CartBottomBar />
        <CartModal />
      </div>
    </CartProvider>
  );
}

