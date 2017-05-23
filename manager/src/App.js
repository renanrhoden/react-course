import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';


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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk);


    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

  }

}

export default App;
