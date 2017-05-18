import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
