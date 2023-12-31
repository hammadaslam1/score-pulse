/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Styles';
import database from '@react-native-firebase/database';
import NothingCard from './NothingCard';

const ClubCard = props => {
  const [clubData, setClubData] = useState([]);
  const handleSnapshot = () => {
    const myClubRef = database().ref('/Clubs').limitToFirst(5);
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
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={props.horizontal}
      style={{marginRight: 0, paddingBottom: 10}}>
      {clubData.length >= 1 ? (
        clubData.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={{
              borderRadius: 30,
              overflow: 'hidden',
              marginLeft: 10,
              // width: '100%',
              elevation: 5,
              marginBottom: 10,
              marginRight: 10,
            }}>
            <View
              style={[
                styles.recordBox,
                {
                  flex: 1,
                  flexDirection: 'row',
                  borderRadius: 50,
                  margin: 0,
                  // width: '100%',
                  minWidth: 300,
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                },
              ]}>
              <ImageBackground
                style={{
                  flex: 2,
                  backgroundColor: '#1058ad',
                  width: '100%',
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../assets/icons/backgroundPlaceholder.png')}>
                <View>
                  <Image
                    source={require('../../assets/icons/clubProfile.png')}
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
                    style={[styles.topic, {fontWeight: 'bold', fontSize: 12}]}>
                    {item.Club_Name}
                  </Text>
                  <Text
                    style={[styles.topic, {marginVertical: 10, fontSize: 12}]}>
                    {item.City}
                  </Text>
                  <Text style={[styles.topic, {fontSize: 11}]}>
                    Since {item.Established_Year}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../assets/icons/pakistan.png')}
                    style={{width: 15, height: 15, marginHorizontal: 2}}
                  />
                  <Image
                    source={
                      item.isTennis
                        ? require('../../assets/icons/tennis.png')
                        : require('../../assets/icons/place.png')
                    }
                    style={{width: 15, height: 15, marginHorizontal: 2}}
                  />
                  <Image
                    source={
                      item.isLeather
                        ? require('../../assets/icons/leatherBall.png')
                        : require('../../assets/icons/place.png')
                    }
                    style={{width: 15, height: 15, marginHorizontal: 2}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <NothingCard />
      )}
    </ScrollView>
  );
};

export default ClubCard;
