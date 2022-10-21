import React, { useContext } from "react";
import PropTypes, { shape } from "prop-types";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import {
  StyledPotStatus,
  StyledPotStatusInfo,
  StyledPotStatusText,
} from "./PotStatus.styles";
import { dataContext } from "providers/DataProvider";
import Icon from "components/atoms/icon/icon.component";
import Img from "components/atoms/Img/Img";
const PotStatus = ({ state, name, click }) => {
  const { potIcons } = useContext(dataContext);

  const element = (
    <StyledPotStatus onClick={click}>
      <Img size="small" url={"1"} />
      <StyledPotStatusInfo>
        <UserAccountText
          text={name}
          isHeading={true}
          isUser={true}
          color="#3AA688"
        />
        {state.map(({ src, text }, index) => {
          return (
            <StyledPotStatusText key={index}>
              <Icon icon={potIcons[src]} size="tiny" color="green" />
              <UserAccountText
                text={text}
                isHeading={false}
                isOption={true}
                color="#3AA688"
              />
            </StyledPotStatusText>
          );
        })}
      </StyledPotStatusInfo>
    </StyledPotStatus>
  );

  return element;
};

PotStatus.propTypes = {
  /**name of plant */
  name: PropTypes.string.isRequired,
  /**objct with info about plant */
  state: PropTypes.arrayOf(shape),
};

export default PotStatus;
