// vendors
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

// locals
import { Creators as UserActions } from '../../store/ducks/users';
import { Creators as AppointmentsActions } from '../../store/ducks/appointments';
import Container from '../../components/container';
import Form from '../../components/form';
import Calendar from '../../components/calendar';
import Toast from '../../components/toast';
import Spinner from '../../components/spinner';
import BoxError from '../../components/box-error';
import { PrimaryButton } from '../../components/buttons';
import { PrimaryInput } from '../../components/inputs';
import { PrimaryTitle, SecondaryTitle } from '../../components/titles';
import {
  RadioGroup, FormGroup, Description, Section, PersonalData,
} from './styles';

class Appointments extends Component {
  static propTypes = {
    users: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([null, PropTypes.string]),
      data: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.number,
      }),
    }).isRequired,
    usersCheckRequest: PropTypes.func.isRequired,
    usersSaveRequest: PropTypes.func.isRequired,
    usersClear: PropTypes.func.isRequired,

    appointments: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([null, PropTypes.string]),
      hours: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    appointmentsSaveRequest: PropTypes.func.isRequired,
    appointmentsCheckRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    name: '',
    phone: '',
    date: new Date(),
    time: '',
    error: null,
    step: 'email',
    toast: '',
  };

  // lifecicle
  componentDidUpdate(prevProps) {
    const { users: { data }, appointments } = this.props;
    const prevUsers = prevProps.users.data;
    const prevAppointments = prevProps.appointments;

    if (data.email && data.email !== prevUsers.email) {
      this.step = 'signIn';
    }

    if (data.name && data.name !== prevUsers.name) {
      this.step = 'appointments';
      this.checkHours();
    }

    if (appointments.status !== prevAppointments.status) {
      if (appointments.status === 'saved') {
        this.toast = 'Agendamento realizado com sucesso!';
        this.time = '';
      }
    }
  }

  componentWillUnmount() {
    const { usersClear } = this.props;

    usersClear();
  }

  // getters and setters
  get email() {
    const { email } = this.state;
    return email;
  }

  set email(email) {
    this.setState({ email });
  }

  set name(name) {
    this.setState({ name });
  }

  set phone(phone) {
    this.setState({ phone });
  }

  set error(error) {
    this.setState({ error });
  }

  get error() {
    const { error } = this.state;
    const { users, appointments } = this.props;
    return error || users.error || appointments.error;
  }

  get step() {
    const { step } = this.state;
    return step;
  }

  set step(step) {
    this.setState({ step });
  }

  get isUsersLoading() {
    const { users } = this.props;
    return users.loading;
  }

  get isAppointmentsLoading() {
    const { appointments } = this.props;
    return appointments.loading;
  }

  set toast(toast) {
    this.setState({ toast });
  }

  set time(time) {
    this.setState({ time });
  }

  // handlers
  handleCheckEmail = (e) => {
    e.preventDefault();
    if (this.isUsersLoading) return;

    const { usersCheckRequest } = this.props;

    if (this.email) {
      usersCheckRequest(this.email);
    } else {
      this.error = 'Digite um email';
    }
  }

  handleSignIn = (e) => {
    e.preventDefault();
    if (this.isUsersLoading) return;

    const { name, phone, email } = this.state;
    const { usersSaveRequest } = this.props;
    let errorMessage = '';

    if (!name) {
      errorMessage = 'Verifique o campo nome';
    }

    if (!phone) {
      errorMessage = 'Verifique o campo telefone';
    }

    if (!name && !phone) {
      errorMessage = 'Verifique os campos';
    }

    this.error = errorMessage;

    if (name && phone) {
      usersSaveRequest({ name, phone, email });
    }
  }

  handleAppointment = (e) => {
    e.preventDefault();

    if (this.isAppointmentsLoading) return;

    const { date: selectedDate, time } = this.state;
    const { appointmentsSaveRequest, users } = this.props;
    const [hour, min] = time.split(':');

    if (!time) {
      this.error = 'Selecione um horário';
    } else {
      const date = moment(selectedDate).hour(hour).minute(min).second(0);

      appointmentsSaveRequest({
        user: users.data._id,
        date,
      });
    }
  };

  checkHours = () => {
    const { appointmentsCheckRequest } = this.props;
    const { date } = this.state;

    appointmentsCheckRequest(moment(date).format('YYYY-MM-DD'));
  }

  isError = type => this.error === type;

  checkField = field => (
    this.isError(field) || (this.error && !this.state[field])
  );

  isStep = step => this.step === step;

  // renders
  renderFormField(field, label, type) {
    return (
      <FormGroup>
        <PrimaryInput
          onChange={(e) => {
            this.error = null;
            this[field] = e.target.value;
          }}
          error={this.checkField(field)}
          placeholder={`Digite seu ${label} *`}
          type={type}
        />
      </FormGroup>
    );
  }

  renderEmailForm() {
    return this.isStep('email') && (
      <Section>
        <Form onSubmit={this.handleCheckEmail} method="post">
          {this.renderFormField('email', 'email', 'email')}
          <PrimaryButton type="submit">
            {this.isUsersLoading ? <Spinner /> : 'ok'}
          </PrimaryButton>
        </Form>
      </Section>
    );
  }

  renderSignInForm() {
    return this.isStep('signIn') && (
      <Section>
        <Form onSubmit={this.handleSignIn} method="post">
          <SecondaryTitle>Complete seu cadastro</SecondaryTitle>
          {this.renderFormField('name', 'nome', 'text')}
          {this.renderFormField('phone', 'telefone', 'number')}
          <PrimaryButton type="submit">
            {this.isUsersLoading ? <Spinner /> : 'ok'}
          </PrimaryButton>
        </Form>
      </Section>
    );
  }

  renderPersonalData() {
    const { users: { data: { name, email, phone } } } = this.props;

    return this.isStep('appointments') && (
      <Section>
        <PersonalData>
          <SecondaryTitle>Dados pessoais</SecondaryTitle>
          <p>
            <strong>Nome:</strong> {name}
          </p>
          <p>
            <strong>email:</strong> {email}
          </p>
          <p>
            <strong>Telefone:</strong> {phone}
          </p>
        </PersonalData>
      </Section>
    );
  }

  renderAvailableHours() {
    const { appointments: { hours } } = this.props;

    return (
      <Fragment>
        <SecondaryTitle as="h3">
          {hours.length
            ? 'Horários disponíveis'
            : 'Não há horários disponíveis'
          }
        </SecondaryTitle>
        {this.isAppointmentsLoading
          ? <Spinner color="primary" />
          : hours.map((h) => {
            const id = `hour-${h.split(':')[0]}`;

            return (
              <RadioGroup key={`radio-${id}`}>
                <input
                  id={id}
                  type="radio"
                  name="hour"
                  value={h}
                  onChange={(e) => {
                    this.time = e.target.value;
                    this.error = null;
                  }}
                />
                <label htmlFor={id}>{h}</label>
              </RadioGroup>
            );
          })}
      </Fragment>
    );
  }

  renderScheduledApoointments() {
    const { appointments: { data } } = this.props;

    return (
      <Section>
        <SecondaryTitle>Consultas agendadas</SecondaryTitle>
        {data.length
          ? data.map(appointment => (
            <p key={appointment._id}>
              {moment(appointment.date).format('DD/MM/YYYY HH:mm')}
            </p>
          ))
          : (<p>Não existem consultas agendadas</p>)}
      </Section>
    );
  }

  renderCalendarField() {
    const { date } = this.state;

    const weekDays = calendarDate => (
      calendarDate.getDay() === 0
      || calendarDate.getDay() === 6
    );

    return (
      <FormGroup>
        <Calendar
          value={date}
          onChange={(calendarDate) => {
            this.setState({ date: calendarDate[0] });
            this.checkHours();
          }}
          options={{
            minDate: 'today',
            dateFormat: 'd/m/Y',
            disable: [
              weekDays,
            ],
          }}
        />
      </FormGroup>
    );
  }

  renderAppointments() {
    const { appointments: { hours } } = this.props;

    return this.isStep('appointments') && (
      <Fragment>
        <Section>
          <Form onSubmit={this.handleAppointment} method="post">
            <SecondaryTitle>Agendar consulta</SecondaryTitle>
            {this.renderCalendarField()}
            {this.renderAvailableHours()}
            {hours.length && !this.isAppointmentsLoading ? (
              <PrimaryButton type="submit">
                ok
              </PrimaryButton>
            ) : null}
          </Form>
        </Section>
        {this.renderScheduledApoointments()}
      </Fragment>
    );
  }

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

    return toast && status === 'saved' && (
      <Toast onTimeout={() => { this.toast = ''; }}>
        {toast}
      </Toast>
    );
  }

  renderDescription() {
    let text;

    if (this.isStep('email')) {
      text = 'Nessa área você poderá agendar uma consulta. Digite seu email no campo abaixo para iniciar.';
    } else if (this.isStep('signIn')) {
      text = 'Complete o cadastro para continuar';
    } else if (this.isStep('appointments')) {
      text = 'Agende sua consulta clicando selecionando uma data e horário';
    }

    return (
      <Description>
        {text}
      </Description>
    );
  }

  render() {
    return (
      <Container>
        <PrimaryTitle>Agendamentos</PrimaryTitle>
        {this.renderDescription()}
        {this.renderPersonalData()}
        {this.renderBoxError()}
        {this.renderEmailForm()}
        {this.renderSignInForm()}
        {this.renderAppointments()}
        {this.renderToast()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  appointments: state.appointments,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(UserActions, dispatch),
  ...bindActionCreators(AppointmentsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
