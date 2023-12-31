/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  Modal,
  Alert,
  TextInput,
  StyleSheet,
  Touchable,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/Styles';
import {useDispatch, useSelector} from 'react-redux';
import {MATCH_FORMAT, TOSS_DATA} from '../../redux/types/Types';

const TossModal = props => {
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [Holder, setHolder] = useState('Overs / Match Format');
  const overNo = [5, 10, 15, 20, 50];
  const bType = ['Tape Ball', 'Leather Ball'];
  const [isType, setIsType] = useState('');
  const [totalOvers, setTotalOvers] = useState(5);
  const [ballType, setBallType] = useState('');
  const [wickets, setWickets] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);

  const teamA = useSelector(state => state.TeamAReducer.teamName);
  const teamB = useSelector(state => state.TeamBReducer.teamName);

  const [toss, setToss] = useState('');
  const [elect, setElect] = useState('');
  const [bat1, setBat1] = useState('');
  const [bat2, setBat2] = useState('');

  const dispatch = useDispatch();

  const handleFormat = () => {
    if (
      (toss == teamA && elect == 'bat') ||
      (toss == teamB && elect == 'bowl')
    ) {
      setBat1(teamA);
      setBat2(teamB);
      console.log(teamA);
      dispatch({
        type: TOSS_DATA,
        toss: toss,
        elect: elect,
        bat1: teamA,
        bat2: teamB,
      });
      props.setIsToss(false);
      Alert.alert(
        'Confirmation!',
        `${toss} have won the toss and elected to ${elect} first`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Done',
            onPress: props.press,
          },
        ],
        {cancelable: false},
      );
      setSelected(true);
      //   setModalVisible(false);
      //   props.setIsToss(false);
    } else if (
      (toss == teamA && elect == 'bowl') ||
      (toss == teamB && elect == 'bat')
    ) {
      setBat1(teamB);
      setBat2(teamA);
      console.log(teamA);
      dispatch({
        type: TOSS_DATA,
        toss: toss,
        elect: elect,
        bat1: teamB,
        bat2: teamA,
      });
      props.setIsToss(false);
      Alert.alert(
        'Confirmation!',
        `${toss} have won the toss and elected to ${elect} first`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Done',
            onPress: props.press,
          },
        ],
        {cancelable: false},
      );
      setSelected(true);
      //   setModalVisible(false);
      //   props.setIsToss(false);
    } else {
      setIsOver(true);
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visibility}
      //   style={styles.tossMain}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.tossMain}>
        <View style={styles.tossContainer}>
          <TouchableOpacity
            style={[styles.touchable, {shadowColor: '#000'}]}
            onPress={props.onPress}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={{width: 30, height: 30, padding: 10, tintColor: '#1058ad'}}
            />
          </TouchableOpacity>
          <View style={{padding: 10, marginVertical: 10}}>
            <Text
              style={[
                styles.topic,
                {color: '#1058ad', fontSize: 14, fontWeight: 'bold'},
              ]}>
              Who won the toss?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setToss(teamA)}
                style={{
                  // flex: 1,
                  borderWidth: 1,
                  borderColor: '#1058ad',
                  borderRadius: 25,
                  width: '45%',
                  // padding: 30,
                  paddingVertical: 15,
                  marginTop: 15,
                  backgroundColor: toss == teamA ? '#1058ad' : '#fff',
                }}>
                <Image
                  source={
                    toss == teamA
                      ? require('../../assets/logos/icon.png')
                      : require('../../assets/logos/icon_lite.png')
                  }
                  style={{
                    borderRadius: 50,
                    width: 60,
                    height: 60,
                    marginVertical: 10,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={[
                    styles.align,
                    {color: toss != teamA ? '#1058ad' : '#fff'},
                  ]}>
                  {teamA}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setToss(teamB)}
                style={{
                  // flex: 1,
                  borderWidth: 1,
                  borderColor: '#1058ad',
                  borderRadius: 25,
                  width: '45%',
                  // padding: 30,
                  paddingVertical: 15,
                  marginTop: 15,
                  backgroundColor: toss == teamB ? '#1058ad' : '#fff',
                }}>
                <Image
                  source={
                    toss == teamB
                      ? require('../../assets/logos/icon.png')
                      : require('../../assets/logos/icon_lite.png')
                  }
                  style={{
                    borderRadius: 50,
                    width: 60,
                    height: 60,
                    marginVertical: 10,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={[
                    styles.align,
                    {color: toss != teamB ? '#1058ad' : '#fff'},
                  ]}>
                  {teamB}
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.topic,
                {
                  color: '#1058ad',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginTop: 15,
                },
              ]}>
              Decided to?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setElect('bat')}
                style={{
                  borderWidth: 1,
                  borderColor: '#1058ad',
                  borderRadius: 25,
                  padding: 30,
                  paddingVertical: 10,
                  marginTop: 30,
                  backgroundColor: elect == 'bat' ? '#1058ad' : '#fff',
                }}>
                <Text
                  style={[
                    styles.align,
                    {color: elect != 'bat' ? '#1058ad' : '#fff', fontSize: 13},
                  ]}>
                  Bat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setElect('bowl')}
                style={{
                  borderWidth: 1,
                  borderColor: '#1058ad',
                  borderRadius: 25,
                  padding: 30,
                  paddingVertical: 10,
                  marginTop: 30,
                  backgroundColor: elect == 'bowl' ? '#1058ad' : '#fff',
                }}>
                <Text
                  style={[
                    styles.align,
                    {color: elect != 'bowl' ? '#1058ad' : '#fff', fontSize: 13},
                  ]}>
                  Bowl
                </Text>
              </TouchableOpacity>
            </View>
            {isOver ? (
              <View style={{marginTop: 25}}>
                <Text
                  style={{
                    color: '#f00',
                    fontSize: 13,
                    fontFamily: 'monospace',
                    textAlign: 'center',
                  }}>
                  - please select all options -
                </Text>
              </View>
            ) : (
              ''
            )}
            <View
              style={[styles.innerRecord, {marginTop: 45, marginBottom: 15}]}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  handleFormat();
                }}>
                <View
                  style={{
                    padding: 10,
                    width: 150,
                    // flex: 1,
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#1058ad',
                  }}>
                  <Text style={{color: '#fff'}}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const inputStyles = StyleSheet.create({
  input: {
    marginHorizontal: 65,
    backgroundColor: 'transparent',
    marginVertical: 10,
    padding: 5,
    borderBottomColor: '#3280cf',
    color: '#1058ad',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
});

export default TossModal;
