import { StyleSheet } from 'react-native';
import { DARK_PRIMARY, TEXT_ICONS, LIGHT_PRIMARY, PRIMARY } from '../../constants';

export default StyleSheet.create({
    wrap: {
        borderTopColor: DARK_PRIMARY,
        borderTopWidth: 25,
        backgroundColor: PRIMARY,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        justifyContent: 'space-between',
        width: '85%',
        height: 200,
    },
    fieldText: {
        paddingVertical: 5,
        fontSize: 20,
        color: TEXT_ICONS,
        borderBottomColor: TEXT_ICONS,
        borderBottomWidth: 1.5,
    },
});
