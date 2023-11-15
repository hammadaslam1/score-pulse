/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {
  Alert,
  Animated,
  Easing,
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
import {useState} from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Checkbox from 'expo-checkbox';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const Auth = props => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(true);
  const [secure, setSecure] = useState(false);
  const [fullName, setfullName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [playerMainType, setPlayerMainType] = useState('');
  const [playerSubType, setPlayerSubType] = useState('');

  const mainTypes = ['Batter', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];
  const subTypes = ['Right-Handed', 'Left-Handed'];
  const bowlerTypes = ['Fast Bowler', 'Spin Bowler'];
  const allRoundTypes = ['Batting All-Rounder', 'Bowling All-Rounder'];

  const handleAuth = async () => {
    setLoading(true);
    if (!status && email && password.length >= 6 && number && fullName) {
      try {
        await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            setLoading(false);
            props.navigation.navigate('Home');
          });
      } catch (error) {
        setLoading(false);
        alert(error.message);
      }
    } else if (status && email && password) {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
          props.navigation.navigate('Home');
        });
    } else {
      setLoading(false);
      alert('Please check your credentials!');
    }
  };

  // if (! auth().currentUser.uid) {
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <StatusBar animated={true} backgroundColor="#1058ad" />
        <Spinner visible={loading} color="#3280cf" cancelable={true} />
        <Image
          source={require('../assets/logos/splash.png')}
          alt="app logo"
          style={{alignSelf: 'center', marginTop: 80, marginBottom: 30}}
        />
        <Text style={styles.title}>{status ? 'Login' : 'Register'}</Text>
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
            <Text style={{color: '#fff', fontSize: 15}}>Show Password</Text>
          </View>
        </TouchableOpacity>
        <PrimaryButton
          title={status ? 'LOGIN' : 'REGISTER'}
          onPress={() => {
            handleAuth();
          }}
        />
        <Text style={styles.status}>
          {status ? "Don't have an account?" : 'Already registered?'}
        </Text>
        <TouchableOpacity onPress={() => setStatus(!status)}>
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
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
  // } else {
  //   props.navigation.navigate('Home')
  // }
};

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
  },
  checkboxview: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 5,
    color: '#fff',
  },
  checkbox: {
    marginHorizontal: 10,
    color: '#fff',
  },
  title: {
    padding: 20,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#ffffff',
  },
  status: {
    padding: 20,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#ffffff',
  },
});

export default Auth;
