import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";

function App() {
  useEffect(() => {
    document.title = "ERPInova";
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
