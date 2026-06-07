import Nav from './components/Nav';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Clients />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
