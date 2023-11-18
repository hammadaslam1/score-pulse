/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const SampleTries = () => {
  const [innings, setInnings] = useState([1]);
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(0);
  const [runsScored, setRunsScored] = useState(0);
  const [extras, setExtras] = useState(0);
  const [wicketsFallen, setWicketsFallen] = useState(0);
  const [notOutBatsmen, setNotOutBatsmen] = useState([
    {name: 'A', runs: 0},
    {name: 'B', runs: 0},
  ]);
  const [striker, setStriker] = useState(0);
  const [nonStriker, setNonStriker] = useState(1);

  useEffect(() => {
    if (balls === 6) {
      setOvers(overs + 1);
      setBalls(0);
    }
  }, [balls, overs]);

  const handleAddRuns = type => {
    if (type === 'run') {
      setRunsScored(runsScored + 1);
      if (striker === 0) {
        setNotOutBatsmen(prevState => {
          const updatedBatsmen = [...prevState];
          updatedBatsmen[striker].runs++;
          return updatedBatsmen;
        });
      } else {
        setNotOutBatsmen(prevState => {
          const updatedBatsmen = [...prevState];
          updatedBatsmen[nonStriker].runs++;
          return updatedBatsmen;
        });
      }
    } else if (type === 'extra') {
      setExtras(extras + 1);
    }

    setBalls(balls + 1);
  };

  const handleWicketFallen = () => {
    setWicketsFallen(wicketsFallen + 1);
    if (striker === 0) {
      setStriker(1);
      setNonStriker(2);
    } else {
      setStriker(0);
      setNonStriker(1);
    }
  };

  const handleEndOver = () => {
    setOvers(overs + 1);
    setBalls(0);

    const newInning = {
      overs: overs,
      runsScored: runsScored,
      extras: extras,
      wicketsFallen: wicketsFallen,
      notOutBatsmen: notOutBatsmen,
    };

    setInnings([...innings, newInning]);
    setRunsScored(0);
    setExtras(0);
    setWicketsFallen(0);
  };

  const handleStartNewInnings = () => {
    setOvers(0);
    setBalls(0);
    setRunsScored(0);
    setExtras(0);
    setWicketsFallen(0);
    setNotOutBatsmen([
      {name: '', runs: 0},
      {name: '', runs: 0},
    ]);
    setInnings([]);
  };

  return (
    <ScrollView style={{backgroundColor: '#ffff00'}}>
        <Image
          source={require('./src/assets/logos/icon.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Complex Cricket Scoring App</Text>

        <View style={styles.scoreboard}>
          <Text style={styles.scoreboardLabel}>
            Overs: {overs}.{balls}
          </Text>
          <Text style={styles.scoreboardLabel}>Runs Scored: {runsScored}</Text>
          <Text style={styles.scoreboardLabel}>Extras: {extras}</Text>
          <Text style={styles.scoreboardLabel}>
            Wickets Fallen: {wicketsFallen}
          </Text>
        </View>

        <View style={styles.batsmenContainer}>
          <Text style={styles.batsmenLabel}>Batsmen</Text>
          {notOutBatsmen.map(batsman => (
            <TouchableOpacity
              key={batsman.name}
              onPress={() => batsmanSelectHandler(batsman)}>
              <View style={[styles.batsmenItem]}>
                <Text>{batsman.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {/* </View> */}
          {/* <Button title="Add Inning" onPress={handleAddInning} /> */}
          <Button title="Start New Innings" onPress={handleStartNewInnings} />
          {/* <ScrollView> */}
            {innings.map((inning, i) => (
              <View key={i} style={{marginRight: 15}}>
                <View style={styles.teamName}>
                  <Text style={styles.teamNameTitle}>hammad</Text>
                </View>
                <View style={styles.playerScores}>
                  {/* {inning.scores.map((score, index) => ( */}
                    <View style={styles.playerScore}>
                      <Text style={styles.playerScoreValue}>{inning}</Text>
                      <Text style={styles.playerScorePlayer}>
                        {inning}
                      </Text>
                    </View>
                  {/* ))} */}
                </View>
              </View>
            ))}
          {/* </ScrollView> */}
        </View>
      {/* </View> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  teamName: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#000',
  },
  playerScores: {
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default SampleTries;
