import './src/config';
import React, { Component } from 'react';
import { Text } from 'react-native';
import Navigator from './src/navigation';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, observer } from 'mobx-react';
import { stores } from './src/stores'

@observer
export default class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <Navigator navigation={addNavigationHelpers(stores.navigation.config)} />
            </Provider>
        );
    }
}
