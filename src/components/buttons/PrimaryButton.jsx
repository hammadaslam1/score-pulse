/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/Styles';

const PrimaryButton = props => {
  return (
    <TouchableOpacity
      style={[styles.container, {marginTop: 20}]}
      onPress={props.onPress}>
      <View
        style={[styles.button, {backgroundColor: '#3280cf', borderRadius: 10}]}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
