import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Firebase } from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDaqvIWwRHsPJWku2gDtTk-TvczVNgLB4w',
      authDomain: 'auth-de879.firebaseapp.com',
      databaseURL: 'https://auth-de879.firebaseio.com',
      projectId: 'auth-de879',
      storageBucket: 'auth-de879.appspot.com',
      messagingSenderId: '489422794717'
    });
  }
  
  render() {
    return (
      <View>
      <Header headerText='Authentication' />
        <Text>bleh</Text>
      </View>
    );
  }
}

export default App;
