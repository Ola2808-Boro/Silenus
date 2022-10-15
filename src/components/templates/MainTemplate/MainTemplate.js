import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/molecules/Navbar/Navbar";
import { StyledMainTemplate } from "./MainTemplate.styles";
import Icon from "components/atoms/icon/icon.component";
import leaf from "assets/icons/leaf.svg";
const MainTemplate = ({ children, inBackground, isIdentifyPlant }) => {
  return (
    <StyledMainTemplate
      inBackground={inBackground}
      isIdentifyPlant={isIdentifyPlant}
    >
      {isIdentifyPlant && (
        <>
          <Icon icon={leaf} size="great" color="lightGreen" location={4} />
          <Icon icon={leaf} size="big" color="lightGreen" location={3} />
          <Icon icon={leaf} size="large" color="lightGreen" location={2} />
          <Icon icon={leaf} size="great" color="lightGreen" location={1} />
        </>
      )}
      {children}
      <Navbar />
    </StyledMainTemplate>
  );
};

MainTemplate.propTypes = {
  inBackground: PropTypes.bool,
};

export default MainTemplate;
