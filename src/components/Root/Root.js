import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventsList from '../EventsList/EventsList';
import Event from '../Event/Event';
import SignIn from '../Auth/SignIn';

class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Event />
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
