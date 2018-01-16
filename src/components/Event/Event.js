import React, { Component } from 'react';
import { events } from '../../fixtures';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

class Event extends Component {
    onPress = () => {
        Alert.alert(
            `Delete ${this.props.event.title} event`,
            'Your sure?',
            [
                {text: 'Yes', onPress: () => console.log('Yes pressed')},
                {text: 'No', onPress: () => console.log('No pressed')},
            ],
            { onDismiss: () => console.log('Dismissed') }
        );
    }

    render() {
        const { title, when, where } = this.props.event;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{where}</Text>
                <Text style={styles.text}>{when}</Text>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.onPress}
                >
                    <Icon
                        name="delete"
                        size={24}
                        color="#757575"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        paddingLeft: 30,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        color: '#212121',
    },
    text: {
        fontSize: 14,
        color: '#757575',
    },
    btn: {
        position: 'absolute',
        right: 15,
        bottom: 30,
    }
});

export default Event;
