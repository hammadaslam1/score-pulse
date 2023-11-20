/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/Styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const MyProfile = props => {
  const record = [
    {
      type: 'Batting',
      runs: 'Runs',
      average: 'Average',
      scores: 'High Scores',
    },
    {
      type: 'Bowling',
      runs: 'Wickets',
      average: 'Average',
      scores: 'Best Bowling',
    },
    {
      type: 'Fielding',
      runs: 'Catches',
      average: 'Stumpings',
      scores: 'Runouts',
    },
  ];

  // const form = [
  //   'Email ID',
  //   'Playing Role',
  //   'Batting Style',
  //   'Bowling Style',
  //   'Jersey No.',
  //   'Country',
  // ];

  const user = auth().currentUser;
  const [userData, setUserData] = useState([]);
  const [statData, setStatData] = useState([]);
  const [data1, setData1] = useState([]);
  // const [data2, setData2] = useState([]);
  const [userType, setUserType] = useState(['Phone No', 'Jersey No', 'Email ID', 'Name', 'Main Role', 'Bowling Style', 'Batting Style']);
  const handleUserShot = () => {
    const userRef = database().ref('users/' + user.uid);
    userRef.on('value', snapshot => {
      const el = snapshot.val();
      const newArr = [];
      for (let i in el) {
        newArr.push(el[i]);
      }
      setData1(el);
      setUserData(newArr);
    });
  };
  const handleStatShot = () => {
    const statRef = database().ref('players/records/' + user.uid);
    statRef.on('value', snapshot => {
      const el = snapshot.val();
      const newArr = [];
      for (let i in el) {
        newArr.push(el[i]);
      }
      // setData2(el);
      setStatData(newArr);
      console.log(snapshot);
    });
  };
  useEffect(() => {
    handleUserShot();
    handleStatShot();
  }, []);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View>
          <Image
            source={
              // userData.userImage
              // ? require(userData.userImage):
              require('../assets/logos/icon_lite.png')
            }
            alt="app logo"
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>{data1.fullname}</Text>
        <View>
          <Text style={styles.topic}>My Details</Text>
        </View>
        <View style={styles.recordContainer}>
          <View style={styles.recordBox}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              {userData?.map((item, j) => (
                <View key={j} style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={[styles.circle, styles.headCircle]}>
                    <Text
                      style={[
                        styles.align,
                        {fontWeight: 'bold', fontSize: 15},
                      ]}>
                      {userType[j]}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.circle,
                      {alignContent: 'center', justifyContent: 'center'},
                    ]}>
                    <Text style={[styles.align, {fontSize: 15}]}>{item}</Text>
                    {/* <Text style={styles.align}>{j}</Text> */}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.topic}>My Stats</Text>
        </View>
        <View style={styles.recordContainer}>
          {statData.map((item, i) => (
            <View key={i}>
              <View style={styles.recordBox}>
                <Text
                  style={[
                    styles.records,
                    styles.headCircle,
                    {fontWeight: 900, borderRadius: 30, padding: 2},
                  ]}>
                  Batting
                </Text>
                <View style={styles.innerRecord}>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Runs</Text>
                    <Text style={styles.stat}>{item.runs}</Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Average</Text>
                    <Text style={styles.stat}>{item.battingAverage}</Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>High Score</Text>
                    <Text style={styles.stat}>{item.highScore}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.recordBox}>
                <Text
                  style={[
                    styles.records,
                    styles.headCircle,
                    {fontWeight: 900, borderRadius: 30, padding: 2},
                  ]}>
                  Bowling
                </Text>
                <View style={styles.innerRecord}>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Wickets</Text>
                    <Text style={styles.stat}>{item.wickets}</Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Average</Text>
                    <Text style={styles.stat}>{item.bowlingAverage}</Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Best Bowling</Text>
                    <Text style={styles.stat}>{item.bestBowling}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.recordBox}>
                <Text
                  style={[
                    styles.records,
                    styles.headCircle,
                    {fontWeight: 900, borderRadius: 30, padding: 2},
                  ]}>
                  Fielding
                </Text>
                <View style={styles.innerRecord}>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Catches</Text>
                    <Text style={styles.stat}>{item.catches}</Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Stumpings</Text>
                    <Text style={styles.stat}>{item.stumpings}</Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.stat}>
                    <Text style={styles.stat}>Runouts</Text>
                    <Text style={styles.stat}>{item.runouts}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.recordContainer, {marginVertical: 0}]}
          onPress={() => props.navigation.navigate('Add Scores')}>
          <View style={styles.button}>
            <Text
              style={[
                styles.align,
                {fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace'},
              ]}>
              Add Past Scores
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.recordContainer}
          onPress={() => props.navigation.navigate('Edit Profile')}>
          <View style={styles.button}>
            <Text
              style={[
                styles.align,
                {fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace'},
              ]}>
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
