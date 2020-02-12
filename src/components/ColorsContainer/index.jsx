import React from "react";
import onClickOutside from "react-onclickoutside";

import "./style.scss";

class ColorsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeBlock: ""
    };
  }

  handleClickOutside = evt => {
    this.setState({ activeBlock: "" });
  };

  render() {
    const { setCompanyColor, colors } = this.props;
    const { activeBlock } = this.state;
    return (
      <div className="ColorsContainer">
        {colors.map((item, i) => {
          return (
            <div
              className={`ColorsContainer-item${
                activeBlock === item ? " active" : ""
              }`}
              style={{ backgroundColor: item }}
              onClick={() => {
                setCompanyColor(item);
                this.setState({ activeBlock: item });
              }}
              key={item}
            ></div>
          );
        })}
      </div>
    );
  }
}

export default onClickOutside(ColorsContainer);
