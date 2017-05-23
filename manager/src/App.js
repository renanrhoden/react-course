import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'


class App extends Component {
componentWillMount() {
  const config = {
    apiKey: 'AIzaSyBtTC6UtYzFW62Mq3I-A_RJvpOEZfPAW1U',
    authDomain: 'manager-cf9b0.firebaseapp.com',
    databaseURL: 'https://manager-cf9b0.firebaseio.com',
    projectId: 'manager-cf9b0',
    storageBucket: 'manager-cf9b0.appspot.com',
    messagingSenderId: '348473491207'
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );

  }

}

export default App;
