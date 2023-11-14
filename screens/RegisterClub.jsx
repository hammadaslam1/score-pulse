/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';
import SecondaryInput from '../components/inputs/SecondaryInput';

const RegisterClub = () => {
  const register = ['Club Name', 'City', 'Established Year'];
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View>
        <Text
          style={[
            styles.text,
            {
              fontSize: 25,
              alignSelf: 'flex-start',
              marginTop: 25,
              marginRight: 20,
              fontFamily: 'monospace',
            },
          ]}>
          Register as Club
        </Text>
        <View style={{marginTop: 30}}>
          {register.map(i => (
            <>
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
                {i}
              </Text>
              <SecondaryInput placeholder={i} />
            </>
          ))}
        </View>
        <TouchableOpacity style={[styles.container, {marginTop: 100}]}>
            <View style={[styles.button, {backgroundColor: '#3280cf', borderRadius: 10}]}>
                <Text style= {styles.text}>Register</Text>
            </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterClub;
