/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/Styles';

const PrimaryButton = props => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
      style={[styles.recordContainer, {marginVertical: 15, width: '60%'}]}
      activeOpacity={0.7}
      onPress={props.onPress}>
      <View
        style={[styles.button, {backgroundColor: '#3280cf', borderRadius: 10}]}>
        <Text style={[styles.text, {fontSize: props.fontSize, alignSelf: 'center'}]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
