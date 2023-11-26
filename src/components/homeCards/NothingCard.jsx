/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const NothingCard = () => {
  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.recordBox,
          {
            flex: 1,
            flexDirection: 'row',
            borderRadius: 30,
            margin: 0,
            marginLeft: 10,
            marginRight: 3,
            marginBottom: 10,
            paddingHorizontal: 0,
            paddingVertical: 0,
            // borderRadius: 20,
            overflow: 'hidden',
            elevation: 5,
          },
        ]}>
        <View
          style={{
            flex: 1,
            padding: 20,
            paddingVertical: 20,
            backgroundColor: '#3280cf',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.align, styles.topic, {color: '#fff6'}]}>
            Nothing to show
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NothingCard;
