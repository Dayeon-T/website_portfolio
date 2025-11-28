import VelogPostsAuto from "../api/VelogPostsAuto";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Velog() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="velog" className="career-section">
      <div
        ref={headerRef}
        className={`scroll-animate ${headerVisible ? "visible" : ""}`}
      >
        <div className="career-header">
          <h1 className="career-h1">블로그</h1>
        </div>
        <div className="career-exp">
          <p>자세한 프로젝트 및 공부 내용은</p>
          <p>velog(@int_1sy)에서 확인할 수 있습니다.</p>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      <div
        ref={contentRef}
        className={`scroll-animate ${contentVisible ? "visible" : ""}`}
      >
        <VelogPostsAuto />
      </div>
    </section>
  );
}
