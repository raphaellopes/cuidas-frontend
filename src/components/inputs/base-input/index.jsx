// vendors
import React from 'react';
import PropTypes from 'prop-types';

// locals
import { InputStyle } from './styles';

const Input = ({ type, ...props }) => (
  <InputStyle type={type} {...props} />
);

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
