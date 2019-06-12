// vendors
import React from 'react';
import { Link } from 'react-router-dom';

// locals
import Container from '../../components/container';

const Home = () => (
  <Container>
    <p>Selecione a página que deseja visualizar:</p>
    <Link to="/agendamentos">
      Agendamentos
    </Link>
    <br />
    <Link to="/administracao">
      Administração
    </Link>
  </Container>
);

export default Home;
