import { Tooltip } from "react-tooltip";
import "./SkillTooltip.css";

function SkillTooltip({ id = "skill-tooltip", placement = "bottom" }) {
  return (
    <Tooltip
      id={id}
      place={placement}
      offset={0}
      opacity={1}
      border="none"
      style={{
        background: "transparent",
        padding: 0,
        boxShadow: "none",
      }}
      render={({ content }) => (
        <div className="skill-tooltip__shell">
          <div className="skill-tooltip__glow" />
          <span className="skill-tooltip__text">{content}</span>
        </div>
      )}
      className="skill-tooltip"
    />
  );
}

export default SkillTooltip;
