/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';

const MyTeam = props => {
  const [loading, setLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <Spinner visible={loading} color="#3280cf" cancelable={true} />
        <View style={{marginTop: 30}}>
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
            style={styles.recordContainer}
            // onPress={() => props.navigation.navigate('Create Team')}
          >
            <View style={styles.button}>
              <Text
                style={[
                  styles.align,
                  {fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace'},
                ]}>
                Add Player
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyTeam;
