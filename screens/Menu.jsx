/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';

const Menu = props => {
  const list = [
    {
      id: 1,
      name: 'My Matches',
      iconName: require('../assets/icons/matches.png'),
      // onPress: ()=> props.navigation.navigate("Home")
    },
    {
      id: 2,
      name: 'My Tournaments',
      iconName: require('../assets/icons/trophy.png'),
      // onPress: ()=> props.navigation.navigate("Home")
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
      // onPress: ()=> props.navigation.navigate("Home")
    },
    {
      id: 5,
      name: 'My Clubs',
      iconName: require('../assets/icons/club.png'),
      //   onPress: ()=> props.navigation.navigate("Club Registration")
    },
    {
      id: 6,
      name: 'Start Match',
      iconName: require('../assets/icons/start.png'),
      onPress: () => props.navigation.navigate('Innings'),
    },
    {
      id: 7,
      name: 'Create Tournament',
      iconName: require('../assets/icons/flag.png'),
      onPress: ()=> props.navigation.navigate("Create Tournament")
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
      // onPress: ()=> props.navigation.navigate("Home")
    },
  ];
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={[styles.image, {width: 130, height: 130}]}
        />
        <Text style={styles.name}>Player Name</Text>
        <View style={{marginBottom: 50}}>
          {list.map(item => (
            <TouchableOpacity activeOpacity={0.7} onPress={item.onPress}>
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
      </View>
    </ScrollView>
  );
};

export default Menu;
