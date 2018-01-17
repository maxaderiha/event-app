import { StyleSheet } from 'react-native';
import {DARK_PRIMARY, DIVIDER, PRIMARY, TEXT_ICONS, PRIMARY_TEXT, } from '../../constants';

export default StyleSheet.create({
  container: {
    borderTopWidth: 25,
    borderTopColor: DARK_PRIMARY,
  },
  listHeader: {
    padding: 15,
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_ICONS,
    backgroundColor: DARK_PRIMARY,
  },
  sectionHeader: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 20,
    backgroundColor: PRIMARY,
    color: TEXT_ICONS,
  },
  separator: {
    marginLeft: 30,
    height: 0.5,
    backgroundColor: DIVIDER,
  }
});