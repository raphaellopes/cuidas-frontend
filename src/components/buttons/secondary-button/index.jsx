// vendors
import React from 'react';

// locals
import BaseButton from '../base-button';

const SecondaryButton = props => (
  <BaseButton
    {...props}
    backgroundColor="secondary"
    color="darkest"
  />
);

export default SecondaryButton;
