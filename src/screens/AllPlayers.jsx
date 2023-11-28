/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/Styles';
import database from '@react-native-firebase/database';
import SecondaryInput from '../components/inputs/SecondaryInput';
import SearchInput from '../components/inputs/SearchInput';

const AllPlayers = () => {
  const [playerData, setPlayerData] = useState([]);
  const [search, setSearch] = useState('');
  const [hasPlayer, setHasPlayer] = useState(false);

  const handlePlayers = () => {
    const playerRef = database().ref('team/players');
    playerRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];
      for (let i in data) {
        newArr.push(data[i]);
      }
      setPlayerData(newArr);
    });
  };

  const handleTeam = (userId) => {
    console.log(userId);
  }

  const handleSearch = () => {
    // for (let i in playerData) {
    //   if (
    //     playerData[i].fullname.toLowerCase().includes(search.toLowerCase()) ||
    //     playerData[i].email.toLowerCase().includes(search.toLowerCase())
    //   ) {
    //     setHasPlayer(true);
    //   } else {
    //     setHasPlayer(false);
    //   }
    // }
  };

  useEffect(() => {
    handlePlayers();
  }, []);

  return (
    <View style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <SearchInput
          placeholder={'Search Player'}
          onChangeText={setSearch}
          onChange={handleSearch}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#1058ad'}}>
        <View style={{borderRadius: 20, overflow: 'hidden'}}>
          {playerData.map((i, j) =>
            search &&
            (i.fullname.toLowerCase().includes(search.toLowerCase()) ||
              i.email.toLowerCase().includes(search.toLowerCase())) ? 
              (
              <TouchableOpacity
                key={j}
                activeOpacity={0.7}
                style={{
                  backgroundColor: '#3280cf',
                  borderBottomColor: '#1058ad',
                  borderBottomWidth: 1,
                }}
                onPress={() => handleTeam(i.userId)}
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
                      // borderRadius: 50,
                      padding: 5,
                      width: 40,
                      height: 40,
                      // borderWidth: 2,
                      // borderColor: '#1058ad',
                      marginRight: 20,
                      alignSelf: 'center',
                    }}
                  />
                  <View style={{}}>
                    <Text
                      style={[
                        styles.topic,
                        {
                          color: '#fff',
                          fontSize: 17,
                          marginVertical: 5,
                          // fontWeight: 'bold',
                        },
                      ]}>
                      {i.fullname}
                    </Text>
                    <Text
                      style={[
                        styles.topic,
                        {
                          color: '#fffa',
                          fontSize: 14,
                          marginBottom: 5,
                          //   marginHorizontal: 5,
                        },
                      ]}>
                      {i.playingRole}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              ''
            ),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllPlayers;
