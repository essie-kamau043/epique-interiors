import { useReveal } from './hooks/useReveal';

import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Services       from './components/Services';
import Portfolio      from './components/Portfolio';
import CTA            from './components/CTA';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';

import './styles/globals.css';

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton phone="254700000000" />
    </>
  );
}