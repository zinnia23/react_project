import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import About from "./pages/About";
import Pagenotfound from "./pages/Pagenotfound";
import OurTeam from "./pages/OurTeam";
import Layout from "./components/Layout/Layout";

require("events").EventEmitter.defaultMaxListeners = 15;
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
