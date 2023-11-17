/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { StyleSheet, TextInput, View } from "react-native";


const PrimaryInput = props => {
  return (
    <View>
      {/* <Text>PrimaryInput</Text> */}
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 25,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 15,
    elevation: 10,
  },
});

export default PrimaryInput;
