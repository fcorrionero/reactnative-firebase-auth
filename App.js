import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import {Button, Card, Header, Spiner} from './src/components/common';
import { LoginForm } from './src/components/LoginForm';

export default class App extends React.Component {

  state = { loggedIn: null };

  constructor(props) {
    super(props);
    firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else{
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <Button onPress={ ()=> firebase.auth().signOut() }>Log Out </Button>
        );
      case false:
        return <LoginForm/>;
      default:
        return (
          <Card><Spiner size="large"/></Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}
