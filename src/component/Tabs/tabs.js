import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import Text from "../Text";
import { white, geyser, shuttleGray } from "../../style/color";
import { borderWidth } from "../../style/border";

const tabsStyle = {
  display: "flex",
  marginBottom: "2rem",
  padding: "1rem",
  width: "100%",
  backgroundColor: white,
  boxSizing: "border-box"
};

const Tabs = ({ title, color }) => (
  <div style={tabsStyle}>
    <Text color={color} size={"large"} weight={"bold"}>{title}</Text>
  </div>
);

Tabs.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Tabs.defaultProps = {
  title: "Header"
};

export default Tabs;
