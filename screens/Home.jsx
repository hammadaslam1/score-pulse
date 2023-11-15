/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import {View, Text, ScrollView, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';

const Home = props => {
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            tintColor: '#ddd',
            alignSelf: 'flex-end',
            margin: 10,
          }}
          onPress={() => props.navigation.navigate('Menu')}>
          <Image
            source={require('../assets/logos/menu.png')}
            style={{
              tintColor: '#ddd',
              alignSelf: 'flex-end',
              margin: 10,
              width: 45,
              height: 45,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: '#bbb',
            }}
            onPress={() => props.navigation.navigate('menu')}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
