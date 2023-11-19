/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Auth from '../screens/Auth';
import MenuLinks from './MenuLinks';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import MyProfile from '../screens/MyProfile';
import ProfileCard from '../components/homeCards/ProfileCard';
import Menu from '../screens/Menu';

const stack = createStackNavigator();
const NavLinks = props => {
  const user = auth().currentUser;
  return (
    <NavigationContainer independent={true}>
      <stack.Navigator
        initialRouteName={!user ? 'Auth' : 'Home'}
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Auth" gestureEnabled={true} component={Auth} />
        <stack.Screen
          name="Menu Links"
          gestureEnabled={true}
          component={MenuLinks}
        />
        <stack.Screen name="Home" gestureEnabled={true} component={Home} />
        <stack.Screen name="ProfileCard" gestureEnabled={true} component={ProfileCard} />
        <stack.Screen name="My Profile" gestureEnabled={true} component={MyProfile} />
        <stack.Screen name="Menu" gestureEnabled={true} component={Menu} />
        {/* <stack.Screen name="NavLinks" gestureEnabled={true} component={NavLinks} /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default NavLinks;
