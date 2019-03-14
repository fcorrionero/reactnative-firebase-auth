import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './src/components/common';
import { LoginForm } from './src/components/LoginForm';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyDZ3IRQOLLr0pbR7aA9GyTYuQaDVp-VGhQ",
      authDomain: "auth-4ecb8.firebaseapp.com",
      databaseURL: "https://auth-4ecb8.firebaseio.com",
      projectId: "auth-4ecb8",
      storageBucket: "auth-4ecb8.appspot.com",
      messagingSenderId: "575924033388"
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