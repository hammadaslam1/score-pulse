/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import {View, Text, StyleSheet, ScrollView, Image, Alert} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';

const MyProfile = props => {
  const record = [
    {
      type: 'Batting',
      runs: 'Runs',
      average: 'Average',
      scores: 'High Scores',
    },
    {
      type: 'Bowling',
      runs: 'Wickets',
      average: 'Average',
      scores: 'Best Bowling',
    },
    {
      type: 'Fielding',
      runs: 'Catches',
      average: 'Stumpings',
      scores: 'Runouts',
    },
  ];

  const form = [
    'Email ID',
    'Playing Role',
    'Batting Style',
    'Bowling Style',
    'Jersey No.',
    'Country',
  ];

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={styles.image}
        />
        <Text style={styles.name}>Player Name</Text>
        <View>
          <Text style={styles.topic}>My Details</Text>
        </View>
        <View style={styles.recordContainer}>
          <View style={styles.recordBox}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              {form.map(i => (
                <View id={i} style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={[styles.circle, styles.headCircle]}>
                    <Text
                      style={[
                        styles.align,
                        {fontWeight: 'bold', fontSize: 15},
                      ]}>
                      {i}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.circle,
                      {alignContent: 'center', justifyContent: 'center'},
                    ]}>
                    <Text style={styles.align}>{i}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.topic}>My Stats</Text>
        </View>
        <View style={styles.recordContainer}>
          {record.map(item => (
            <View id={item.type} style={styles.recordBox}>
              <Text style={styles.records}>{item.type}</Text>
              <View style={styles.innerRecord}>
                <View style={styles.stat}>
                  <Text style={styles.stat}>{item.runs}</Text>
                  <Text style={styles.stat}>0</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.stat}>
                  <Text style={styles.stat}>{item.average}</Text>
                  <Text style={styles.stat}>0</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.stat}>
                  <Text style={styles.stat}>{item.scores}</Text>
                  <Text style={styles.stat}>0</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.recordContainer}>
          <View style={styles.button}>
            <Text
              style={[
                styles.align,
                {fontWeight: 'bold', fontSize: 20, fontFamily: 'monospace'},
              ]}
              onPress={() => props.navigation.navigate('Edit Profile')}>
              Edit
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
