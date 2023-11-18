/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  Button,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import database from '@react-native-firebase/database';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth'

const MyClub = () => {
const user = auth().currentUser
  const [clubData, setClubData] = useState([]);
  const handleSnapshot = () => {
    const myClubRef = database().ref('/Clubs').orderByChild('ownerID').equalTo(user.uid);
    myClubRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];

      for (const element in data) {
        newArr.push({
          id: element,
          ...data[element],
        });
        setClubData(newArr);
      }
    });
  };
  useEffect(() => {
    handleSnapshot();
    console.log(clubData);
  }, [1, 2]);
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={styles.container}>
        <View style={[styles.recordContainer, {overflow: 'hidden'}]}>
          {clubData.map((data, index) => (
            <View
              key={index}
              style={[
                styles.recordBox,
                {
                  width: 370,
                  flexDirection: 'row',
                  borderRadius: 50,
                  margin: 0,
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                },
              ]}>
              <ImageBackground
                style={{
                  flex: 2,
                  backgroundColor: '#1058ad',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../assets/icons/backgroundPlaceholder.png')}>
                <View>
                  <Image
                    source={require('../assets/icons/clubProfile.png')}
                    style={{width: 60, height: 60}}
                  />
                </View>
              </ImageBackground>
              <View
                style={{
                  flex: 3,
                  padding: 20,
                  paddingVertical: 20,
                  backgroundColor: '#3280cf',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={[styles.topic, {fontWeight: 'bold', fontSize: 13}]}>
                    {data.Club_Name}
                  </Text>
                  <Text
                    style={[styles.topic, {marginVertical: 10, fontSize: 13}]}>
                    {data.City}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../assets/icons/pakistan.png')}
                    style={{width: 15, height: 15, marginHorizontal: 2}}
                  />
                  <Image
                    source={require('../assets/icons/leatherBall.png')}
                    style={{width: 15, height: 15, marginHorizontal: 2}}
                  />
                  <Image
                    source={require('../assets/icons/tennis.png')}
                    style={{width: 15, height: 15, marginHorizontal: 2}}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MyClub;
