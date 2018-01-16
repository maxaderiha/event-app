import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SectionList, Text } from 'react-native';
import Event from '../Event/Event';
import { sections } from '../../fixtures';

class EventsList extends Component {
  static defaultProps = {
    sections,
  }

  getListHeaderComponent = () => <Text style={styles.listHeader}>Events</Text>

  renderItem = ({ item }) => <Event event={item} />

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

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 25,
    borderTopColor: '#455A64',
  },
  listHeader: {
    padding: 15,
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#455A64',
  },
  sectionHeader: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 20,
    backgroundColor: '#607D8B',
    color: '#FFFFFF',
  },
  separator: {
    marginLeft: 30,
    height: 0.5,
    backgroundColor: '#BDBDBD',
  }
});

export default EventsList;