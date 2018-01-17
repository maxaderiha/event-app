import { StyleSheet } from 'react-native';
import { DARK_PRIMARY, TEXT_ICONS } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 25,
    borderTopColor: DARK_PRIMARY,
  },
  header: {
    padding: 15,
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_ICONS,
    backgroundColor: DARK_PRIMARY,
  },
});
