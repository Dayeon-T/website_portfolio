// VelogItem.jsx

import "./VelogItem.css";
export default function VelogItem({
  title,
  intent, // 한 줄 설명 느낌
  period, // 날짜
  image, // 썸네일
  url, // 벨로그 원문 링크
  className, // 추가 클래스(애니메이션 등)
}) {
  return (
    <article className={`project-card${className ? " " + className : ""}`}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="project-link"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontSize: "12px",
          marginTop: "8px",
          display: "inline-block",
          minHeight: "200px",
        }}
      >
        {image ? (
          <>
            <img
              src={image}
              alt={`${title} 미리보기`}
              className="project-image"
              loading="lazy"
            />
            <h2>{title}</h2>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <p
              style={{ color: "lightgray", fontSize: "14px", margin: "8px 0" }}
            >
              {intent}
            </p>
          </>
        )}

        {/* {intent && <p style={{ color: "gray", fontSize: "14px" }}>{intent}</p>} */}
        {period && <p style={{ color: "gray", fontSize: "12px" }}>{period}</p>}
      </a>
    </article>
  );
}
