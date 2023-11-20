/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import DatePicker from 'react-native-date-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const CreateTournament = props => {
  //   const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endOpen, setEndOpen] = useState(false);
  const bType = ['Tape Ball', 'Leather Ball'];
  const [isType, setIsType] = useState('');
  const [ballType, setBallType] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [tournament, setTournament] = useState('');
  const [clubName, setClubName] = useState('');
  const [city, setCity] = useState('');
  const [sessionYear, setSessionYear] = useState('');
  const [isLeather, setIsLeather] = useState(false);
  const [isTennis, setIsTennis] = useState(true);
  const register = [
    {text: 'Tournament Name', fun: setTournament},
    {text: 'Club Name', fun: setClubName},
    {text: 'City', fun: setCity},
    {text: 'Season/Year', fun: setSessionYear},
  ];

  const user = auth().currentUser;

  const handleTour = () => {
    if (ballType == 'Leather Ball') {
      setIsLeather(true);
      setIsFilled(false);
    }
    if (ballType == 'Tape Ball') {
      setIsFilled(true);
      setIsLeather(false);
    }
    if (
      startDate &&
      endDate &&
      tournament &&
      clubName &&
      city &&
      sessionYear &&
      (isLeather || isTennis)
    ) {
      Alert.alert(
        'Confirm Tournament Creation',
        `Club name: ${clubName}\nCity: ${city}\nSession: ${sessionYear}\nLeather: ${isLeather}\nTennis: ${isTennis}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nTournament Name: ${tournament}`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Register',
            onPress: async () => {
              setLoading(true);
              const userRef = database().ref('/Tournaments').push();
              userRef
                .set({
                  ownerID: user.uid,
                  Club_Name: clubName,
                  City: city,
                  Tournament: tournament,
                  Session: sessionYear,
                  isLeather: isLeather,
                  isTennis: isTennis,
                  startDate:
                    startDate.getDate() +
                    '-' +
                    startDate.getMonth() +
                    '-' +
                    startDate.getFullYear(),
                  endDate:
                    endDate.getDate() +
                    '-' +
                    endDate.getMonth() +
                    '-' +
                    endDate.getFullYear(),
                })
                .then(() => {
                  setLoading(false);
                  Alert.alert(
                    'Success',
                    'Your Tournament has successfully been created',
                    [
                      {
                        text: 'Close',
                        onPress: () => props.navigation.goBack(),
                        style: 'cancel',
                      },
                    ],
                  );
                })
                .catch(() => {
                  Alert.alert('failed');
                });
            },
          },
        ],
      );
    } else {
      setLoading(false);
      setIsFilled(true);
    }
  };
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <Spinner visible={loading} color="#3280cf" cancelable={true} />
        <View style={{marginTop: 30}}>
          {register.map((data, i) => (
            <View key={'' + i}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 20,
                    alignSelf: 'flex-start',
                    marginTop: 25,
                    marginRight: 20,
                    fontFamily: 'monospace',
                  },
                ]}>
                {data.text}
              </Text>
              <SecondaryInput
                placeholder={data.text}
                onChangeText={data.fun}
                onChange={() => setIsFilled(false)}
              />
            </View>
          ))}
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                  fontFamily: 'monospace',
                  flex: 1,
                  textAlign: 'center',
                },
              ]}>
              Start Date
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                  fontFamily: 'monospace',
                  flex: 1,
                  textAlign: 'center',
                },
              ]}>
              End Date
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  flex: 1,
                  textAlign: 'center',
                  borderBottomColor: '#3280cf',
                  borderBottomWidth: 2,
                  paddingBottom: 8,
                },
              ]}
              onPress={() => setStartOpen(true)}>
              {startDate.getDate() +
                '-' +
                startDate.getMonth() +
                '-' +
                startDate.getFullYear()}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  flex: 1,
                  textAlign: 'center',
                  borderBottomColor: '#3280cf',
                  borderBottomWidth: 2,
                  paddingBottom: 8,
                },
              ]}
              onPress={() => setEndOpen(true)}>
              {endDate.getDate() +
                '-' +
                endDate.getMonth() +
                '-' +
                endDate.getFullYear()}
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                fontSize: 20,
                alignSelf: 'flex-start',
                marginTop: 25,
                marginRight: 20,
                fontFamily: 'monospace',
              },
            ]}>
            Ball Type
          </Text>
          <View style={[styles.innerRecord, {marginTop: 25}]}>
            {bType.map((ball, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.7}
                onPress={() => {
                  setBallType(ball);
                  setIsType(ball);
                }}>
                <View
                  style={{
                    padding: 8,
                    width: 100,
                    flex: 1,
                    alignItems: 'center',
                    borderRadius: 10,
                    elevation: isType == ball ? 5 : 0,
                    backgroundColor: isType == ball ? '#fff' : '#1058ad',
                  }}>
                  <Text
                    style={{
                      color: isType == ball ? '#1058ad' : '#fff',
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    {ball}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <DatePicker
            modal
            mode="date"
            title={'Start Date'}
            open={startOpen}
            date={startDate}
            minimumDate={new Date()}
            onConfirm={date => {
              setStartDate(date);
              //   alert(date.getFullYear());
              setStartOpen(false);
            }}
            onCancel={() => {
              setStartOpen(false);
            }}
          />
          <DatePicker
            modal
            mode="date"
            theme="auto"
            title={'End Date'}
            open={endOpen}
            date={endDate}
            minimumDate={new Date()}
            onConfirm={date => {
              setEndDate(date);
              setEndOpen(false);
            }}
            onCancel={() => {
              setEndOpen(false);
            }}
          />
        </View>
        {isFilled ? (
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'monospace',
              marginTop: 40,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#0ff',
            }}>
            --- Please fill all fields ---
          </Text>
        ) : (
          ''
        )}
        <TouchableOpacity
          style={[styles.container, {marginVertical: 60}]}
          onPress={() => handleTour()}>
          <View
            style={[
              styles.button,
              {backgroundColor: '#3280cf', borderRadius: 10},
            ]}>
            <Text style={styles.text}>Create Tournament</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateTournament;
