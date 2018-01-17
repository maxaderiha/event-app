import { StyleSheet } from 'react-native';
import { DARK_PRIMARY, TEXT_ICONS } from '../../constants';

export default StyleSheet.create({
    wrap: {
        borderTopColor: DARK_PRIMARY,
        borderTopWidth: 25,
        backgroundColor: TEXT_ICONS,
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#212121',
    },
    fieldWrap: {
        width: '80%',
    },
    fieldTitle: {
        fontSize: 16,
    },
    fieldText: {
        fontSize: 18,
        padding: 10,
    },
});
