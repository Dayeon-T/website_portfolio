import profileImg from "../assets/이서영 초성.png";
import "../styles/sections/Intro.css";
import "../styles/base/global.css";
import "../styles/base/colorToken.css";
import NameLogo from "../components/branding/IntroAnimation/NameLogo";

export default function Intro() {
  return (
    <section className="intro-section">
      <NameLogo />

      <div className="intro-text">
        <h1>안녕하세요,</h1>
        <h2>프론트엔드 개발자</h2>

        <p className="intro-end">
          <span className="intro-name">이서영</span>입니다.
        </p>
      </div>

      <div className="intro-description-box">
        <span className="aline">
          "시대를 따라가는 개발자가 아닌, 시대를 이끄는 개발자"
        </span>
        <br></br>
        <p>
          <br></br>
          끊임없는 학습과 도전을 통해 변화하는 기술 트렌드에 발맞추어 나가며,
          <br></br><br></br>
          사용자 중심의 혁신적인 웹 경험을 창출하는 프론트엔드 개발자가 되고자
          합니다.
        </p>
      </div>
    </section>
  );
}
