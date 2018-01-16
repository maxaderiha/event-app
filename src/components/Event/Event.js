import React, { Component } from 'react';
import { events } from '../../fixtures';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class Event extends Component {
    render() {
        const { title, when, where } = this.props.event;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{where}</Text>
                <Text style={styles.text}>{when}</Text>
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
    }
});

export default Event;