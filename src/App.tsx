import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Hero from './sections/Hero/Hero';
import Offer from './sections/Offer/Offer';
import Advantages from './sections/Advantages/Advantages';
import Process from './sections/Process/Process';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Offer />
        <Advantages />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
