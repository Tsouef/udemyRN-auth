import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/commons';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCaB3iuzUPveSsCsdatC5mYWlh9YF8mchw',
      authDomain: 'auth-a5a9f.firebaseapp.com',
      databaseURL: 'https://auth-a5a9f.firebaseio.com',
      projectId: 'auth-a5a9f',
      storageBucket: 'auth-a5a9f.appspot.com',
      messagingSenderId: '27652070538'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
