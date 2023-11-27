/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import Spinner from 'react-native-loading-spinner-overlay';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const AddScores = props => {
  const user = auth().currentUser;

  const [loading, setLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [matches, setMatches] = useState(0);
  const [runs, setRuns] = useState(0);
  const [batAverage, setBatAverage] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [bowlAverage, setBowlAverage] = useState(0);
  const [bestBowl, setBestBowl] = useState(0);
  const [catches, setCatches] = useState(0);
  const [stumpings, setStumpings] = useState(0);
  const [runouts, setRunouts] = useState(0);
  const register = [
    {text: 'Matches', fun: setMatches},
    {text: 'Runs', fun: setRuns},
    {text: 'Batting Average', fun: setBatAverage},
    {text: 'High Score', fun: setHighScore},
    {text: 'Wickets', fun: setWickets},
    {text: 'Bowling Average', fun: setBowlAverage},
    {text: 'Best Bowling', fun: setBestBowl},
    {text: 'Catches', fun: setCatches},
    {text: 'Stumpings', fun: setStumpings},
    {text: 'Runouts', fun: setRunouts},
  ];

  const handleTour = () => {
    setLoading(true);
    const scoreRef = database()
      .ref('/players/records/' + user.uid)
      .push();
    scoreRef
      .set({
        matches: matches,
        runs: runs,
        battingAverage: batAverage,
        highScore: highScore,
        wickets: wickets,
        bowlingAverage: bowlAverage,
        bestBowling: bestBowl,
        catches: catches,
        stumpings: stumpings,
        runouts: runouts,
      })
      .then(() => {
        setLoading(false);
        props.navigation.goBack();
      })
      .catch(e => {
        Alert.alert(e.code, e.message);
      });
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
                    fontSize: 17,
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
                keyboardType="numeric"
              />
            </View>
          ))}
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
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.recordContainer, {marginVertical: 40}]}
            onPress={() => handleTour()}>
            <View style={styles.button}>
              <Text
                style={[
                  styles.align,
                  {fontWeight: 'bold', fontSize: 15, fontFamily: 'monospace'},
                ]}>
                Add Scores
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddScores;
