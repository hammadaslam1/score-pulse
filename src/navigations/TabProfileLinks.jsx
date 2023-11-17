/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyProfile from '../screens/MyProfile';

const Tab = createMaterialTopTabNavigator();

const TabProfileLinks = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="My Profile" component={MyProfile} />
      {/* <Tab.Screen name="Registration" component={Auth} /> */}
    </Tab.Navigator>
  );
};

export default TabProfileLinks;
