import { StyleSheet } from 'react-native';
import { PRIMARY_TEXT, SECONDARY_TEXT, TEXT_ICONS } from '../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingLeft: 30,
    backgroundColor: TEXT_ICONS,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: PRIMARY_TEXT,
  },
  text: {
    fontSize: 14,
    color: SECONDARY_TEXT,
  },
  btn: {
    position: 'absolute',
    padding: 5,
    right: 10,
    bottom: 25,
  }
});
