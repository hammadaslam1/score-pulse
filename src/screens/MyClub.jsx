/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import database from '@react-native-firebase/database';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const MyClub = () => {
  const user = auth().currentUser;
  const [clubData, setClubData] = useState([]);
  const handleSnapshot = () => {
    const myClubRef = database()
      .ref('/Clubs')
      .orderByChild('ownerID')
      .equalTo(user.uid);
    myClubRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];
      const temp = [];

      for (const element in data) {
        newArr.push({
          id: element,
          ...data[element],
        });
      }
      // setClubData([]);
      for (const i in newArr) {
        temp.push({
          id: i,
          ...newArr[i],
        });
      }
      setClubData(temp);
    });
  };
  useEffect(() => {
    handleSnapshot();
  }, []);
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={[styles.container, {marginVertical: 30}]}>
        {clubData.map((data, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              marginVertical: 10,
              elevation: 5,
              // opacity: 0.1,
            }}>
            <View
              style={[
                styles.recordBox,
                {
                  width: 370,
                  flexDirection: 'row',
                  borderRadius: 50,
                  margin: 0,
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                  // opacity: 0.5
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
                  // opacity: 0.8
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
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default MyClub;
