/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
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

const FormatSelector = props => {
  const [selected, setSelected] = useState(false);
  const [Holder, setHolder] = useState('Overs / Match Format');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)}>
        {selected ? (
          <Text style={styles.input}>hello</Text>
        ) : (
          <Text style={styles.placeholder}>abc</Text>
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
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
              <Image
                source={require('../../assets/icons/close.png')}
                style={{width: 30, height: 30, padding: 10}}
              />
              <View style={{padding: 10, marginVertical: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Select Overs or Match Format
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  );
};

export default FormatSelector;
