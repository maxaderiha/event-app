import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './Event.style';
import { events } from '../../fixtures';

class Event extends Component {
  static defaultProps = {
    event: events[0],
  }

  render() {
    const { title, month, when, where } = this.props.event;

    return (
      <ScrollView style={styles.container}>
        <Text>
          <Text style={styles.title}>Month: </Text>
          {month}
        </Text>
        <Text>
          <Text style={styles.title}>When: </Text>
          {when}
        </Text>
        <Text>
          <Text style={styles.title}>Where: </Text>
          {where}
        </Text>
      </ScrollView>
    );
  }
}

export default Event;