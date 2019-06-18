// vendors
import React from 'react';
import PropTypes from 'prop-types';

// locals
import { BoxErrorStyle } from './styles';

const BoxError = ({ children }) => (
  <BoxErrorStyle>
    {children}
  </BoxErrorStyle>
);

BoxError.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BoxError;
