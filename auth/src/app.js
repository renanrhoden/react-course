import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCDDv_lKe8y295qDuBYWDm8kJEETmmVggg',
      authDomain: 'auth-3796b.firebaseapp.com',
      databaseURL: 'https://auth-3796b.firebaseio.com',
      projectId: 'auth-3796b',
      storageBucket: 'auth-3796b.appspot.com',
      messagingSenderId: '956337480863'
    });
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication " />
        <Text>An App!!!</Text>
      </View>
    );
  }
}

export default App;
