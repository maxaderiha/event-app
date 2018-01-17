import React, { Component } from 'react';
import { View } from 'react-native';
import Event from '../../components/Event/Event';

class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Event ${navigation.state.params.uid}`,
  })

  render() {
    return <Event />;
  }
}

export default EventScreen;