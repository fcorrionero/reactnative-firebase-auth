import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './src/components/common';
import { LoginForm } from './src/components/LoginForm';

export default class App extends React.Component {

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
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm/>
      </View>
    );
  }
}
