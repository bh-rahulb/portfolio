import { useEffect } from 'react';
import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, [])
  return (
    <>
      <NavigationBar />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
