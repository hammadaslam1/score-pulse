/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {PROFILE_DATA} from '../../redux/types/Types';

const ProfileCard = props => {
  const dispatch = useDispatch();
  const record = [
    {
      matches: 'Matches',
      runs: 'Runs',
      wickets: 'Wickets',
    },
  ];
  const user = auth().currentUser;
  const [userData, setUserData] = useState([]);
  const [statData, setStatData] = useState([]);
  const [myData, setMyData] = useState({fullname: '-------'});
  const [name, setName] = useState('-');
  // console.log(myData.fullname);
  const handleSnapshot = () => {
    const userRef = database().ref('users/' + user.uid);
    const statRef = database().ref('players/records/' + user.uid);
    userRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];
      for (let i in data) {
        newArr.push(data[i]);
      }
      setMyData(data);
      setUserData(newArr);
      // console.log(data);
      dispatch({
        type: PROFILE_DATA,
        phoneNo: data ? data.number : '',
        jerseyNo: data ? data.jerseyNo : '',
        email: data ? data.email : '',
        name: data ? data.fullname : '',
        mainRole: data ? data.playingRole : '',
        bowlingStyle: data ? data.bowlingStyle : '',
        username: data ? data.username : '',
        battingStyle: data ? data.battingStyle : '',
        club: data ? data.club : '',
      });
      setName(data ? data.fullname : '-');
    });
    statRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];
      for (let i in data) {
        newArr.push(data[i]);
      }
      setStatData(newArr);
    });
  };
  useEffect(() => {
    handleSnapshot();
  }, []);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{flex: 1, paddingBottom: 10}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          borderRadius: 30,
          overflow: 'hidden',
          elevation: 5,
          marginBottom: 10,
          marginHorizontal: 3,
        }}
        {...props}>
        <View
          style={[
            styles.recordBox,
            {
              flex: 1,
              flexDirection: 'row',
              borderRadius: 50,
              margin: 0,
              paddingHorizontal: 0,
              paddingVertical: 0,
            },
          ]}>
          <View
            style={{
              flex: 1,
              padding: 20,
              paddingVertical: 10,
              backgroundColor: '#3280cf',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={[
                  styles.topic,
                  {textAlign: 'left', fontSize: 16, fontWeight: 'bold'},
                ]}>
                {name}
              </Text>
              <View
                style={[
                  styles.vertDivider,
                  {
                    backgroundColor: '#1058ad',
                    padding: 5,
                    borderRadius: 50,
                    marginTop: 5,
                  },
                ]}
              />
            </View>
            {statData.map((item, i) => (
              <View key={i} style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      marginTop: 20,
                    }}>
                    Matches
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      fontSize: 22,
                      fontWeight: 'normal',
                    }}>
                    {item.matches ? item.matches : 0}
                  </Text>
                </View>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      marginTop: 20,
                    }}>
                    Runs
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      fontSize: 22,
                      fontWeight: 'normal',
                    }}>
                    {item.runs ? item.runs : 0}
                  </Text>
                </View>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      marginTop: 20,
                    }}>
                    Wickets
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      fontSize: 22,
                      fontWeight: 'normal',
                    }}>
                    {item.wickets ? item.wickets : 0}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileCard;
