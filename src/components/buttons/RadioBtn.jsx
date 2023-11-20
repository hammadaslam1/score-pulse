/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const RadioBtn = props => {
  const playerType = props.playerType;
  const data = props.data;
  return (
    <TouchableOpacity activeOpacity={1} style={styles.radioButton} onPress={props.onPress}>
      <View style={styles.radioWrapper}>
        <View style={styles.radioCircle} onPress={props.onPress}>
          {data == playerType ? <View style={styles.radioBg} /> : ''}
        </View>
        <Text style={styles.radioLabel} onPress={props.onPress}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    color: '#ffffff',
  },
  radioLabel: {
    marginRight: 10,
    fontSize: 17,
    color: '#fff',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'white',
    height: 13,
    width: 13,
    borderRadius: 10,
  },
});

export default RadioBtn;
