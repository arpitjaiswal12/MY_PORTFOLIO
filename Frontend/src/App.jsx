import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/ContactMe/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
