/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../styles/Styles';
import RightIndicator from '../components/icons/RightIndicator';
import ClubCard from '../components/homeCards/ClubCard';
import MatchCard from '../components/homeCards/MatchCard';
import ProfileCard from '../components/homeCards/ProfileCard';
import TournamentCard from '../components/homeCards/TournamentCard';

const Home = props => {
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="#1058ad" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          <TouchableOpacity
            style={{
              tintColor: '#ddd',
              alignSelf: 'flex-end',
              marginHorizontal: 5,
              marginRight: 15,
            }}
            onPress={() => props.navigation.navigate('Menu Links')}>
            <Image
              source={require('../assets/logos/menu.png')}
              style={{
                tintColor: '#fff',
                alignSelf: 'flex-end',
                margin: 10,
                width: 40,
                height: 40,
              }}
              onPress={() => props.navigation.navigate('Menu')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'verdana',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Home
          </Text>
        </View>
        {/* matches */}
        <TouchableOpacity
          activeOpacity={0.65}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Matches
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <MatchCard />
        {/* profile */}
        <TouchableOpacity
          activeOpacity={0.65}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Profile
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <ProfileCard />
        {/* tournaments */}
        <TouchableOpacity
          activeOpacity={0.65}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Tournaments
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <TournamentCard />
        {/* clubs */}
        <TouchableOpacity
          activeOpacity={0.65}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Clubs
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <ClubCard />
      </View>
    </ScrollView>
  );
  // }
  // });
};

export default Home;
