// vendors
import React from 'react';

// locals
import BaseButton from '../base-button';

const PrimaryButton = props => (
  <BaseButton
    {...props}
    backgroundColor="primary"
    color="lightest"
  />
);

export default PrimaryButton;
