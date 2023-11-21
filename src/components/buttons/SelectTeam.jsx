/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const SelectTeam = props => {
  return (
    <>
      <Text
        style={[
          styles.topic,
          {fontSize: 12, color: '#fffd', alignSelf: 'center'},
        ]}>
        Open Match
      </Text>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={require('../../assets/icons/plus.png')}
          style={{
            borderRadius: 50,
            width: 80,
            height: 80,
            borderWidth: 2,
            borderColor: '#fff',
            marginVertical: 20,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.topic,
          {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
            alignSelf: 'center',
          },
        ]}>
        {props.name}
      </Text>
    </>
  );
};

export default SelectTeam;
