import React from "react";

import "./style.scss";

const DesignMockup = React.forwardRef(({ element, bgColor }, setRef) => {
  const newComponent = element.map(({ styles, text }, i) => {
    return (
      <tspan style={styles} key={i}>
        {text}
      </tspan>
    );
  });

  const styleForText = {
    fill: "#FFFFFF",
    fontSize: "50px",
    fontFamily: "Helvetica"
  };

  return (
    <div className="DesignMockup">
      <svg
        ref={setRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 336 210"
        width="336"
        height="210"
      >
        <rect x="0" y="0" width="336" height="210" fill={bgColor} rx="24" />
        <text textAnchor="middle" x="168" y="120" style={styleForText}>
          {newComponent}
        </text>
      </svg>
    </div>
  );
});

export default DesignMockup;
