/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {StyleSheet, TextInput, View} from 'react-native';

const PrimaryInput = props => {
  return (
    <View>
      {/* <Text>PrimaryInput</Text> */}
      <TextInput
        placeholderTextColor={'#1058ad88'}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 25,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 10,
    elevation: 10,
    color: '#1058ad',
    fontWeight: 'bold',
  },
});

export default PrimaryInput;
