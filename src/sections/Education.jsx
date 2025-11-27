import "../styles/sections/Education.css";

export default function Education() {
  const certifications = [
    {
      period: "2023.03",
      name: "ITQ 아래한글 A",
    },
    {
      period: "2023.03",
      name: "ITQ 파워포인트 A",
    },
    {
      period: "2024.02",
      name: "ITQ 한글엑셀 B",
    },
  ];

  const educations = [
    {
      period: "2025.04 - 06",
      name: "공학도서관 ESG SCHOOL",
    },
    {
      period: "2025.04 - 07",
      name: "공학도서관 AI 지니어스",
    },
    {
      period: "2025.05",
      name: "한국과학창의재단 SW동행프로젝트",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="career-header">
        <h1 className="career-h1">교육 및 자격증</h1>
      </div>
      <div className="career-exp">
        <p>방학이나 휴일을 활용하여 자격증이나 수료 과정을 통해</p>
        <p> 꾸준히 실력을 쌓아가고 있습니다.</p>
      </div>
      <div style={{ height: "100px" }}></div>

      <div className="career-divider">
        <div className="career-divider-line left" />
        <p className="career-divider-label">자격증</p>
        <div className="career-divider-line right" />
      </div>

      <div className="career-list">
        {certifications.map((item, index) => (
          <div className="career-item" key={index}>
            <div className="career-period">{item.period}</div>
            <div className="career-content">
              <h3 className="career-title">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: "100px" }}></div>
      <div className="career-divider">
        <div className="career-divider-line left" />
        <p className="career-divider-label">교육 수료</p>
        <div className="career-divider-line right" />
      </div>

      <div className="career-list">
        {educations.map((item, index) => (
          <div className="career-item" key={index}>
            <div className="career-period">{item.period}</div>
            <div className="career-content">
              <h3 className="career-title">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
