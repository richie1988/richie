import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Projects from "./components/Pages/Projects/Projects";
import DataAnalysat from "./components/Pages/DataAnalyst/DataAnalyst";
import Education from "./components/Pages/Education/Education";
import About from "./components/Pages/About/About";
import ContactForm from "./components/Pages/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dataAnalyst" element={< DataAnalysat />} />
      </Routes>
      <Education/>
      <About/>
      <ContactForm/>
      <Footer/>
    </Router>
  );
}

export default App;
