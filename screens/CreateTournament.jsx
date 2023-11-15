/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import DatePicker from 'react-native-date-picker';

const CreateTournament = () => {
  //   const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endOpen, setEndOpen] = useState(false);
  const register = ['Tournament Name', 'Club Name', 'City', 'Season/Year'];
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <View style={{marginTop: 30}}>
          {register.map((data, i) => (
            <View id={'' + i}>
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
                {data}
              </Text>
              <SecondaryInput placeholder={data} />
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
        <TouchableOpacity style={[styles.container, {marginTop: 100}]}>
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
