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
import TeamSelector from '../components/modal/TeamSelector';
import TossModal from '../components/modal/TossModal';

const OpenMatch = props => {
  const teamA = useSelector(state => state.TeamAReducer.teamName);
  const [isToss, setIsToss] = useState(false);

  const teamB = useSelector(state => state.TeamBReducer.teamName);
  const totalOvers = useSelector(state => state.MatchFormatReducer.totalOvers);
  const ballType = useSelector(state => state.MatchFormatReducer.ballType);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const pic = Math.floor(Math.random() * 33);
  const arr = [
    {type: 'TEAM_SELECTOR_A', name: 'Team A', reducer: teamA},
    {type: 'TEAM_SELECTOR_B', name: 'Team B', reducer: teamB},
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
              key={j}
              style={{
                padding: 20,
              }}>
              <TeamSelector
                type={i.type}
                name={i.name}
                reducer={i.reducer}
                pic={pic}
              />
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
            onPress={() => setIsToss(true)}>
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
        {isToss ? <TossModal visibility={isToss} onPress={()=>setIsToss(!isToss)} press={()=>props.navigation.navigate('Innings')} setIsToss={setIsToss} /> : ''}
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
