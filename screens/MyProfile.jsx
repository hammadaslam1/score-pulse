/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';

const MyProfile = () => {
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

  const form = ['Bat', 'Bowl'];
  const form1 = [1, 1, 1, 1, 1];

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={styles.image}
        />
        <Text style={styles.name}>Player Name</Text>
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
        <View>
          <Text style={styles.topic}>Recent Form</Text>
        </View>
        <View style={styles.recordContainer}>
          <View style={styles.recordBox}>
            {/* {form.map(i => (
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={[styles.circle, styles.headCircle]}>
                  <Text style={styles.align}>{i}</Text>
                </View>
                {form1.map(j => (
                  <View
                    style={[
                      styles.circle,
                      {alignContent: 'center', justifyContent: 'center'},
                ]}>
                    <Text style={styles.align}>{j}</Text>
                  </View>
                ))}
              </View>
            ))} */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
