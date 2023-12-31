/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import PrimaryButton from '../components/buttons/PrimaryButton';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const Menu = props => {
  const [loading, setLoading] = useState(false);
  const list = [
    {
      id: 1,
      name: 'My Matches',
      iconName: require('../assets/icons/matches.png'),
      onPress: () => props.navigation.navigate('My Matches'),
    },
    {
      id: 2,
      name: 'My Tournaments',
      iconName: require('../assets/icons/trophy.png'),
      onPress: ()=> props.navigation.navigate("My Tournaments")
    },
    {
      id: 3,
      name: 'Profile',
      iconName: require('../assets/icons/profile.png'),
      onPress: () => props.navigation.navigate('My Profile'),
    },
    {
      id: 4,
      name: 'My Teams',
      iconName: require('../assets/icons/team.png'),
      onPress: ()=> props.navigation.navigate("My Team")
    },
    {
      id: 5,
      name: 'My Clubs',
      iconName: require('../assets/icons/club.png'),
      onPress: () => props.navigation.navigate('My Clubs'),
    },
    {
      id: 6,
      name: 'Start Match',
      iconName: require('../assets/icons/start.png'),
      onPress: () => props.navigation.navigate('Open Match'),
    },
    {
      id: 7,
      name: 'Create Tournament',
      iconName: require('../assets/icons/flag.png'),
      onPress: () => props.navigation.navigate('Create Tournament'),
    },
    {
      id: 8,
      name: 'Register as Club',
      iconName: require('../assets/icons/register.png'),
      onPress: () => props.navigation.navigate('Club Registration'),
    },
    {
      id: 9,
      name: 'Settings',
      iconName: require('../assets/icons/settings.png'),
      // onPress: ()=> props.navigation.navigate("Settings")
    },
  ];
  const handleSignOut = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        setLoading(false);
        props.navigation.popToTop();
      })
      .catch(e => {
        setLoading(false);
        props.navigation.popToTop();
      });
  };
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={[styles.container, {paddingBottom: 30}]}>
        <Spinner visible={loading} color="#3280cf" cancelable={true} />
        <Image
          source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={[styles.image, {width: 130, height: 130}]}
        />
        <Text style={styles.name}>Player Name</Text>
        <View style={{marginBottom: 50}}>
          {list.map((item, i) => (
            <TouchableOpacity
              key={'' + i}
              activeOpacity={0.7}
              onPress={item.onPress}>
              <View style={styles.vertDivider} />
              <View style={styles.listContainer}>
                <Image
                  source={item.iconName}
                  alt="app logo"
                  style={{height: 35, width: 35}}
                />
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <PrimaryButton
          title={'Sign out'}
          style={{
            marginBottom: 20,
          }}
          onPress={() => {
            handleSignOut();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Menu;
