// vendors
import React, { Component, Fragment } from 'react';

// locals
import Container from '../../components/container';
import Form from '../../components/form';
import Calendar from '../../components/calendar';
import { PrimaryButton } from '../../components/buttons';
import { PrimaryInput } from '../../components/inputs';
import { PrimaryTitle, SecondaryTitle } from '../../components/titles';
import {
  FormGroup, Description, Section, PersonalData,
} from './styles';

export default class Appointments extends Component {
  state = {
    email: '',
    name: '',
    phone: '',
    date: new Date(),
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

  // handlers
  handleCheckEmail = (e) => {
    e.preventDefault();

    console.log('Submit check email!', this.email);
  }

  handleSignIn = (e) => {
    e.preventDefault();

    const { name, phone, email } = this.state;

    console.log('Submit signIn!', { name, phone, email });
  }

  handleAppointment = (e) => {
    e.preventDefault();

    const { date } = this.state;

    console.log('Submit signIn!', { date });
  }

  // renders
  renderEmailForm() {
    return (
      <Section>
        <Form onSubmit={this.handleCheckEmail} method="post">
          <FormGroup>
            <PrimaryInput
              onChange={(e) => { this.email = e.target.value; }}
              placeholder="Digite seu email *"
              type="email"
            />
          </FormGroup>
          <PrimaryButton type="submit">ok</PrimaryButton>
        </Form>
      </Section>
    );
  }

  renderSignInForm() {
    return (
      <Section>
        <Form onSubmit={this.handleSignIn} method="post">
          <SecondaryTitle>Complete seu cadastro</SecondaryTitle>
          <FormGroup>
            <PrimaryInput
              onChange={(e) => { this.name = e.target.value; }}
              placeholder="Digite seu nome *"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <PrimaryInput
              onChange={(e) => { this.phone = e.target.value; }}
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
    return (
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

    return (
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
            <FormGroup>
            hora
            </FormGroup>
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
        {this.renderEmailForm()}
        {this.renderSignInForm()}
        {this.renderPersonalData()}
        {this.renderAppointments()}
      </Container>
    );
  }
}
