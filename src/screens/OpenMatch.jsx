/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

/* eslint-disable react-native/no-inline-styles */

import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import DatePicker from 'react-native-date-picker';
import SecondaryInput from '../components/inputs/SecondaryInput';
import SelectTeam from '../components/buttons/SelectTeam';
import FormatSelector from '../components/modal/FormatSelector';
import {useSelector} from 'react-redux';

const OpenMatch = props => {
  const totalOvers = useSelector(state => state.MatchFormatReducer.totalOvers);
  const ballType = useSelector(state => state.MatchFormatReducer.ballType);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const arr = [
    {id: 1, value: 'Team A'},
    {id: 2, value: 'Team B'},
  ];
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          {arr.map((i, j) => (
            <View
              key={i + j}
              style={{
                padding: 20,
              }}>
              <SelectTeam name={i.value} />
            </View>
          ))}
        </View>
        <SecondaryInput placeholder={'Venue'} />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 30,
            marginTop: 35,
            marginHorizontal: 45,
          }}>
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
                fontSize: 18,
                flex: 1,
                textAlign: 'center',
                borderBottomColor: '#3280cf',
                borderBottomWidth: 2,
                paddingBottom: 8,
              },
            ]}
            onPress={() => setEndOpen(true)}>
            {endDate.getHours() +
              ':' +
              endDate.getMinutes() +
              ':' +
              endDate.getSeconds()}
          </Text>
        </View>
        <FormatSelector placeholder={'Overs / Match Format'} />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={[styles.container, {marginTop: 100, flex: 1}]}>
            <View
              style={[
                styles.button,
                {backgroundColor: '#3280cf', borderRadius: 10, width: 200},
              ]}>
              <Text style={[styles.topic, {alignSelf: 'center'}]}>
                Save Fixtures
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.container, {marginTop: 100, flex: 1}]}
            onPress={() => props.navigation.navigate('Innings')}>
            <View
              style={[
                styles.button,
                {backgroundColor: '#3280cf', borderRadius: 10, width: 200},
              ]}>
              <Text style={[styles.topic, {alignSelf: 'center'}]}>
                Start Match
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          mode="date"
          title={'Date'}
          open={startOpen}
          date={startDate}
          minimumDate={new Date()}
          onConfirm={date => {
            setStartDate(date);
            setStartOpen(false);
          }}
          onCancel={() => {
            setStartOpen(false);
          }}
        />
        <DatePicker
          modal
          mode="time"
          theme="auto"
          title={'Time'}
          open={endOpen}
          date={endDate}
          onConfirm={time => {
            setEndDate(new Date());
            setEndOpen(false);
          }}
          onCancel={() => {
            setEndOpen(false);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default OpenMatch;
