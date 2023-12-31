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
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import NavLinks from './src/navigations/NavLinks';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

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
  return (
    <Provider store={Store}>
      <NavLinks />
    </Provider>
  );
};

export default App;
