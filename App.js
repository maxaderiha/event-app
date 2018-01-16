import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Root from './src/components/Root/Root';
import SignIn from './src/components/Auth/SignIn';
import Event from "./src/components/Event/Event";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Event/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
