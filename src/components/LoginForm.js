import React from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from "./common";

export class LoginForm extends React.Component {

  state = { email: '', password: ''}

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            value = { this.state.email }
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password }) }
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}