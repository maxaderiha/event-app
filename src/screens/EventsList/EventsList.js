import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import EventsList from '../../components/EventsList/EventsList';
import styles from './EventsList.style';

class EventsListScreen extends Component {
  static navigationOptions = {
    title: 'Events',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
  }

  handleEventPress = uid => {
    console.log(this.props);
    this.props.navigation.navigate('event', { uid });
  }

  render() {
    return <EventsList onEventPress={this.handleEventPress} />;
  }
}

export default EventsListScreen;