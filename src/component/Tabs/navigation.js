import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import Text from "../Text";
import { black, white, geyser, shuttleGray, linkBlue } from "../../style/color";
import { borderWidth } from "../../style/border";
import { fontWeight, fontWeightBold } from "../../style/font";
import speed from "../../style/speed";

const styles = {
  nav: {
    backgroundColor: colors.bgPrimary,
    position: "relative",
    textAlign: "center",
    transform: "translateZ(0)",
    zIndex: zIndex.globalHeader
  },

  container: {
    borderBottom: `1px solid ${colors.borderPrimary}`,
    overflow: "hidden"
  },

  scroller: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap"
  }
};

const Navigation = props => {
  const { children, height, sticky, style, ...properties } = props;

  return (
    <nav
      className="Navigation"
      style={[styles.nav, sticky && { position: "sticky", top: 0 }, style]}
      {...properties}
    >
      <Container style={[styles.container, { height: `${height + 1}px` }]}>
        <div style={[styles.scroller, { height: `${height + 15}px` }]}>
          <div style={{ height: `${height}px` }}>
            {children}
          </div>
        </div>
      </Container>
    </nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  height: PropTypes.number,
  sticky: PropTypes.bool,
  style: propTypes.style
};

Navigation.defaultProps = {
  height: 80
};

export default radium(Navigation);
