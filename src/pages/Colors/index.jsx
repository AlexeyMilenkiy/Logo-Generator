import React from "react";

import { COLORS } from "../../constants";
import ColorsContainer from "../../components/ColorsContainer";
import redirect from "../../utils/redirect";

import "./style.scss";

function Colors({ setCompanyColor, companyColor }) {
  const list = COLORS.map((item, i) => {
    return (
      <ColorsContainer
        setCompanyColor={setCompanyColor}
        key={i}
        colors={item}
      />
    );
  });

  return (
    <div className="Colors">
      <div className="default-container">
        <span className="default-headline">Let’s sort out the colour next</span>
        <span className="default-tagline">Choose a colour for your logo</span>
      </div>
      <div className="Colors__list">{COLORS && list}</div>
      <button
        disabled={!companyColor}
        onClick={() => {
          window.localStorage.setItem("companyColor", companyColor);
          redirect("/design");
        }}
        className="default-btn"
      >
        NEXT
      </button>
    </div>
  );
}

export default Colors;
