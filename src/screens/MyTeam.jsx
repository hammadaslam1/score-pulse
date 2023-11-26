/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';

const MyTeam = props => {
  const [loading, setLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  return (
    <ScrollView style={[styles.fullHeight, {backgroundColor: '#1058ad'}]}>
      <View style={[styles.fullHeight]}>
        <Spinner visible={loading} color="#3280cf" cancelable={true} />
        <View>
          {/* {register.map((data, i) => ( */}
          {/* <View>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                  alignSelf: 'flex-start',
                  marginTop: 25,
                  marginRight: 20,
                  fontFamily: 'monospace',
                },
              ]}>
              team
            </Text>
            <SecondaryInput
              placeholder="0"
              onChangeText="{data.fun}"
              onChange={() => setIsFilled(false)}
            />
          </View> */}
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: '#3280cf',
              width: 180,
              padding: 10,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 50,
              marginTop: 20,
            }}
            onPress={() => props.navigation.navigate('Add Players')}
          >
            <Image
              source={require('../assets/icons/plus.png')}
              style={{tintColor: '#fff', width: 40, height: 40, marginRight: 5}}
            />
            <Text
              style={[
                styles.align,
                {fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace'},
              ]}>
              Add Player
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyTeam;
