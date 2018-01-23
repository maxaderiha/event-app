import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, TouchableOpacity, View } from 'react-native';
import EventMethods from '../../decorators/EventMethods';
import { SECONDARY_TEXT } from '../../constants';
import styles from './EventCard.style';

class EventCard extends Component {
    render() {
        const { title, when, where } = this.props.event;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{where}</Text>
                <Text style={styles.text}>{when}</Text>
                <View style={styles.btnWrap}>
                    <TouchableOpacity onPress={this.props.onDeletePress}>
                        <Icon
                            name="delete"
                            size={24}
                            color={SECONDARY_TEXT}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default EventMethods(EventCard);
