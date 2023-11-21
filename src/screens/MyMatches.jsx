/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import MatchCard from '../components/homeCards/MatchCard';
import NothingCard from '../components/homeCards/NothingCard';

const MyMatches = props => {
  const [matchData, setMatchData] = useState([]);
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={{marginVertical: 20}}>
        {matchData.length >= 1 ? (
          matchData.map((data, i) => (
            <View style={styles.container}>
              <MatchCard />
            </View>
          ))
        ) : (
          <NothingCard />
        )}
      </View>
    </ScrollView>
  );
};

export default MyMatches;
