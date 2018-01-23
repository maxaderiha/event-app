import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import EventsList from '../../components/EventsList/EventsList';
import Loader from '../../components/Loader/Loader';
import { observer, inject } from 'mobx-react';
import styles from './EventsList.style';
import { TEXT_ICONS } from '../../constants';

@inject('events')
@observer
class EventsListScreen extends Component {
  static navigationOptions = {
    title: 'Events',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: TEXT_ICONS,
  }

  handleEventPress = uid => {
    console.log(this.props);
    this.props.navigation.navigate('event', { uid });
  }

  componentDidMount() {
    const { events } = this.props;
    if (!events.loaded && !events.loading) events.loadAll();
  }

  render() {
    const { events } = this.props;

    if (events.loading) return <Loader />;
    return <EventsList onEventPress={this.handleEventPress} events={events.sections} />;
  }
}

export default EventsListScreen;