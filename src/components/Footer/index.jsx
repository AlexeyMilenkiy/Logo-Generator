import React from "react";
import { withRouter } from "react-router-dom";

import "./style.scss";

function Footer(props) {
  const url = props.location.pathname;
  const startFooter = (
    <span className="Footer__text">
      “Dream Big. Start Small. But most of all, Start.”
      <span className="Footer__text-regular">- Simon Sinek</span>
    </span>
  );

  const colorFooter = (
    <span className="Footer__text">
      “It’s better to make something that 100 people love than something that
      1,000 like
      <span className="Footer__text-regular"> - Paul Graham</span>
    </span>
  );

  let text;
  switch (url) {
    case "/":
      text = startFooter;
      break;
    case "/colors":
      text = colorFooter;
      break;
    default:
      text = <></>;
  }

  return <div className="Footer">{text}</div>;
}

export default withRouter(Footer);
