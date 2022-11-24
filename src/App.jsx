import React from "react";
import "./App.css";

import {
  Header,
  Nav,
  About,
  Experience,
  Services,
  Portfolio,
  Testimonial,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
