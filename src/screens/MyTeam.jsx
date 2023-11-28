/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const MyTeam = props => {
  const [loading, setLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [playerData, setPlayerData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const array = [];
  const handlePlayers = () => {
    const playerRef = database().ref('team/myTeam/' + auth().currentUser.uid);
    playerRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];

      for (let i in data) {
        // console.log(data[i]);
        newArr.push(data[i]);
        // console.log(newArr);
      }
      setPlayerData(newArr);
    });
    // handleTeam();
  };
  const handleTeam = () => {
    handlePlayers();
    // for (let i in playerData) {
    // console.log(playerData[i].player);
    const teamRef = database()
      .ref('team/players')
      .orderByChild('teamOwner')
      .equalTo(auth().currentUser.uid);
    teamRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];

      for (let j in data) {
        newArr.push(data[j]);
      }
      setTeamData(newArr);
      console.log(newArr);
    });
    // }
  };

  useEffect(() => {
    handleTeam();
  }, []);

  return (
    <ScrollView style={[styles.fullHeight, {backgroundColor: '#1058ad'}]}>
      <View style={[styles.fullHeight]}>
        <Spinner visible={loading} color="#3280cf" cancelable={true} />
        <View
          style={{
            borderRadius: 15,
            overflow: 'hidden',
            marginVertical: 5,
            marginHorizontal: 2,
            elevation: 5,
          }}>
          {teamData &&
            teamData.map((data, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.7}
                style={{
                  backgroundColor: '#3280cf',
                  borderBottomColor: '#1058ad',
                  borderBottomWidth: 1,
                }}
                // onPress={() => handleTeam(i.userId)}
              >
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                  }}>
                  <Image
                    source={require('../assets/icons/clubProfile.png')}
                    style={{
                      // borderRadius: 50,
                      padding: 5,
                      width: 40,
                      height: 40,
                      // borderWidth: 2,
                      // borderColor: '#1058ad',
                      marginRight: 20,
                      alignSelf: 'center',
                    }}
                  />
                  <View style={{}}>
                    <Text
                      style={[
                        styles.topic,
                        {
                          color: '#fff',
                          fontSize: 17,
                          marginVertical: 5,
                          // fontWeight: 'bold',
                        },
                      ]}>
                      {data.fullname}
                    </Text>
                    <Text
                      style={[
                        styles.topic,
                        {
                          color: '#fffa',
                          fontSize: 14,
                          marginBottom: 5,
                          //   marginHorizontal: 5,
                        },
                      ]}>
                      {data.playingRole}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: '#3280cf',
              width: 180,
              padding: 10,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 50,
              marginTop: 20,
              elevation: 5,
              margin: 5,
            }}
            onPress={() => props.navigation.navigate('Add Players')}>
            <Image
              source={require('../assets/icons/plus.png')}
              style={{tintColor: '#fff', width: 40, height: 40, marginRight: 5}}
            />
            <Text
              style={[
                styles.align,
                {fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace'},
              ]}>
              Add Player
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyTeam;
