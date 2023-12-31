/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Styles';
import database from '@react-native-firebase/database';
import NothingCard from './NothingCard';
// import auth from '@react-native-firebase/auth';

const TournamentCard = props => {
  const [clubData, setClubData] = useState([]);
  const handleSnapshot = () => {
    const myClubRef = database().ref('/Tournaments');
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
    <ScrollView
      horizontal={props.horizontal}
      showsHorizontalScrollIndicator={false}
      style={{flex: 1, marginRight: 0,paddingBottom: 10}}>
      {clubData.length >= 1 ? (
        clubData.map((data, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={{
              borderRadius: 30,
              overflow: 'hidden',
              marginHorizontal: 10,
              elevation: 5,
              marginBottom: 10,
            }}>
            <View
              style={[
                styles.recordBox,
                {
                  flex: 1,
                  flexDirection: 'row',
                  borderRadius: 50,
                  margin: 0,
                  minWidth: 300,
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                },
              ]}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  backgroundColor: '#3280cf',
                }}>
                <ImageBackground
                  style={{
                    flex: 2,
                    backgroundColor: '#1058ad',
                    height: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('../../assets/icons/backgroundPlaceholder.png')}>
                  <View>
                    <Image
                      source={require('../../assets/icons/clubProfile.png')}
                      style={{width: 70, height: 70}}
                    />
                  </View>
                </ImageBackground>
                {/* <View
                  style={[
                    styles.vertDivider,
                    {
                      backgroundColor: '#1058ad',
                      padding: 8,
                      borderRadius: 50,
                      marginTop: -5,
                      marginLeft: -5,
                    },
                  ]}
                /> */}
                <View style={{padding: 10, paddingHorizontal: 20}}>
                  <Text style={[styles.topic, {marginBottom: 5, fontSize: 12}]}>
                    {data.City}
                  </Text>
                  <Text
                    style={[
                      styles.topic,
                      {marginBottom: 5, fontSize: 15, fontWeight: 900},
                    ]}>
                    {data.Tournament}
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'normal',
                      color: '#fffa',
                    }}>
                    {data.startDate} to {data.endDate}
                  </Text>
                  <Text style={[styles.topic, {fontSize: 12, fontWeight: 900}]}>
                    {data.Club_Name}
                  </Text>
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

export default TournamentCard;
