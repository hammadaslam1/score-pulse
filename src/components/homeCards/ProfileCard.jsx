/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ProfileCard = props => {
  const record = [
    {
      matches: 'Matches',
      runs: 'Runs',
      wickets: 'Wickets',
    },
  ];
  const user = auth().currentUser;
  const [userData, setUserData] = useState([]);
  const [myData, setMyData] = useState([]);
  const handleSnapshot = () => {
    const userRef = database().ref('users/' + user.uid);
    userRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];
      for (let i in data) {
        newArr.push(data[i]);
      }
      setMyData(data);
      setUserData(newArr);
    });
  };
  useEffect(() => {
    handleSnapshot();
  }, []);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{flex: 1, marginRight: 20, paddingBottom: 10}}>
      {/* {matchData.map((item, index) => ( */}
      <TouchableOpacity
        //   key={index}
        activeOpacity={0.8}
        style={{
          borderRadius: 30,
          overflow: 'hidden',
          //   marginLeft: 20,
          elevation: 5,
          marginBottom: 10,
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
                // alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.topic,
                  {textAlign: 'left', fontSize: 15, fontWeight: 'bold'},
                ]}>
                {myData.fullname}
              </Text>
              <View
                style={[
                  styles.vertDivider,
                  {backgroundColor: '#1058ad', padding: 1},
                ]}
              />
            </View>
            {/* <View style={{flexDirection: 'row'}}> */}
            {record.map((item, i) => (
              // <View key={i} style={styles.recordBox}>
              <View key={i} style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      marginTop: 20,
                    }}>
                    {item.matches}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    0
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
                    {item.runs}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    0
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
                    {item.wickets}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginVertical: 7,
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    0
                  </Text>
                </View>
              </View>
              // </View>
            ))}
            {/* </View> */}
          </View>
        </View>
      </TouchableOpacity>
      {/* ))} */}
    </ScrollView>
  );
};

export default ProfileCard;
