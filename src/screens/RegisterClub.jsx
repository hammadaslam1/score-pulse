/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const RegisterClub = props => {
  const user = auth().currentUser;

  // const dispatch = useDispatch();

  const [clubName, setClubName] = useState();
  const [city, setCity] = useState();
  const [year, setYear] = useState(new Date().getFullYear());

  const [startDate, setStartDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [loading, setLoading] = useState(false);
  const register = [
    {name: 'Club Name', set: setClubName},
    {name: 'City', set: setCity},
  ];

  const handleClub = () => {
    // setYear(startDate.getFullYear());
    if (clubName && city && year) {
      Alert.alert(
        'Confirm Registration',
        `Club name: ${clubName}\nCity: ${city}\nYear: ${year}`,
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

              const userRef = database().ref('/Clubs/' + user.uid);
              userRef
                .set({
                  ownerID: user.uid,
                  ownerName: user.displayName,
                  Club_Name: clubName,
                  City: city,
                  Established_Year: year,
                })
                .then(() => {
                  setLoading(false);
                  Alert.alert(
                    'Success',
                    'Your Club has successfully been registered',
                    [
                      {
                        text: 'Close',
                        onPress: () => props.navigation.goBack(),
                        style: 'cancel',
                      },
                    ],
                  );
                })
                .catch(e => {
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
        <Text
          style={[
            styles.text,
            {
              fontSize: 25,
              alignSelf: 'flex-start',
              marginTop: 25,
              marginRight: 20,
              fontFamily: 'monospace',
            },
          ]}>
          Register as Club
        </Text>
        <View style={{marginTop: 30}}>
          {register.map((i, j) => (
            <View id={'' + j}>
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
                {i.name} <Text style={{color: '#0ff'}}>*</Text>
              </Text>
              <SecondaryInput
                placeholder={i.name}
                onChange={() => setIsFilled(false)}
                onChangeText={i.set}
              />
            </View>
          ))}
          <View>
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
              Established Year <Text style={{color: '#0ff'}}>*</Text>
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 18,
                  flex: 1,
                  textAlign: 'center',
                  borderBottomColor: '#3280cf',
                  borderBottomWidth: 2,
                  paddingBottom: 8,
                  marginHorizontal: 120,
                  marginTop: 20,
                },
              ]}
              onPress={() => setStartOpen(true)}>
              {year}
            </Text>
          </View>
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
          style={[styles.container, {marginTop: 30}]}
          onPress={() => {
            handleClub();
          }}>
          <View
            style={[
              styles.button,
              {backgroundColor: '#3280cf', borderRadius: 10},
            ]}>
            <Text style={styles.text}>Register</Text>
          </View>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          title={'Start Date'}
          open={startOpen}
          date={startDate}
          maximumDate={new Date()}
          onConfirm={date => {
            setYear(date.getFullYear());
            setStartOpen(false);
          }}
          onCancel={() => {
            setStartOpen(false);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterClub;
