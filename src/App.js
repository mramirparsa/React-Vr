import React from "react";

// import component
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Brands from "./Components/Brands";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      {/* <div style={{height : '2000px'}}></div> */}
    </div>
  );
}

export default App;
