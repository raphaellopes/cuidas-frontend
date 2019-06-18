// vendors
import React from 'react';
import PropTypes from 'prop-types';

// locals
import Logo from '../logo';
import { ContainerStyle, Header } from './styles';

const Container = ({ children }) => (
  <ContainerStyle>
    <Header>
      <a href="/">
        <Logo />
      </a>
    </Header>
    <div>{children}</div>
  </ContainerStyle>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
