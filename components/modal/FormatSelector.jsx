/* eslint-disable prettier/prettier */
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
} from 'react-native';
import React, {useState} from 'react';

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
          <Text style={styles.placeholder}>hello</Text>
        )}
      </Pressable>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Text>hhhhh</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 65,
    // borderRadius: 15,
    backgroundColor: '#1058ad',
    marginVertical: 10,
    padding: 5,
    borderBottomColor: '#3280cf',
    borderBottomWidth: 2,
    color: '#fff',
    textAlign: 'center',
  },
  placeholder: {
    marginHorizontal: 65,
    // borderRadius: 15,
    backgroundColor: '#1058ad',
    marginVertical: 10,
    padding: 5,
    borderBottomColor: '#3280cf',
    borderBottomWidth: 2,
    color: '#000',
    opacity: 0.35,
    textAlign: 'center',
  },
});

export default FormatSelector;
