import { StyleSheet } from 'react-native';
import { DARK_PRIMARY, TEXT_ICONS } from '../../constants';

export default StyleSheet.create({
  header: {
    backgroundColor: DARK_PRIMARY,
  }, 
  headerTitle: {
    color: TEXT_ICONS,
    fontSize: 24,
  },
  headerBackTitle: {
    backgroundColor: TEXT_ICONS,
  }
})