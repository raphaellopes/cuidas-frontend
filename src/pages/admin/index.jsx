// vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// locals
import { Creators as AppointmentsActions } from '../../store/ducks/appointments';
import Container from '../../components/container';
import Spinner from '../../components/spinner';
import { PrimaryTitle } from '../../components/titles';
import { SecondaryButton } from '../../components/buttons';

import { List, Item, SpinnerWrapper } from './styles';

class Admin extends Component {
  renderSpinner() {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  renderList() {
    return (
      <List>
        <Item>
          <p>
            <strong>Fulano de tal</strong><br />
            <strong>Email:</strong> email@email<br />
            <strong>Telefone:</strong> 123123123123
          </p>
          <SecondaryButton>
            Remover
          </SecondaryButton>
        </Item>
      </List>
    );
  }

  render() {
    return (
      <Container>
        <PrimaryTitle>Administração</PrimaryTitle>
        {this.renderSpinner()}
        {this.renderList()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  appointments: state.appointments,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(AppointmentsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
