import React from "react";
import Navbar from "./components/Navbar";

import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import HomePage from "./pages/HomePage";
import SkillPage from "./pages/SkillPage";
import Projects from "./components/Project";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer/>
      {/* <Contact/> */}
      
     

    </div>
  );
};

export default App;
