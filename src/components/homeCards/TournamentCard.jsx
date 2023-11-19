/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from '../../styles/Styles';

const TournamentCard = () => {
    
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{flex: 1, marginRight: 20, paddingBottom: 10}}>
      <TouchableOpacity
        //   key={index}
        activeOpacity={0.8}
        style={{
          borderRadius: 30,
          overflow: 'hidden',
        //   marginLeft: 20,
          elevation: 5,
          marginBottom: 10,
        }}>
        <View
          style={[
            styles.recordBox,
            {
              flex: 1,
              flexDirection: 'row',
              borderRadius: 50,
              margin: 0,
              paddingHorizontal: 0,
              paddingVertical: 0,
            },
          ]}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            //   padding: 20,
            //   paddingVertical: 10,
              backgroundColor: '#3280cf',
              //   justifyContent: 'space-between',
            }}>
            <ImageBackground
              style={{
                flex: 2,
                backgroundColor: '#1058ad',
                // width: 150,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../assets/icons/backgroundPlaceholder.png')}>
              <View>
                <Image
                  source={require('../../assets/icons/clubProfile.png')}
                  style={{width: 100, height: 100}}
                />
              </View>
            </ImageBackground>
            <View style={{padding: 10, paddingHorizontal: 20}}>
              <Text style={[styles.topic, {marginBottom: 5, fontSize: 13}]}>
                {/* {item.City} */} City Name
              </Text>
              <Text style={[styles.topic, {marginBottom: 5, fontSize: 17, fontWeight: 900}]}>
                {/* {item.City} */} Tournament Name
              </Text>
              <TouchableOpacity>
                <Text style={[styles.topic, {fontSize: 13}]}>
                  {/*{item.Established_Year} */} Club Name
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TournamentCard;
