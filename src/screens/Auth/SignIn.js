import React, { Component } from 'react';
import { View } from 'react-native';
import SignIn from '../../components/Auth/SignIn';
import styles from './SignIn.style';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Events app',
    header: null,
  }

  render() {
    return <SignIn {...this.props} />;
  }
}

export default SignInScreen;