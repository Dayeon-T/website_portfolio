import "./ProjectDetailCard.css";
import Rogram from "../../../assets/ROGRAM.png";

export default function RogramDetail() {
  return (
    <div className="project-detail-container">
      <div className="project-detail-image-wrap">
        <img src={Rogram} alt="Rogram" className="project-detail-image" />
      </div>

      <h1 className="project-detail-title">로그램 (ROGRAM)</h1>

      <div className="project-detail-info">
        <p><strong>🎯 목표 :</strong> 교육 격차 해소 및 양질의 코딩 교육 제공</p>
        <p><strong>📅 기간 :</strong> 2025.05 (약 1개월)</p>
        <p><strong>👥 팀 구성 및 역할 :</strong> 3인 팀 / 기획 및 발표 담당</p>
      </div>

      <div className="project-detail-block">
        <h2>📌 프로젝트 목적</h2>
        <p>
          유엔 지속가능발전목표(SDGs)를 바탕으로 장소나 나이에 상관없이  
          누구나 로봇 실습을 통해 코딩을 배울 수 있는 온라인 교육 플랫폼을 구축했다.
        </p>
      </div>

      <div className="project-detail-block">
        <h2>✨ 주요 기능</h2>
        <ul>
          <li>멀티스레드 기반 핑퐁 로봇 제어</li>
          <li>센서 데이터 실시간 수집 및 반응 처리</li>
          <li>실습 예제 코드 및 테스트 환경 제공</li>
        </ul>
      </div>

      <div className="project-detail-block">
        <h2>🛠 사용 툴</h2>
        <p>React</p>
      </div>

      <div className="project-detail-block">
        <h2>💡 배운 점 및 느낀 점</h2>
        <p>
          교육 불평등을 기술로 해결할 수 있다는 가능성을 느꼈고  
          짧은 시간 동안 문제 분석–기획–발표까지 완성하며  
          팀워크와 발표력이 함께 성장한 프로젝트였다.
        </p>
      </div>

      <div className="project-detail-link">
        <a href="https://github.com/lsy090601/RoGram" target="_blank">
          🔗 GitHub 저장소 바로가기
        </a>
      </div>
    </div>
  );
}
