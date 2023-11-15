/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import RadioBtn from '../components/buttons/RadioBtn';

const EditProfile = () => {
  const [playerMainType, setPlayerMainType] = useState('');
  const [playerSubType, setPlayerSubType] = useState('');
  const [playerBowlerType, setPlayerBowlerType] = useState('');

  const mainTypes = ['Batter', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];
  const subTypes = ['Right-Handed', 'Left-Handed'];
  const bowlerTypes = ['Fast Bowler', 'Spin Bowler'];
  const allRoundTypes = ['Batting All-Rounder', 'Bowling All-Rounder'];

  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <Image
          source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={styles.image}
        />
        <SecondaryInput value="Player Name" />
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Mail ID</Text>
        </View>
        <SecondaryInput value="Mail ID" />
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Playing Role</Text>
        </View>
        <View style={styles.radioGroup}>
          {mainTypes.map((data, i) => (
            <RadioBtn
              key={'' + i}
              value={data}
              title={data}
              playerType={playerMainType}
              data={data}
              onPress={() => {
                setPlayerMainType(data);
              }}
            />
          ))}
        </View>
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Bating Style</Text>
        </View>
        <View style={styles.radioGroup}>
          {subTypes?.map((data, i) => (
            <RadioBtn
              key={'' + i}
              value={data}
              title={data}
              playerType={playerSubType}
              data={data}
              onPress={() => setPlayerSubType(data)}
            />
          ))}
        </View>
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Bowling Style</Text>
        </View>
        <View style={styles.radioGroup}>
          {bowlerTypes?.map((data, i) => (
            <RadioBtn
              key={'' + i}
              value={data}
              title={data}
              playerType={playerBowlerType}
              data={data}
              onPress={() => setPlayerBowlerType(data)}
            />
          ))}
        </View>
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Jersey No.</Text>
        </View>
        <SecondaryInput value="Jersey No." keyboardType="numeric" />
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Country</Text>
        </View>
        {/* <SecondaryInput value="Country" /> */}
      </View>
    </ScrollView>
  );
};

export default EditProfile;
