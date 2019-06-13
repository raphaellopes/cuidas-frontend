// vendors
import React, { Component } from 'react';

// locals
import Container from '../../components/container';
import Form from '../../components/form';
import { PrimaryButton } from '../../components/buttons';

export default class Appointments extends Component {
  // handlers
  handleCheckEmail = (e) => {
    e.preventDefault();

    console.log('Submit check email!');
  }

  handleSignIn = (e) => {
    e.preventDefault();

    console.log('Submit signIn!');
  }

  // renders
  renderEmailForm() {
    return (
      <Form onSubmit={this.handleCheckEmail} method="post">
        Form check email
        <PrimaryButton type="submit">ok</PrimaryButton>
      </Form>
    );
  }

  renderSignInForm() {
    return (
      <Form onSubmit={this.handleSignIn} method="post">
        Form signIn
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
