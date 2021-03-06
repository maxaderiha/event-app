import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SectionList, Text, TouchableOpacity } from 'react-native';
import EventCard from '../EventCard/EventCard';
import { getGroups, getSections } from '../../utils'
import styles from './EventsList.style';

class EventsList extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity onPress={this.props.onEventPress.bind(null, item.uid)}>
      <EventCard event={item} />
    </TouchableOpacity>
  )

  renderSectionHeader = ({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>

  getItemSeparatorComponent = () => <View style={styles.separator}></View>

  keyExtractor = item => item.uid

  render() {
    const { events } = this.props;
    
    return (
      <View style={styles.container}>
        <SectionList
          sections={events}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          ItemSeparatorComponent={this.getItemSeparatorComponent}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default EventsList;