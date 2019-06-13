// vendors
import React, { Component } from 'react';

// locals
import Container from '../../components/container';
import Form from '../../components/form';

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
        <button type="submit">ok</button>
      </Form>
    );
  }

  renderSignInForm() {
    return (
      <Form onSubmit={this.handleSignIn} method="post">
        Form signIn
        <button type="submit">ok</button>
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
