import Navbar from "./components/layout/Navbar/Navbar";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Education from "./sections/Education";
import Velog from "./sections/Velog";
import Footer from "./sections/Footer";

// 🔥 상세 페이지 경로 수정!!
import RogramDetail from "./sections/project/project-detail/RogramDetail";
import TaraeDetail from "./sections/project/project-detail/TaraeDetail";
import MindCommaDetail from "./sections/project/project-detail/MindCommaDetail";

import "./styles/base/global.css";

function App() {
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

export default App;
