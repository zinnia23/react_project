
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Pagenotfound from "./pages/Pagenotfound";
import About from "./pages/About";
import Layout from "./components/Layout/Layout";

require('events').EventEmitter.defaultMaxListeners = 15;
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
