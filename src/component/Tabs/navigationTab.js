import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import Text from "../Text";
import { black, white, geyser, shuttleGray, linkBlue } from "../../style/color";
import { borderWidth } from "../../style/border";
import { fontWeight, fontWeightBold } from "../../style/font";
import speed from "../../style/speed";

const styles = Object.assign(
  {},
  {
    backgroundColor: white,
    borderBottom: `${borderWidth} solid ${geyser}`,
    color: black,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: fontWeight,
    height: "100%",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "4px", // offset border width, keep text centered
    textAlign: "center",
    transition: `border-bottom-color ${speed.fast} ease-in-out,
    color ${speed.fast} ease-in-out`,
    verticalAlign: "middle",

    ":hover": {
      color: geyser
    },

    ":active": {
      color: geyser
    },

    ":focus": {
      color: linkBlue
    }
  },
  textUppercase()
);

const NavigationTab = props => {
  const { children, onClick, active, style, ...properties } = props;

  return (
    <button
      className="NavigationTab"
      onClick={onClick}
      style={[styles, active && { borderBottomColor: linkBlue }, style]}
      {...properties}
    >
      {children}
    </button>
  );
};

NavigationTab.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  style: propTypes.style
};

export default Radium(NavigationTab);
