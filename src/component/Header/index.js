import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { white, geyser, shuttleGray } from "../../style/color";
import { borderWidth } from "../../style/border";

const headerStyle = {
  display: "flex",
  marginBottom: "2rem",
  padding: "1rem",
  width: "100%",
  backgroundColor: white,
  borderBottom: `${borderWidth} solid ${geyser}`,
  boxSizing: "border-box"
};

const Header = ({ title, color }) => (
  <div style={headerStyle}>
    <Text color={color} size={"large"} weight={"bold"}>{title}</Text>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Header.defaultProps = {
  title: "Header"
};

export default Header;
