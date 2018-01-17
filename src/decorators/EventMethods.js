import React, { Component } from 'react';
import { Alert } from 'react-native';

export default (EventComponent) => class EventMethodsComponent extends Component {
  state = {

  }

  onDeletePress = () => {
    Alert.alert(
      `Delete ${this.props.event.title} event`,
      'Your sure?',
      [
        { text: 'Yes', onPress: () => console.log('Yes pressed') },
        { text: 'No', onPress: () => console.log('No pressed') },
      ],
      { onDismiss: () => console.log('Dismissed') }
    );
  }

  render() {
    return <EventComponent {...this.props} {...this.state} onDeletePress={this.onDeletePress} />;
  }
}