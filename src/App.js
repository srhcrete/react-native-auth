import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDaqvIWwRHsPJWku2gDtTk-TvczVNgLB4w',
      authDomain: 'auth-de879.firebaseapp.com',
      databaseURL: 'https://auth-de879.firebaseio.com',
      projectId: 'auth-de879',
      storageBucket: 'auth-de879.appspot.com',
      messagingSenderId: '489422794717'
    });

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
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>  
        );
      case false:
        return <LoginForm />
      default:
        return (
          <View>
            <Spinner size='large' />
          </View>
        );
    }

    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }
    return <LoginForm />
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
