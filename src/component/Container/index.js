import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import colors from "../../style/color";

const sectionHeaderStyle = {
  display: "flex",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  flexDirection: "row",
  alignItems: "center",
  borderBottom: `${borderWidth} solid ${white}`
};

const style = calculateStyles(
  {
    default: {
      fontFamily,
      fontSize,
      fontWeight,
      color: colors[color]
    },
    bold: {
      fontWeight: fontWeightBold
    },
    thin: {
      fontWeight: fontWeightThin
    },
    extraSmall: {
      fontSize: fontSizeExtraSmall
    },
    large: {
      fontSize: fontSizeLarge
    },
    mini: {
      fontSize: fontSizeMini
    },
    small: {
      fontSize: fontSizeSmall
    }
  },
  {
    bold: weight === "bold",
    thin: weight === "thin",
    extraSmall: size === "extra-small",
    large: size === "large",
    mini: size === "mini",
    small: size === "small"
  }
);

const SectionHeader = ({ children, color }) => (
  <div style={sectionHeaderStyle}>
    {children}
  </div>
);

SectionHeader.propTypes = {
  children: PropTypes.node
};

export default SectionHeader;
