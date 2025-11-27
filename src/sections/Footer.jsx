import "../styles/sections/Footer.css";

export default function Footer() {
  return (
    <section className="footer-section">
      <p className="footer-title">
        감사합니다
        <br />
        <div className="footer-subtitle">혹시 궁금한 점이 있다면
        <br />
        편하게 연락주세요
        </div>
      </p>

      <div className="footer-card">
        <p className="footer-label">전화번호</p>
        <p className="footer-value">010.7317.3118</p>

        <p className="footer-label">이메일</p>
        <p className="footer-value">s2527@e-mirim.hs.kr</p>

        <p className="footer-label">Github</p>
        <a
          href="https://github.com/lsy090601"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          @lsy090601
        </a>

        <p className="footer-label">Velog</p>
        <a
          href="https://velog.io/@int_1sy/posts"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          @int_1sy
        </a>
      </div>
    </section>
  );
}
