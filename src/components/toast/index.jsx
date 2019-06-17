// vendors
import React from 'react';
import PropTypes from 'prop-types';

// locals
import Icon from '../icon';
import { ToastStyle, IconWrapper } from './styles';

const Toast = ({ children, onTimeout }) => {
  if (onTimeout) {
    setTimeout(onTimeout, 3000);
  }

  return (
    <ToastStyle>
      <IconWrapper>
        <Icon name="check-circle" />
      </IconWrapper>
      {children}
    </ToastStyle>
  );
};

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  onTimeout: PropTypes.func,
};

Toast.defaultProps = {
  onTimeout: undefined,
};

export default Toast;
