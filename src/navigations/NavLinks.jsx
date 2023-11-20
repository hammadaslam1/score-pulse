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
import MyMatches from '../screens/MyMatches';
import {Image, StyleSheet} from 'react-native';
import EditProfile from '../screens/EditProfile';
import Innings from '../screens/Innings';
import OpenMatch from '../screens/OpenMatch';
import RegisterClub from '../screens/RegisterClub';
import CreateTournament from '../screens/CreateTournament';
import MyClub from '../screens/MyClub';
import MyTournaments from '../screens/MyTournaments';
import Tournaments from '../screens/Tournaments';
import Clubs from '../screens/Clubs';
import AddScores from '../screens/AddScores';

const stack = createStackNavigator();
const NavLinks = props => {
  // const user = auth().currentUser;
  return (
    <NavigationContainer independent={true}>
      <stack.Navigator
        initialRouteName={'Auth'}
        screenOptions={{headerShown: true}}>
        <stack.Screen
          name="Auth"
          gestureEnabled={true}
          options={{headerShown: false}}
          component={Auth}
        />
        <stack.Screen
          name="Add Scores"
          gestureEnabled={true}
          options={styles.header}
          component={AddScores}
        />

        <stack.Screen
          name="Home"
          gestureEnabled={true}
          options={{headerShown: false}}
          component={Home}
        />
        <stack.Screen
          name="ProfileCard"
          gestureEnabled={true}
          component={ProfileCard}
          options={styles.header}
        />
        <stack.Screen
          name="My Profile"
          gestureEnabled={true}
          component={MyProfile}
          options={styles.header}
        />
        <stack.Screen
          name="Menu"
          gestureEnabled={true}
          options={styles.header}
          component={Menu}
        />
        <stack.Screen
          name="My Tournaments"
          gestureEnabled={true}
          options={styles.header}
          component={MyTournaments}
        />
        <stack.Screen
          name="Tournaments"
          gestureEnabled={true}
          options={styles.header}
          component={Tournaments}
        />
        <stack.Screen
          name="Clubs"
          gestureEnabled={true}
          options={styles.header}
          component={Clubs}
        />
        <stack.Screen
          name="My Matches"
          gestureEnabled={true}
          component={MyMatches}
          options={styles.header}
        />
        <stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={styles.header}
        />
        <stack.Screen
          name="Innings"
          component={Innings}
          options={styles.header}
        />
        <stack.Screen
          name="Open Match"
          component={OpenMatch}
          options={styles.header}
        />
        <stack.Screen
          name="Club Registration"
          component={RegisterClub}
          options={styles.header}
        />
        <stack.Screen
          name="Create Tournament"
          component={CreateTournament}
          options={styles.header}
        />
        <stack.Screen
          name="My Clubs"
          component={MyClub}
          options={styles.header}
        />
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

export default NavLinks;
