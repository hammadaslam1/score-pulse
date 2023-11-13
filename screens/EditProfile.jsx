/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';

const EditProfile = () => {
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View >
        <Image
          source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={styles.image}
        />
        <SecondaryInput value="Player Name" />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
