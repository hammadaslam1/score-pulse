/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyProfile from '../screens/MyProfile';
import Auth from '../screens/Auth';
import EditProfile from '../screens/EditProfile';

const stack = createNativeStackNavigator();

const NavLinks = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Registration" component={Auth} />
        <stack.Screen name="My Profile" component={MyProfile} />
        <stack.Screen name="Edit Profile" component={EditProfile} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default NavLinks;
