import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import firebase from 'firebase';
import { Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './SingIn.style';
import { PRIMARY, TEXT_ICONS, LIGHT_PRIMARY } from '../../constants';
import { NavigationActions } from 'react-navigation';

@inject('user')
@observer
class SignIn extends Component {
    onEmailChange = email => this.props.user.email = email;

    onPasswordChange = password => this.props.user.password = password;

    signIn = () => {
        const { user } = this.props;

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(userData => {
                user.currUser = userData;
                user.redirectAfterSignIn('eventsList');
            });
    }

    render() {
        const { email, password } = this.props.user;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrap}>
                <View style={styles.form}>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.fieldText}
                        selectionColor={TEXT_ICONS}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={LIGHT_PRIMARY}
                        placeholder="Email"
                        value={email}
                        onChangeText={this.onEmailChange}
                    />

                    <TextInput
                        secureTextEntry
                        style={styles.fieldText}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={LIGHT_PRIMARY}
                        selectionColor={TEXT_ICONS}
                        placeholder="Password"
                        value={password}
                        onChangeText={this.onPasswordChange}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.signIn}
                    >
                        <Text style={styles.btnText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default SignIn;
