/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';
import RadioBtn from '../components/buttons/RadioBtn';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';

const EditProfile = props => {
  const user = auth().currentUser;
  const name = useSelector(state => state.ProfileReducer.name);
  const [playerMainType, setPlayerMainType] = useState('');
  const [playerSubType, setPlayerSubType] = useState('');
  const [playerBowlerType, setPlayerBowlerType] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [jerseyNo, setJerseyNo] = useState('');

  const mainTypes = ['Batter', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];
  const subTypes = ['Right-Handed', 'Left-Handed'];
  const bowlerTypes = ['Fast Bowler', 'Spin Bowler'];
  const allRoundTypes = ['Batting All-Rounder', 'Bowling All-Rounder'];
  let result = '../assets/logos/icon.png';
  const handleImage = async () => {
    // result = await
  };

  const handleEditProfile = () => {
    if (
      username &&
      email &&
      playerMainType &&
      playerSubType &&
      playerBowlerType &&
      jerseyNo
    ) {
      setLoading(true);
      const userRef = database().ref('users/' + user.uid);
      userRef
        .update({
          username: username,
          email: email,
          playingRole: playerMainType,
          battingStyle: playerSubType,
          bowlingStyle: playerBowlerType,
          jerseyNo: jerseyNo,
        })
        .then(() => {
          setLoading(false);
          props.navigation.goBack();
        })
        .catch(e => {
          Alert.alert(e.code, e.message);
        });
    } else {
      setIsFilled(true);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => handleImage()}>
        <Image
          source={require(result ? result : '../assets/logos/icon_lite.png')}
          // source={require('../assets/logos/icon_lite.png')}
          alt="app logo"
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={[styles.align, styles.topic]}>{name}</Text>
      <Spinner visible={loading} color="#3280cf" cancelable={true} />
      <View style={{marginVertical: 30}}>
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Username</Text>
        </View>
        <SecondaryInput
          placeholder="Username"
          onChangeText={setUsername}
          onChange={() => setIsFilled(false)}
        />
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Mail ID</Text>
        </View>
        <SecondaryInput
          placeholder="Mail ID"
          onChangeText={setEmail}
          onChange={() => setIsFilled(false)}
        />
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Playing Role</Text>
        </View>
        <View style={styles.radioGroup}>
          {mainTypes.map((data, i) => (
            <RadioBtn
              key={'' + i}
              value={data}
              title={data}
              playerType={playerMainType}
              data={data}
              onPress={() => {
                setPlayerMainType(data);
              }}
            />
          ))}
        </View>
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Bating Style</Text>
        </View>
        <View style={styles.radioGroup}>
          {subTypes?.map((data, i) => (
            <RadioBtn
              key={'' + i}
              value={data}
              title={data}
              playerType={playerSubType}
              data={data}
              onPress={() => setPlayerSubType(data)}
            />
          ))}
        </View>
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Bowling Style</Text>
        </View>
        <View style={styles.radioGroup}>
          {bowlerTypes?.map((data, i) => (
            <RadioBtn
              key={'' + i}
              value={data}
              title={data}
              playerType={playerBowlerType}
              data={data}
              onPress={() => setPlayerBowlerType(data)}
            />
          ))}
        </View>
        <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Jersey No.</Text>
        </View>
        <SecondaryInput
          placeholder="Jersey No."
          onChangeText={setJerseyNo}
          onChange={() => setIsFilled(false)}
          keyboardType="numeric"
        />
        {isFilled ? (
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'monospace',
              marginTop: 40,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#0ff',
            }}>
            --- Please fill all fields ---
          </Text>
        ) : (
          ''
        )}
        {/* <View style={{marginHorizontal: 30}}>
          <Text style={[styles.topic, {marginTop: 10}]}>Country</Text>
        </View> */}
        {/* <SecondaryInput value="Country" /> */}
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.recordContainer, {marginVertical: 40}]}
            onPress={() => handleEditProfile()}>
            <View style={styles.button}>
              <Text
                style={[
                  styles.align,
                  {fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace'},
                ]}>
                Save Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
