/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';
import TournamentCard from '../components/homeCards/TournamentCard';

const Tournaments = props => {
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={{marginVertical: 20}}>
        {new Array(3).fill(0).map((data, i) => (
          <View key={i} style={styles.container}>
            <TournamentCard />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tournaments;
