/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';

const MyMatches = () => {
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={styles.container}>
        <View style={styles.recordContainer}>
        <View style={styles.recordBox}>
          <Text>MyMatches</Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyMatches;
