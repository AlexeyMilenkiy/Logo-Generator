import React from "react";

import "./style.scss";

export default function ColorsContainer({setCompanyColor, colors, settedColor}) {
  return (
    <div className="ColorsContainer">
      {colors.map((item, i) => {
        return (
          <div
            className={`ColorsContainer-item${
              settedColor === item ? " active" : ""
            }`}
            style={{ backgroundColor: item }}
            onClick={() => {
              setCompanyColor(item);
            }}
            key={item}
          ></div>
        );
      })}
    </div>
  );
}

