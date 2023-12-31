/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PrimaryInput from '../components/inputs/PrimaryInput';
import RadioBtn from '../components/buttons/RadioBtn';
import {useState, useEffect} from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Checkbox from 'expo-checkbox';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Spinner from 'react-native-loading-spinner-overlay';

const Auth = props => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(true);
  const [secure, setSecure] = useState(false);
  const [fullName, setfullName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [playerMainType, setPlayerMainType] = useState('');
  const [playerSubType, setPlayerSubType] = useState('');

  const mainTypes = ['Batter', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];
  const subTypes = ['Right-Handed', 'Left-Handed'];
  const bowlerTypes = ['Fast Bowler', 'Spin Bowler'];
  const allRoundTypes = ['Batting All-Rounder', 'Bowling All-Rounder'];

  const setData = userID => {
    const temp = email.split('@');
    console.log(temp);
    setUsername(temp[0]);
    const userRef = database().ref('/users/' + userID);
    const playerRef = database().ref('/team/players').push();
    // const temp = email.split('@');
    userRef.set({
      fullname: fullName,
      number: number,
      email: email,
      playingRole: playerMainType,
      username: username,
    });
    playerRef.set({
      fullname: fullName,
      number: number,
      email: email,
      playingRole: playerMainType,
      username: username,
      userId: userID,
      selected: false,
    });
  };

  const handleAuth = async () => {
    // auth().onAuthStateChanged()
    setLoading(true);
    if (
      !status &&
      email &&
      password.length >= 6 &&
      number &&
      fullName &&
      playerMainType &&
      playerSubType
    ) {
      const temp = email.split('@');
      setUsername(temp[0]);
      try {
        await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async () => {
            const user = auth().currentUser;
            setData(user.uid)
              .then(() => {
                setLoading(false);
                setfullName('');
                setEmail('');
                setNumber('');
                setPlayerMainType('');
                setPlayerSubType('');
                setPassword('');
                setStatus(true);
              })
              .catch(e => {
                setLoading(false);
                setLoading('data not saved');
                setStatus(true);
              });
          });
      } catch (error) {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email address you provided is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
      }
    } else if (status && email && password) {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
          setEmail('');
          setPassword('');
          props.navigation.navigate('Home');
        })
        .catch(e => {
          setLoading(false);
          if (e.code == 'auth/invalid-login') {
            Alert.alert('Invalid Email or Password', '😞');
          } else if (e.code == 'auth/invalid-email') {
            Alert.alert(
              'Invalid Email',
              'The email address is badly formatted 🥴',
            );
          } else if (e.code == 'auth/network-request-failed') {
            Alert.alert('No Internet', 'Please Connect to the Internet 🙂');
          }
        });
    } else {
      setLoading(false);
      Alert.alert('Please check your credentials!');
    }
  };

  const [users, setUsers] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUsers(true);
      } else {
        setUsers(false);
      }
    });
  }, []);

  if (!users) {
    return (
      <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
        <View>
          <StatusBar animated={true} backgroundColor="#1058ad" />
          <Spinner visible={loading} color="#3280cf" cancelable={true} />
          <Image
            source={require('../assets/logos/splash.png')}
            alt="app logo"
            style={{alignSelf: 'center', marginTop: 70, marginBottom: 25}}
          />
          <Text style={styles.title}>{status ? 'LOGIN' : 'REGISTER'}</Text>
          {!status ? (
            <PrimaryInput
              placeholder={'Full Name'}
              value={fullName}
              onChangeText={setfullName}
            />
          ) : (
            ''
          )}
          <PrimaryInput
            placeholder={'Email'}
            value={email}
            onChangeText={setEmail}
          />
          {!status ? (
            <>
              <PrimaryInput
                placeholder={'Phone Number'}
                onChangeText={setNumber}
                value={number}
                keyboardType={'numeric'}
              />
              <Text style={styles.text}>Player Type</Text>
              <View style={styles.radioGroup}>
                {mainTypes.map((data, i) => (
                  <RadioBtn
                    key={i}
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
              {playerMainType && playerMainType != 'Wicket-Keeper' ? (
                <Text style={styles.text}>Player Style</Text>
              ) : (
                ''
              )}
              <View style={styles.radioGroup}>
                {playerMainType == 'Batter'
                  ? subTypes?.map((data, i) => (
                      <RadioBtn
                        key={i}
                        value={data}
                        title={data}
                        playerType={playerSubType}
                        data={data}
                        onPress={() => setPlayerSubType(data)}
                      />
                    ))
                  : ''}
                {playerMainType == 'Bowler'
                  ? bowlerTypes?.map((data, i) => (
                      <RadioBtn
                        key={i}
                        value={data}
                        title={data}
                        playerType={playerSubType}
                        data={data}
                        onPress={() => setPlayerSubType(data)}
                      />
                    ))
                  : ''}
                {playerMainType == 'All-Rounder'
                  ? allRoundTypes?.map((data, i) => (
                      <RadioBtn
                        key={i}
                        value={data}
                        title={data}
                        playerType={playerSubType}
                        data={data}
                        onPress={() => setPlayerSubType(data)}
                      />
                    ))
                  : ''}
              </View>
            </>
          ) : (
            ''
          )}

          <PrimaryInput
            placeholder={'Password'}
            secureTextEntry={!secure}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <View style={styles.checkboxview}>
              <Checkbox
                value={secure}
                style={styles.checkbox}
                onValueChange={() => setSecure(!secure)}
                color={'transparent'}
              />
              <Text style={{color: '#fff', fontSize: 13}}>Show Password</Text>
            </View>
          </TouchableOpacity>
          <PrimaryButton
            title={status ? 'LOGIN' : 'REGISTER'}
            onPress={() => {
              handleAuth();
            }}
            fontSize={18}
          />
          <Text style={styles.status}>
            {status ? "Don't have an account?" : 'Already registered?'}
          </Text>
          <PrimaryButton
            title={!status ? 'SIGN IN' : 'REGISTER'}
            onPress={() => setStatus(!status)}
            fontSize={12}
          />
          {/* <TouchableOpacity onPress={() => setStatus(!status)}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                textDecorationLine: 'underline',
                alignSelf: 'center',
                paddingVertical: 5,
              }}>
              {status ? 'Register' : 'Sign In'}
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  } else {
    props.navigation.navigate('Home');
  }
};

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 12,
  },
  text: {
    marginTop: 10,
    marginLeft: 25,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  checkboxview: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 5,
    color: '#fff',
  },
  checkbox: {
    marginHorizontal: 10,
    color: '#fff',
  },
  title: {
    padding: 20,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    // textTransform: 'capitalize',
    color: '#ffffff',
  },
  status: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#ffffff',
  },
});

export default Auth;
