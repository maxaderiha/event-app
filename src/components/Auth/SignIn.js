import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './SingIn.style';

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

export default SignIn;
