import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from 'components/atoms/Subtitle/Subtitle.styles';
const Subtitle = ({ subtitle, pageType }) => {
  return <StyledSubtitle pageType={pageType}>{subtitle}</StyledSubtitle>;
};
Subtitle.propTypes = {
  /**text in Subtitle atom*/
  subtitle: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default Subtitle;
