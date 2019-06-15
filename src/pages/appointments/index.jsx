// vendors
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// locals
import { Creators as UserActions } from '../../store/ducks/users';
import Container from '../../components/container';
import Form from '../../components/form';
import Calendar from '../../components/calendar';
import { PrimaryButton } from '../../components/buttons';
import { PrimaryInput } from '../../components/inputs';
import { PrimaryTitle, SecondaryTitle } from '../../components/titles';
import {
  ErrorBox, RadioGroup, FormGroup, Description, Section, PersonalData,
} from './styles';

class Appointments extends Component {
  static propTypes = {
    users: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([null, PropTypes.string]),
      data: PropTypes.shape({
        _id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.number,
      }),
    }).isRequired,
    usersRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    name: '',
    phone: '',
    date: new Date(),
    hour: '',

    errorEmail: false,
    errorName: false,
    errorPhone: false,

    step: 'email',
  };

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

  get errorEmail() {
    const { errorEmail } = this.state;
    return errorEmail;
  }

  set errorEmail(errorEmail) {
    this.setState({ errorEmail });
  }

  get errorName() {
    const { errorName } = this.state;
    return errorName;
  }

  set errorName(errorName) {
    this.setState({ errorName });
  }

  get errorPhone() {
    const { errorPhone } = this.state;
    return errorPhone;
  }

  set errorPhone(errorPhone) {
    this.setState({ errorPhone });
  }

  get step() {
    const { step } = this.state;
    return step;
  }

  set step(step) {
    this.setState({ step });
  }

  get isEmailLoading() {
    const { users } = this.props;
    return users.loading;
  }

  // lifecicle
  componentDidUpdate(prevProps) {
    const { users: { data } } = this.props;
    console.log('componentDidUpdate', prevProps, this.props);
    if (data.email && data.email !== prevProps.users.data.email) {
      this.step = 'signIn';
    }
  }

  // handlers
  handleCheckEmail = (e) => {
    e.preventDefault();

    const { usersRequest } = this.props;

    if (this.email) {
      console.log('Submit check email!', this.email);
      usersRequest(this.email);
    } else {
      this.errorEmail = true;
    }
  }

  handleSignIn = (e) => {
    e.preventDefault();

    const { name, phone, email } = this.state;

    if (!name) {
      this.errorName = true;
    }

    if (!phone) {
      this.errorPhone = true;
    }

    if (name && phone) {
      console.log('Submit signIn!', { name, phone, email });
      this.step = 'appointments';
    }
  }

  handleAppointment = (e) => {
    e.preventDefault();

    const { date, hour } = this.state;

    console.log('Submit signIn!', { date, hour });
  };

  // renders
  renderEmailForm() {
    return this.step === 'email' && (
      <Section>
        <Form onSubmit={this.handleCheckEmail} method="post">
          <FormGroup>
            <PrimaryInput
              onChange={(e) => {
                this.errorEmail = false;
                this.email = e.target.value;
              }}
              error={this.errorEmail}
              placeholder="Digite seu email *"
              type="email"
            />
          </FormGroup>
          <PrimaryButton type="submit">
            {this.isEmailLoading ? 'aguarde' : 'ok'}
          </PrimaryButton>
        </Form>
      </Section>
    );
  }

  renderSignInForm() {
    return this.step === 'signIn' && (
      <Section>
        <Form onSubmit={this.handleSignIn} method="post">
          <SecondaryTitle>Complete seu cadastro</SecondaryTitle>
          <FormGroup>
            <PrimaryInput
              onChange={(e) => {
                this.errorName = false;
                this.name = e.target.value;
              }}
              error={this.errorName}
              placeholder="Digite seu nome *"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <PrimaryInput
              onChange={(e) => {
                this.errorPhone = false;
                this.phone = e.target.value;
              }}
              error={this.errorPhone}
              placeholder="Digite seu telefone *"
              type="number"
            />
          </FormGroup>
          <PrimaryButton type="submit">ok</PrimaryButton>
        </Form>
      </Section>
    );
  }

  renderPersonalData() {
    return this.step === 'appointments' && (
      <Section>
        <PersonalData>
          <SecondaryTitle>Dados pessoais</SecondaryTitle>
          <p>
            <strong>Nome:</strong> Fulano de tal
          </p>
          <p>
            <strong>email:</strong> some@email.com
          </p>
          <p>
            <strong>Telefone:</strong> 11 1234-56789
          </p>
        </PersonalData>
      </Section>
    );
  }

  renderAppointments() {
    const { date } = this.state;

    const hours = [
      '08:00',
      '09:00',
    ];

    return this.step === 'appointments' && (
      <Fragment>
        <Section>
          <Form onSubmit={this.handleAppointment} method="post">
            <SecondaryTitle>Agendar consulta</SecondaryTitle>
            <FormGroup>
              <Calendar
                value={date}
                onChange={(calendarDate) => {
                  this.setState({ date: calendarDate[0] });
                }}
                options={{
                  minDate: 'today',
                  dateFormat: 'd/m/Y',
                  disable: [
                    function (calendarDate) {
                      return (
                        calendarDate.getDay() === 0
                        || calendarDate.getDay() === 6
                      );
                    },
                  ],
                }}
              />
            </FormGroup>
            <SecondaryTitle as="h3">Horários disponíveis</SecondaryTitle>
            {hours.map((h) => {
              const id = `hour-${h.split(':')[0]}`;

              return (
                <RadioGroup key={`radio-${id}`}>
                  <input
                    id={id}
                    type="radio"
                    name="hour"
                    value={h}
                    onChange={(e) => {
                      this.setState({ hour: e.target.value });
                    }}
                  />
                  <label htmlFor={id}>{h}</label>
                </RadioGroup>
              );
            })}
            <PrimaryButton type="submit">ok</PrimaryButton>
          </Form>
        </Section>
        <Section>
          <SecondaryTitle>Consultas agendadas</SecondaryTitle>
          <p>Não existem consultas agendadas</p>
        </Section>
      </Fragment>
    );
  }

  renderBoxError() {
    return (this.errorEmail || this.errorName || this.errorPhone) && (
      <ErrorBox>
        Verifique as informações
      </ErrorBox>
    );
  }

  render() {
    return (
      <Container>
        <PrimaryTitle>Agendamentos</PrimaryTitle>
        <Description>
          Nessa área você poderá agendar uma consulta. Digite seu email
          no campo abaixo para iniciar. Se for a primeira consulta após
          informar seu email, você deverá completar o cadastro. Não se preocupe,
          pois será bem rápido :)
        </Description>
        {this.renderBoxError()}
        {this.renderEmailForm()}
        {this.renderSignInForm()}
        {this.renderPersonalData()}
        {this.renderAppointments()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
