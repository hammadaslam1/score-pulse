/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../styles/Styles';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

const Home = props => {
  const user = auth().currentUser;
  const userStore = useSelector(state => state.UserReducer.user);
  const dispatch = useDispatch();
  if (!user) {
    props.navigation.navigate('Auth');
  } else {
    return (
      <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
        <View style={styles.container}>
          <StatusBar animated={true} backgroundColor="#1058ad" />
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
  }
};

export default Home;
