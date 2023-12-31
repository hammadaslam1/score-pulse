/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/Styles';
import NothingCard from './NothingCard';

const MatchCard = props => {
  const [matchData, setMatchData] = useState([]);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={props.horizontal}
      style={{paddingBottom: 10, minWidth: 300}}>
      {matchData.length >= 1 ? (
        matchData.map((item, index) => (
          <TouchableOpacity
            //   key={index}
            activeOpacity={0.8}
            style={{
              borderRadius: 30,
              overflow: 'hidden',
              elevation: 5,
              marginBottom: 10,
              minWidth: 300,
              width: '100%',
              alignSelf: 'center',
            }}>
            <View
              style={[
                styles.recordBox,
                {
                  // flex: 1,
                  // flexDirection: 'row',
                  minWidth: 300,
              width: '100%',
              margin: 0,
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                },
              ]}>
              <View
                style={{
                  flex: 1,
                  padding: 15,
                  paddingVertical: 20,
                  backgroundColor: '#3280cf',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={[styles.topic, {marginBottom: 10, fontSize: 12}]}>
                    {/* {item.City} */} format, etc.
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 3,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../../assets/icons/pakistan.png')}
                        style={{width: 15, height: 15, marginHorizontal: 2}}
                      />
                      <Text
                        style={[
                          styles.topic,
                          {
                            fontWeight: 'bold',
                            fontSize: 14,
                            marginHorizontal: 10,
                          },
                        ]}>
                        {/* {item.Club_Name} */}Team A
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={[
                          styles.topic,
                          {color: '#fff', fontSize: 14, marginHorizontal: 3},
                        ]}>
                        0.0
                      </Text>
                      <Text
                        style={[
                          styles.topic,
                          {color: '#fff', fontSize: 13, marginHorizontal: 3},
                        ]}>
                        (0.0)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 3,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../../assets/icons/pakistan.png')}
                        style={{width: 15, height: 15, marginHorizontal: 2}}
                      />
                      <Text
                        style={[
                          styles.topic,
                          {
                            fontWeight: 'bold',
                            fontSize: 14,
                            marginHorizontal: 10,
                          },
                        ]}>
                        {/* {item.Club_Name} */}Team B
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={[
                          styles.topic,
                          {color: '#fff', fontSize: 14, marginHorizontal: 3},
                        ]}>
                        0.0
                      </Text>
                      <Text
                        style={[
                          styles.topic,
                          {color: '#fff', fontSize: 13, marginHorizontal: 3},
                        ]}>
                        (0.0)
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[styles.topic, {marginVertical: 10, fontSize: 12}]}>
                    {/* {item.City} */} Tournament Name
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={[
                        styles.topic,
                        {fontSize: 12, fontWeight: 'bold'},
                      ]}>
                      {/*{item.Established_Year} */} View Tournament {'>>'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <NothingCard />
      )}
    </ScrollView>
  );
};

export default MatchCard;
