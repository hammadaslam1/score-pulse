/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import DatePicker from 'react-native-date-picker';

const RegisterClub = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const register = ['Club Name', 'City'];
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
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
                {i}
              </Text>
              <SecondaryInput placeholder={i} />
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
              Established Year
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
                  marginTop: 20
                },
              ]}
              onPress={() => setStartOpen(true)}>
              {
                startDate.getFullYear()}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.container, {marginTop: 100}]}>
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
            setStartDate(date);
            //   alert(date.getFullYear());
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
