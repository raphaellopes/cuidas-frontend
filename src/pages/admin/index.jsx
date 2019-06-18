// vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

// locals
import { Creators as AppointmentsActions } from '../../store/ducks/appointments';
import Container from '../../components/container';
import Spinner from '../../components/spinner';
import Icon from '../../components/icon';
import Toast from '../../components/toast';
import BoxError from '../../components/box-error';
import { PrimaryTitle } from '../../components/titles';
import { SecondaryButton } from '../../components/buttons';

import { List, Item, SpinnerWrapper } from './styles';

class Admin extends Component {
  static propTypes = {
    appointments: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
    appointmentsFetchRequest: PropTypes.func.isRequired,
    appointmentsRemoveRequest: PropTypes.func.isRequired,
  };

  state = {
    appointmentsSelected: '',
    toast: '',
  };

  // lifecicle
  componentDidMount() {
    const { appointmentsFetchRequest } = this.props;

    appointmentsFetchRequest();
  }

  componentDidUpdate(prevProps) {
    const { appointments } = this.props;
    const prevAppointments = prevProps.appointments;

    if (appointments.status !== prevAppointments.status) {
      if (appointments.status === 'removed') {
        this.toast = 'Agendamento removido com sucesso!';
        this.appointmentsSelected = '';
      }
    }
  }

  // getters and setters
  get loading() {
    const { appointments: { loading } } = this.props;
    return loading;
  }

  get appointmentsStatus() {
    const { appointments: { status } } = this.props;
    return status;
  }

  set appointmentsSelected(appointmentsSelected) {
    this.setState({ appointmentsSelected });
  }

  set toast(toast) {
    this.setState({ toast });
  }

  get error() {
    const { appointments } = this.props;

    return appointments.error;
  }

  removeAppointment = (id) => {
    const { appointmentsRemoveRequest } = this.props;
    this.appointmentsSelected = id;
    appointmentsRemoveRequest(id);
  }

  // renders
  renderBoxError() {
    return this.error && (
      <BoxError>
        {this.error}
      </BoxError>
    );
  }

  renderToast() {
    const { toast } = this.state;
    const { appointments: { status } } = this.props;

    return toast && status === 'removed' && (
      <Toast onTimeout={() => { this.toast = ''; }}>
        {toast}
      </Toast>
    );
  }

  renderSpinner() {
    const { appointmentsSelected } = this.state;

    return this.loading && !appointmentsSelected && (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  renderItem(item) {
    const { appointmentsSelected } = this.state;
    const { _id: id, date, user } = item;
    const appointment = moment(date).format('DD/MM/YYYY HH:mm');

    return (
      <Item key={id}>
        <p>
          <strong>{item.name}</strong><br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Telefone:</strong> {user.phone}<br />
          <strong>Data:</strong> {appointment}
        </p>
        <SecondaryButton onClick={() => {
          this.removeAppointment(id);
        }}
        >
          {this.loading && appointmentsSelected === id
            ? <Spinner />
            : <Icon name="trash" />
          }
        </SecondaryButton>
      </Item>
    );
  }

  renderList() {
    const { appointments: { data } } = this.props;

    return (
      <List>
        {data.length
          ? data.map(item => this.renderItem(item))
          : !this.loading && !this.error && (<p>Não existem consultas agendadas</p>)
        }
      </List>
    );
  }

  render() {
    return (
      <Container>
        <PrimaryTitle>Administração</PrimaryTitle>
        {this.renderBoxError()}
        {this.renderSpinner()}
        {this.renderList()}
        {this.renderToast()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  appointments: state.appointments,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(AppointmentsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
