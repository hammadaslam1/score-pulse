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
import {useDispatch} from 'react-redux';
import {MATCH_FORMAT} from '../../redux/types/Types';

const FormatSelector = props => {
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

  const dispatch = useDispatch();

  const handleWickets = num => {
    if (num < 0 || num > 10) {
      setError(true);
    } else {
      setError(false);
      setWickets(num);
    }
  };
  const handleFormat = () => {
    if (totalOvers && wickets && ballType) {
      Alert.alert(
        'Confirmation!',
        `Are you sure to select ${totalOvers} overs ${ballType} format?`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              dispatch({
                type: MATCH_FORMAT,
                totalOvers: totalOvers,
                totalWickets: wickets,
                ballType: ballType,
              });
              setSelected(true);
              setModalVisible(false);
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      setIsOver(true);
    }
  };
  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)}>
        {selected ? (
          <Text style={styles.input}>
            {totalOvers + ' overs - ' + ballType}
          </Text>
        ) : (
          <Text style={styles.placeholder}>{Holder}</Text>
        )}
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={[styles.touchable, {shadowColor: '#000'}]}
            onPress={() => setModalVisible(false)}>
            <Image
              source={require('../../assets/icons/downArrow.png')}
              style={{width: 30, height: 30, padding: 10, alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <View style={{padding: 10, marginVertical: 10}}>
            <Text
              style={[
                styles.topic,
                {
                  color: '#1058ad',
                  fontSize: 14,
                  marginTop: 25,
                  fontWeight: 'bold',
                },
              ]}>
              Select overs <Text style={{color: '#f00'}}>*</Text>
            </Text>
            <TextInput
              style={inputStyles.input}
              placeholder="Overs"
              keyboardType="numeric"
              value={totalOvers.toString()}
              onChangeText={setTotalOvers}
              onChange={() => setIsOver(false)}
            />
            <View style={[styles.innerRecord, {marginTop: 15}]}>
              {overNo.map((overs, i) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    // Alert.alert(overs)
                    setIsOver(false);
                    setTotalOvers(overs);
                  }}>
                  <View
                    style={{
                      padding: 5,
                      width: 50,
                      flex: 1,
                      alignItems: 'center',
                      borderRadius: 10,
                      backgroundColor: '#3280cf',
                    }}>
                    <Text style={{color: '#fff'}}>{overs}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <Text
              style={[
                styles.topic,
                {
                  color: '#1058ad',
                  fontSize: 14,
                  marginTop: 25,
                  fontWeight: 'bold',
                },
              ]}>
              Wickets <Text style={{color: '#f00'}}>*</Text>
            </Text>
            <TextInput
              style={inputStyles.input}
              keyboardType="numeric"
              value={wickets.toString()}
              onChangeText={handleWickets}
            />
            {error ? (
              <Text
                style={{
                  color: '#f00',
                  marginHorizontal: 30,
                  textAlign: 'center',
                }}>
                wickets must be between 0 and 10 *
              </Text>
            ) : (
              ''
            )}
            <Text
              style={[
                styles.topic,
                {
                  color: '#1058ad',
                  fontSize: 14,
                  marginTop: 25,
                  fontWeight: 'bold',
                },
              ]}>
              Ball Type <Text style={{color: '#f00'}}>*</Text>
            </Text>
            <View style={[styles.innerRecord, {marginTop: 25}]}>
              {bType.map(ball => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setBallType(ball);
                    setIsType(ball);
                  }}>
                  <View
                    style={{
                      padding: 8,
                      width: 100,
                      flex: 1,
                      alignItems: 'center',
                      borderRadius: 10,
                      backgroundColor:
                        isType == ball ? '#3280cf' : 'transparent',
                    }}>
                    <Text style={{color: isType == ball ? '#fff' : '#1058ad'}}>
                      {ball}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            {isOver ? (
              <View style={{marginTop: 25}}>
                <Text
                  style={{
                    color: '#f00',
                    fontSize: 18,
                    fontFamily: 'monospace',
                    textAlign: 'center',
                  }}>
                  --- please fill all fields ---
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
                    width: 200,
                    flex: 1,
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#3280cf',
                  }}>
                  <Text style={{color: '#fff'}}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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

export default FormatSelector;
