/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Alert,
} from 'react-native';
import {useEffect} from 'react';
import Auth from './screens/Auth';
import MyProfile from './screens/MyProfile';
import NavLinks from './navigations/NavLinks';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const App = () => {
  const color = async () => {
    try {
      await changeNavigationBarColor('#1058ad', true, true);
    } catch (error) {
      Alert.alert(error);
    }
  };
  useEffect(() => {
    color();
  }, []);
  return <NavLinks />;
};

export default App;
