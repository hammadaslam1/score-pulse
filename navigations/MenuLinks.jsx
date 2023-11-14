/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Menu from '../screens/Menu';
import MyProfile from '../screens/MyProfile';
import EditProfile from '../screens/EditProfile';
import Innings from '../screens/Innings';
import RegisterClub from '../screens/RegisterClub';
import CreateTournament from '../screens/CreateTournament';

const stack = createNativeStackNavigator();

const MenuLinks = () => {
  return (
    <NavigationContainer independent={true}>
      <stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName="Menu">
        <stack.Screen name="Menu" component={Menu} options={styles.headerSpecial} />
        <stack.Screen name="My Profile" component={MyProfile} options={styles.header} />
        <stack.Screen name="Edit Profile" component={EditProfile} options={styles.header} />
        <stack.Screen name="Innings" component={Innings} options={styles.header} />
        <stack.Screen name="Club Registration" component={RegisterClub} options={styles.header} />
        <stack.Screen name="Create Tournament" component={CreateTournament} options={styles.header} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerSpecial: {
    title: '',
    headerTintColor: '#fff',
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: '#1058ad',
    },
    headerTitle: () => (
      <Image
        source={require('../assets/logos/splash.png')}
        alt="app logo"
        style={{height: 30, width: 170, alignSelf: 'center'}}
      />
    ),
    headerTitleAlign: 'center',
  },
  header: {
    headerTintColor: '#fff',
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: '#1058ad',
    },
    headerTitleAlign: 'center',
  },
});

export default MenuLinks;
