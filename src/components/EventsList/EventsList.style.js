import { StyleSheet } from 'react-native';
import {DARK_PRIMARY, DIVIDER, PRIMARY, TEXT_ICONS, PRIMARY_TEXT, } from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: TEXT_ICONS,
  },
  sectionHeader: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 20,
    backgroundColor: PRIMARY,
    color: TEXT_ICONS,
  },
  separator: {
    marginLeft: 25,
    height: 0.5,
    backgroundColor: DIVIDER,
  }
});