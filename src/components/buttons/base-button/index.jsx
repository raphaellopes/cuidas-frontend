// vendors
import React from 'react';
import PropTypes from 'prop-types';

// locals
import { ButtonStyle } from './styles';

const Button = ({ children, type, ...props }) => (
  // the eslint rule bellow was disabled because a issue on eslint
  // listed on https://github.com/yannickcr/eslint-plugin-react/issues/1555
  // eslint-disable-next-line react/button-has-type
  <ButtonStyle type={type} {...props}>
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
