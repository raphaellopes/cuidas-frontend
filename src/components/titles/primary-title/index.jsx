// vendors
import React from 'react';
import PropTypes from 'prop-types';

// locals
import { PrimaryTitleStyle } from './styles';

const PrimaryTitle = ({ children, ...props }) => (
  <PrimaryTitleStyle {...props}>
    {children}
  </PrimaryTitleStyle>
);

PrimaryTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrimaryTitle;
