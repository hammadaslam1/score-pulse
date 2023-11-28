/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

const SearchInput = props => {
  return (
    <View style={styles.input}>
      {/* <Text>SecondaryInput</Text> */}
      <TextInput
        placeholderTextColor={'#fff8'}
        style={{color: '#fff'}}
        {...props}
      />
      <View>
        <Image
          source={require('../../assets/icons/search.png')}
          style={{width: 25, height: 25, transform: [{rotateY: '180deg'}]}}
        />
      </View>
      {/* <Searchbar
        icon={require('../../assets/icons/search.png')}
        iconColor="#fffb"
        placeholderTextColor={'#fff7'}
        color="#fff"
        style={styles.input}
        {...props}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 5,
    borderColor: '#fffb',
    borderWidth: 2,
    borderRadius: 50,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SearchInput;
