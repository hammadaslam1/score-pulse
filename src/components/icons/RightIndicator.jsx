/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';

const RightIndicator = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../../assets/icons/downArrow.png')}
        style={{
          transform: [{rotate: '270deg'}],
          width: 15,
          height: 15,
          tintColor: '#fff',
          marginRight: -10,
        }}
      />
      <Image
        source={require('../../assets/icons/downArrow.png')}
        style={{
          transform: [{rotate: '270deg'}],
          width: 15,
          height: 15,
          tintColor: '#fff',
          marginRight: -10,
        }}
      />
      <Image
        source={require('../../assets/icons/downArrow.png')}
        style={{
          transform: [{rotate: '270deg'}],
          width: 15,
          height: 15,
          tintColor: '#fff',
        }}
      />
    </View>
  );
};

export default RightIndicator;
