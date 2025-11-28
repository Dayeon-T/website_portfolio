import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../../data/projects.json";
import "./project-detail/ProjectDetailCard.css";

// 프로젝트 이미지 import
import Rogram from "../../assets/ROGRAM.png";
import Tr from "../../assets/tr.png";
import MindComma from "../../assets/mindcomma.png";
import EcoMong from "../../assets/ecomong.png";
import Mz from "../../assets/mz.png";
import StampMarble from "../../assets/stampmarble.png";
import M4Eat from "../../assets/m4_sam.png";
import Respeak from "../../assets/re_sam.png";
import Sra from "../../assets/sra_sam.png";
import Info from "../../assets/Frame 2.jpg";

// 기술 스택 아이콘 import
import CIcon from "../../assets/C.svg";
import CSSIcon from "../../assets/CSS.svg";
import FigmaIcon from "../../assets/Figma.svg";
import GithubIcon from "../../assets/Github-Light.svg";
import HTMLIcon from "../../assets/HTML.svg";
import JavaIcon from "../../assets/Java-Dark.svg";
import JavaScriptIcon from "../../assets/JavaScript.svg";
import PythonIcon from "../../assets/Python-Light.svg";
import ReactLightIcon from "../../assets/React-Light.svg";
import SupabaseIcon from "../../assets/Supabase-Dark.svg";
import ViteIcon from "../../assets/Vite-Light.svg";
import IllustratorIcon from "../../assets/Illustrator.svg";
import PhotoshopIcon from "../../assets/Photoshop.svg";
import FlutterIcon from "../../assets/Flutter-Light.svg";
import FastAPIIcon from "../../assets/FastAPI.svg";

// 기술 스택 아이콘 매핑
const stackIconMap = {
  React: ReactLightIcon,
  Vite: ViteIcon,
  Supabase: SupabaseIcon,
  Python: PythonIcon,
  JavaScript: JavaScriptIcon,
  Java: JavaIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  C: CIcon,
  Figma: FigmaIcon,
  Illustrator: IllustratorIcon,
  Photoshop: PhotoshopIcon,
  GitHub: GithubIcon,
  Flutter: FlutterIcon,
  FastAPI: FastAPIIcon,
};

// 프로젝트 ID별 이미지 매핑
const projectImages = {
  1: Rogram,      // 로그램
  2: null,        // 포스처온 (이미지 없음)
  3: null,        // 원터치 수납형 캐리어 (이미지 없음)
  4: Tr,          // 타래
  5: MindComma,   // MindComma
  6: EcoMong,     // EcoMong
  7: Info,        // 인포그래픽
  8: Mz,          // MZ
  9: M4Eat,       // M4Eat
  10: StampMarble, // Stamp Marble
  11: Sra,        // SRA
  12: Respeak,    // RE:Speak
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>프로젝트를 찾을 수 없습니다</h1>
        <button onClick={() => navigate(-1)} className="back-button">
          ← 뒤로 가기
        </button>
      </div>
    );
  }

  const projectImage = projectImages[project.id];

  return (
    <div className="project-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← 뒤로 가기
      </button>

      {projectImage && (
        <div className="project-detail-image-wrap">
          <img
            src={projectImage}
            alt={project.mainTitle}
            className="project-detail-image"
          />
        </div>
      )}
<div className="project-detail-title-wrap">
      <h1 className="project-detail-title">{project.mainTitle}</h1>
      <p className="project-detail-period">
           {project.period}
        </p>
        </div>
      <p className="project-detail-subtitle">{project.subTitle}</p>

      <div className="project-detail-info">
        
        <p>
          <strong>팀 구성 및 역할 :</strong> {project.role}
        </p>
      </div>

      {project.description && (
        <div className="project-detail-block">
          <h2 className="project-detail-block-title">프로젝트 목적</h2>
          <p className="project-detail-block-content">{project.description}</p>
        </div>
      )}

      {project.features && project.features.length > 0 && (
        <div className="project-detail-block">
          <h2 className="project-detail-block-title">주요 기능</h2>
          <ul className="project-detail-block-content">
            {project.features.map((feature, index) => (
              <li key={index} className="project-detail-block-content-item" >{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <div className="project-detail-block">
          <h2 className="project-detail-block-title">사용 기술</h2>
          <ul className="tech-stack-list">
            {project.techStack.map((tech, index) => {
              const iconSrc = stackIconMap[tech];
              return (
                <li key={index} className="tech-stack-item">
                  {iconSrc && (
                    <img
                      src={iconSrc}
                      alt={tech}
                      className="tech-stack-icon"
                    />
                  )}
                  {/* <span className="tech-stack-name">{tech}</span> */}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {project.learned && (
        <div className="project-detail-block">
          <h2 className="project-detail-block-title">배운 점 및 느낀 점</h2>
          <p className="project-detail-block-content">{project.learned}</p>
        </div>
      )}

      {project.gitUrl && (
        <div className="project-detail-link">
          <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
            GitHub / 사이트 바로가기
          </a>
        </div>
      )}
    </div>
  );
}

