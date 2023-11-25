/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/Styles';

const AllPlayers = () => {
  const [playerData, setPlayerData] = useState([]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#1058ad'}}>
      <View>
        {playerData.map((i, j) => (
          <TouchableOpacity
            key={j}
            activeOpacity={0.7}
            style={{backgroundColor: '#0000'}}
            // onPress={() => handleTeams(i.id, i.Club_Name)}
          >
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Image
                source={require('../assets/icons/clubProfile.png')}
                style={{
                  borderRadius: 50,
                  padding: 5,
                  width: 40,
                  height: 40,
                  borderWidth: 2,
                  borderColor: '#3280cf',
                  marginRight: 20,
                  alignSelf: 'center',
                }}
              />
              <View style={{}}>
                <Text
                  style={[
                    styles.topic,
                    {
                      color: '#1058ad',
                      fontSize: 18,
                      marginVertical: 5,
                      fontWeight: 'bold',
                    },
                  ]}>
                  {i.Club_Name}
                </Text>
                <Text
                  style={[
                    styles.topic,
                    {
                      color: '#1058ad',
                      fontSize: 14,
                      marginBottom: 5,
                      //   marginHorizontal: 5,
                    },
                  ]}>
                  {i.City}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default AllPlayers;
