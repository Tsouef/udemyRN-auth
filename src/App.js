import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/commons';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
