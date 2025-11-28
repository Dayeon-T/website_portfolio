import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Education from "./sections/Education";
import Velog from "./sections/Velog";
import Footer from "./sections/Footer";
import ProjectDetail from "./sections/project/ProjectDetail";

import "./styles/base/global.css";

function MainPage() {
  return (
    <>
      <section id="intro" style={{ minHeight: "30vh" }}>
        <Intro />
      </section>

      <Navbar />

      <section id="skills" style={{ minHeight: "30vh" }}>
        <Skills />
      </section>

      <section id="career">
        <Career />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="velog">
        <Velog />
      </section>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
