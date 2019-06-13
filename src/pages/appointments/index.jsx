// vendors
import React, { Component } from 'react';

// locals
import Container from '../../components/container';
import Form from '../../components/form';
import { PrimaryButton } from '../../components/buttons';
import { PrimaryInput } from '../../components/inputs';

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
      <Form onSubmit={this.handleCheckEmail} method="post">
        <PrimaryInput
          onChange={(e) => { this.email = e.target.value; }}
          placeholder="Digite seu email *"
          type="email"
        />
        <PrimaryButton type="submit">ok</PrimaryButton>
      </Form>
    );
  }

  renderSignInForm() {
    return (
      <Form onSubmit={this.handleSignIn} method="post">
        <PrimaryInput
          onChange={(e) => { this.name = e.target.value; }}
          placeholder="Digite seu nome *"
          type="text"
        />
        <PrimaryInput
          onChange={(e) => { this.phone = e.target.value; }}
          placeholder="Digite seu telefone *"
          type="number"
        />
        <PrimaryButton type="submit">ok</PrimaryButton>
      </Form>
    );
  }

  render() {
    return (
      <Container>
        {this.renderEmailForm()}
        {this.renderSignInForm()}
      </Container>
    );
  }
}
