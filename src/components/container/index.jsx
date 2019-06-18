// vendors
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// locals
import Logo from '../logo';
import { ContainerStyle, Header } from './styles';

const Container = ({ children }) => (
  <ContainerStyle>
    <Header>
      <Link to="/">
        <Logo />
      </Link>
    </Header>
    <div>{children}</div>
  </ContainerStyle>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
