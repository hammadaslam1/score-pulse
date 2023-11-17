/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../screens/Auth';
import MenuLinks from './MenuLinks';
import Home from '../screens/Home';

const stack = createNativeStackNavigator();
const NavLinks = props => {
  return (
    <NavigationContainer independent={true}>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Auth" component={Auth} />
        <stack.Screen name="Menu" component={MenuLinks} />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default NavLinks;
