import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCDDv_lKe8y295qDuBYWDm8kJEETmmVggg',
      authDomain: 'auth-3796b.firebaseapp.com',
      databaseURL: 'https://auth-3796b.firebaseio.com',
      projectId: 'auth-3796b',
      storageBucket: 'auth-3796b.appspot.com',
      messagingSenderId: '956337480863'
    });

    firebase.auth().onAuthStateChanged((user) => {
        if ( user ) {
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
          <Button
          onPress={() => firebase.auth().signOut()}
          children="Log out"
          >

          </Button>
        );
        break;
      case false:
        return <LoginForm /> ;
        break;
      default:
        return <Spinner size="large" />;
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication " />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
