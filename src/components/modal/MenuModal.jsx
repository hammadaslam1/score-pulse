/* eslint-disable prettier/prettier */

/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Styles';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import PrimaryButton from '../buttons/PrimaryButton';

const MenuModal = props => {
  const dispatch = useDispatch();

  const list = [
    {
      id: 1,
      name: 'My Matches',
      iconName: require('../../assets/icons/matches.png'),
      onPress: props.myMatches,
    },
    {
      id: 2,
      name: 'My Tournaments',
      iconName: require('../../assets/icons/trophy.png'),
      onPress: props.myTournaments,
    },
    {
      id: 3,
      name: 'Profile',
      iconName: require('../../assets/icons/profile.png'),
      onPress: props.myProfile,
    },
    {
      id: 4,
      name: 'My Team',
      iconName: require('../../assets/icons/team.png'),
      onPress: props.myTeam,
    },
    {
      id: 5,
      name: 'My Clubs',
      iconName: require('../../assets/icons/club.png'),
      onPress: props.myClubs,
    },
    {
      id: 6,
      name: 'Start Match',
      iconName: require('../../assets/icons/start.png'),
      onPress: props.openMatch,
    },
    {
      id: 7,
      name: 'Create Tournament',
      iconName: require('../../assets/icons/flag.png'),
      onPress: props.createTournament,
    },
    {
      id: 8,
      name: 'Register as Club',
      iconName: require('../../assets/icons/register.png'),
      onPress: props.clubRegistration,
    },
    {
      id: 9,
      name: 'Settings',
      iconName: require('../../assets/icons/settings.png'),
      // onPress: props.settings
    },
  ];

  const handleFunction = fun => {
    fun;
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visibility}
        onRequestClose={() => {
          props.setMenu(false);
        }}>
        <View style={[styles.modalContainer, {backgroundColor: '#fff', marginTop: 10}]}>
          <TouchableOpacity
            style={{shadowColor: '#000'}}
            onPress={() => props.setMenu(false)}>
            <Image
              source={require('../../assets/icons/downArrow.png')}
              style={{width: 30, height: 30, padding: 10, alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <View style={{shadowRadius: 5, shadowColor: '#f00'}}>
            <Text
              style={[
                styles.align,
                styles.topic,
                {color: '#1058ad', fontWeight: 'bold', marginTop: 15},
              ]}>
              Menu
            </Text>
          </View>
          <View style={{padding: 10, marginVertical: 10}}>
            <ScrollView
              // style={{maxHeight:400}}
            >
              {list.map((item, i) => (
                <TouchableOpacity
                  key={'' + i}
                  activeOpacity={0.7}
                  onPress={() => {
                    // console.log(item.onPress);
                    // handleFunction(item.onPress);
                    props.setMenu(false);
                    item.onPress ? item.onPress() : '';
                  }}
                  //   style={{backgroundColor: '#0002'}}
                >
                  {/* <View style={styles.vertDivider} /> */}
                  <View style={[styles.listContainer, {marginLeft: 10}]}>
                    <Image
                      source={item.iconName}
                      alt="app logo"
                      style={{height: 35, width: 35, tintColor: '#1058ad'}}
                    />
                    <Text style={[styles.text, {color: '#1058ad'}]}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <PrimaryButton
              title={'Sign out'}
              style={{
                marginBottom: 20,
                backgroundColor: '#1058ad',
              }}
              onPress={props.handleSignOut}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const inputStyles = StyleSheet.create({
  input: {
    marginHorizontal: 65,
    backgroundColor: 'transparent',
    marginVertical: 10,
    padding: 5,
    borderBottomColor: '#3280cf',
    color: '#1058ad',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
});

export default MenuModal;
