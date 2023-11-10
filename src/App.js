import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Pagenotfound from "./pages/Pagenotfound";
import About from './pages/About';
function App() {
  return (

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact Us" element={<Contact />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
