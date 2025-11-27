// TripleLogo.jsx
import React from "react";
import "./NameLogo.css";

const NameLogo = () => {
  return (
    <div className="logo-row">
      {/* 왼쪽 동그라미 */}
      <div className="logo-icon icon-1">
        <div className="icon-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle
              cx="35"
              cy="35"
              r="20.6"
              stroke="#4682A9"
              strokeWidth="28.8"
            />
          </svg>
        </div>
      </div>

      {/* 가운데 V 모양 */}
      <div className="logo-icon icon-2">
        <div className="icon-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="60"
            viewBox="0 0 69 60"
            fill="none"
          >
            <path
              d="M14.4023 44.9999L34.4023 14.3999L54.4023 44.9999"
              stroke="#91C8E4"
              strokeWidth="28.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0.4 0.4"
            />
          </svg>
        </div>
      </div>

      {/* 오른쪽 동그라미 */}
      <div className="logo-icon icon-3">
        <div className="icon-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle
              cx="35"
              cy="35"
              r="20.6"
              stroke="#4682A9"
              strokeWidth="28.8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NameLogo;
