/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import {StyleSheet, TextInput, View} from 'react-native';

const SecondaryInput = props => {
  return (
    <View>
      {/* <Text>SecondaryInput</Text> */}
      <TextInput style={styles.input} {...props} />
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
});

export default SecondaryInput;
