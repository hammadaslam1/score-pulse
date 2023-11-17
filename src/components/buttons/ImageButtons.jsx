/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

const ImageButtons = props => {
  const handlePress = () => {
    props.navigation.navigate('Menu');
  };

  return (
    <Pressable onPress={() => {handlePress();}}>
      <Image
        source={require('../../assets/logos/menu.png')}
        alt="app logo"
        style={{tintColor: '#fff', width: 40, height: 40}}
      />
    </Pressable>
  );
};

export default ImageButtons;
