import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SectionList, Text } from 'react-native';
import EventCard from '../EventCard/EventCard';
import { sections } from '../../fixtures';
import styles from './EventsList.style';

class EventsList extends Component {
  static defaultProps = {
    sections,
  }

  getListHeaderComponent = () => <Text style={styles.listHeader}>Events</Text>

  renderItem = ({ item }) => <EventCard event={item} />

  renderSectionHeader = ({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>

  getItemSeparatorComponent = () => <View style={styles.separator}></View>

  keyExtractor = item => item.uid

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.props.sections}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          ListHeaderComponent={this.getListHeaderComponent}
          ItemSeparatorComponent={this.getItemSeparatorComponent}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default EventsList;