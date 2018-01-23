import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { PRIMARY } from '../../constants';
import styles from './Loader.style';

const Loader = ({ color = PRIMARY, size = 54 }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loader;