// vendors
import React from 'react';
import PropTypes from 'prop-types';

// locals
import { SecondaryTitleStyle } from './styles';

const SecondaryTitle = ({ children, ...props }) => (
  <SecondaryTitleStyle {...props}>
    {children}
  </SecondaryTitleStyle>
);

SecondaryTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondaryTitle;
