import React, { Component } from 'react';
import { View } from 'react-native';
import Event from '../../components/Event/Event';
import styles from './Events.style';
import { TEXT_ICONS } from '../../constants';

class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Event ${navigation.state.params.uid}`,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: TEXT_ICONS,
  })

  render() {
    return <Event />;
  }
}

export default EventScreen;