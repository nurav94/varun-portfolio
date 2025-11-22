// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx"; 
import Skills from "./pages/Skills.jsx";
import Frameworks from "./pages/Frameworks.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Reports from "./pages/Reports.jsx";
import Footer from "./components/Footer.jsx";

function Placeholder({ title }) {
  return (
    <div style={{ padding: "4rem 6vw", color: "#e5e7eb" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{title}</h1>
      <p>Content for this page is coming soon.</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
       {/* <div className="availability-banner">
        💼 Open to Senior QA Automation Engineer roles – Web &amp; Mobile Automation (India / Remote)
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/skills" element={<Skills />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
