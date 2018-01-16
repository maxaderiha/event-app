import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventsList from '../EventsList/EventsList';

class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <EventsList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Root;
