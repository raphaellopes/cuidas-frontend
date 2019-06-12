// vendors
import React from 'react';
import { Link } from 'react-router-dom';

// locals
import Container from '../../components/container';
import Icon from '../../components/icon';
import { Content, WrapLinks } from './styles';

const Home = () => (
  <Container>
    <Content>
      <p>Selecione a página que deseja visualizar:</p>

      <WrapLinks>
        <Link to="/agendamentos">
          <Icon name="calendar" />
          Agendamentos
        </Link>
        <br />
        <Link to="/administracao">
          <Icon name="user-md" />
          Administração
        </Link>
      </WrapLinks>
    </Content>
  </Container>
);

export default Home;
