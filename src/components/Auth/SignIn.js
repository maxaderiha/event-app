import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    };

    onEmailChange = email => this.setState({ email });

    onPasswordChange = password => this.setState({ password });

    render() {
        return (
            <View style={styles.wrap}>
                <Text style={styles.header}>Event app</Text>
                <View style={styles.fieldWrap}>
                    <Text style={styles.fieldTitle}>Email:</Text>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.fieldText}
                        value={this.state.email}
                        onChangeText={this.onEmailChange}
                    />
                </View>
                <View style={styles.fieldWrap}>
                    <Text style={styles.fieldTitle}>Password:</Text>
                    <TextInput
                        secureTextEntry
                        style={styles.fieldText}
                        value={this.state.password}
                        onChangeText={this.onPasswordChange}
                    />
                </View>
                <Button
                    title="Sign In"
                    color="#607D8B"
                    onPress={() => { }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        borderTopColor: '#455A64',
        borderTopWidth: 25,
        backgroundColor: '#FFFFFF',
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
        marginBottom: 5,
    },
    fieldText: {
        fontSize: 18,
        padding: 5,
    },
});

export default SignIn;
