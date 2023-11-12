/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import { StyleSheet, Text, View } from "react-native";


const PrimaryButton = props => {
  return (
    <View>
      <Text style={styles.button} {...props}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 75,
    borderRadius: 15,
    backgroundColor: '#2169be',
    marginVertical: 20,
    color: '#ffffff',
    padding: 15,
    elevation: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'monospace',
  },
});

export default PrimaryButton;
