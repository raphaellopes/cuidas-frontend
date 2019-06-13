// vendors
import React, { Component } from 'react';

// locals
import Container from '../../components/container';
import Form from '../../components/form';
import { PrimaryButton } from '../../components/buttons';
import { PrimaryInput } from '../../components/inputs';
import { PrimaryTitle, SecondaryTitle } from '../../components/titles';
import { FormGroup, Description, Section } from './styles';

export default class Appointments extends Component {
  state = {
    email: '',
    name: '',
    phone: '',
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
      </Container>
    );
  }
}
