import { StyleSheet } from 'react-native';
import { PRIMARY_TEXT, SECONDARY_TEXT, TEXT_ICONS, DARK_PRIMARY } from '../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingLeft: 25,
    paddingRight: 60,
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
  btnWrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
