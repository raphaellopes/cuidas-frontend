// vendors
import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, ...props }) => (
  <form {...props}>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
