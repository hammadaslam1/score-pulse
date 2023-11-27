/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

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
import React, {useEffect, useState} from 'react';
import styles from '../styles/Styles';
import RightIndicator from '../components/icons/RightIndicator';
import ClubCard from '../components/homeCards/ClubCard';
import MatchCard from '../components/homeCards/MatchCard';
import ProfileCard from '../components/homeCards/ProfileCard';
import TournamentCard from '../components/homeCards/TournamentCard';
import MenuModal from '../components/modal/MenuModal';
import auth from '@react-native-firebase/auth';

const Home = props => {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSignOut = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        setMenu(false);
        setLoading(false);
        props.navigation.popToTop();
      })
      .catch(e => {
        setMenu(false);
        setLoading(false);
        props.navigation.popToTop();
      });
  };
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
            onPress={() => setMenu(true)}>
            <Image
              source={require('../assets/logos/menu.png')}
              style={{
                tintColor: '#fff',
                alignSelf: 'flex-end',
                margin: 10,
                width: 30,
                height: 30,
              }}
              // onPress={() => props.navigation.navigate('Menu')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'verdana',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Home
          </Text>
        </View>
        {menu ? (
          <MenuModal
            visibility={menu}
            setMenu={setMenu}
            myMatches={() => props.navigation.navigate('My Matches')}
            myTournaments={() => props.navigation.navigate('My Tournaments')}
            myProfile={() => props.navigation.navigate('My Profile')}
            myTeam={() => props.navigation.navigate('My Team')}
            myClubs={() => props.navigation.navigate('My Clubs')}
            openMatch={() => props.navigation.navigate('Open Match')}
            handleSignOut={() => handleSignOut()}
            createTournament={() =>
              props.navigation.navigate('Create Tournament')
            }
            clubRegistration={() =>
              props.navigation.navigate('Club Registration')
            }
            settings={() => props.navigation.navigate('settings')}
          />
        ) : (
          ''
        )}
        {/* matches */}
        <TouchableOpacity
          activeOpacity={0.65}
          onPress={() => props.navigation.navigate('My Matches')}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Matches
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <MatchCard horizontal={true} />
        {/* profile */}
        <TouchableOpacity
          activeOpacity={0.65}
          onPress={() => props.navigation.navigate('My Profile')}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Profile
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <ProfileCard onPress={() => props.navigation.navigate('My Profile')} />
        {/* tournaments */}
        <TouchableOpacity
          activeOpacity={0.65}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
            marginBottom: 10,
          }}
          onPress={() => props.navigation.navigate('Tournaments')}>
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Tournaments
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <TournamentCard horizontal={true} />
        {/* clubs */}
        <TouchableOpacity
          activeOpacity={0.65}
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 20,
            marginBottom: 10,
          }}
          onPress={() => props.navigation.navigate('Clubs')}>
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Clubs
          </Text>
          <RightIndicator />
        </TouchableOpacity>
        <ClubCard horizontal={true} />
      </View>
    </ScrollView>
  );
  // }
  // });
};

export default Home;
