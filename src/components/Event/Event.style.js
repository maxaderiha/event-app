import { StyleSheet } from 'react-native';
import { DARK_PRIMARY, TEXT_ICONS } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TEXT_ICONS,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
});
