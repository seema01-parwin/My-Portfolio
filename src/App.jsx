import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Systems from "./components/Systems";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="sp-root">
      <div className="sp-grid-bg" />
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Systems />
      <Contact />
      <Footer />
    </div>
  );
}