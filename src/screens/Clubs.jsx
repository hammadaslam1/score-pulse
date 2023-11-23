/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
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
import ClubCard from '../components/homeCards/ClubCard';

const Clubs = () => {
  const user = auth().currentUser;
  const [clubData, setClubData] = useState([]);
  // const handleSnapshot = () => {
  //   const myClubRef = database().ref('/Clubs');
  //   myClubRef.on('value', snapshot => {
  //     const data = snapshot.val();
  //     const newArr = [];
  //     const temp = [];

  //     for (const element in data) {
  //       newArr.push({
  //         id: element,
  //         ...data[element],
  //       });
  //     }
  //     // setClubData([]);
  //     for (const i in newArr) {
  //       temp.push({
  //         id: i,
  //         ...newArr[i],
  //       });
  //     }
  //     setClubData(temp);
  //   });
  // };
  // useEffect(() => {
  //   handleSnapshot();
  // }, []);
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={{marginVertical: 20}}>
        <View key={'a'} style={styles.container}>
          <ClubCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default Clubs;
