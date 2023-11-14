/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/Styles';

const Innings = () => {
  const runs = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    'WKT',
    'WD',
    'NB',
    'LB',
    'B',
    'UNDO',
    '...',
  ];
  const record = [
    {
      type: 'CRR',
      value: '17.33',
    },
    {
      type: 'RRR',
      value: '0.0',
    },
    {
      type: 'Extras',
      value: '10',
    },
  ];
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={styles.container}>
        <View style={styles.recordContainer}>
          <View style={styles.recordBox}>
            <View style={styles.score}>
              <Text style={[styles.textWhite, {fontSize: 18, flex: 5}]}>
                Your Team
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 1}]}>
                74/2
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 2}]}>
                (4.0/5)
              </Text>
            </View>
            <View style={styles.score}>
              <Text style={[styles.textWhite, {fontSize: 18, flex: 5}]}>
                Opponent Team
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 1}]}>
                00/0
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 2}]}>
                (0.0/5)
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.innerRecord}>
          <View style={styles.rate}>
            <Text style={[styles.rateText, {fontWeight: 'bold', fontSize: 17}]}>
              CRR
            </Text>
            <Text style={[styles.rateText]}>17.33</Text>
          </View>
          <View style={[styles.divider, {borderColor: '#3280cf'}]}></View>
          <View style={styles.rate}>
            <Text style={[styles.rateText, {fontWeight: 'bold', fontSize: 17}]}>
              RRR
            </Text>
            <Text style={[styles.rateText]}>0.0</Text>
          </View>
          <View style={[styles.divider, {borderColor: '#3280cf'}]}></View>
          <View style={styles.rate}>
            <Text style={[styles.rateText, {fontWeight: 'bold', fontSize: 17}]}>
              Extras
            </Text>
            <Text style={[styles.rateText]}>10</Text>
          </View>
        </View>
        <View style={styles.recordContainer}>
          <View style={styles.majorScore}>
            <View style={styles.scoreHead}>
              <Text style={[styles.scoreHeadText, {flex: 3}]}>Batting</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>R</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>B</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>4s</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>6s</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>SR</Text>
            </View>
            <View style={styles.scoreBody}>
              <Text style={[styles.scoreBodyText, {flex: 3}]}>
                Hammad Aslam
              </Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>37</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>12</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>05</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>02</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>308.3</Text>
            </View>
            <View style={styles.scoreBody}>
              <Text style={[styles.scoreBodyText, {flex: 3}]}>Saad Afzal</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>37</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>12</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>05</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>02</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>308.3</Text>
            </View>
            <View style={styles.scoreHead}>
              <Text style={[styles.scoreHeadText, {flex: 3}]}>Batting</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>O</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>R</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>W</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>M</Text>
              <Text style={[styles.scoreHeadText, {flex: 1}]}>ECO</Text>
            </View>
            <View style={styles.scoreBody}>
              <Text style={[styles.scoreBodyText, {flex: 3}]}>Hassan</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>0.0</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>0</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>0</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>0</Text>
              <Text style={[styles.scoreBodyText, {flex: 1}]}>0.0</Text>
            </View>
          </View>
        </View>
        <View style={[styles.recordContainer, {marginTop: -10}]}>
          <View style={styles.overs}>
            <View style={styles.overHead}>
              <Text style={styles.scoreHeadText}>This over</Text>
            </View>
            <View style={styles.overBody}>
              <Text style={styles.scoreBodyText}>-</Text>
            </View>
            <View style={styles.overBody}>
              <Text style={styles.scoreBodyText}>-</Text>
            </View>
            <View style={styles.overBody}>
              <Text style={styles.scoreBodyText}>-</Text>
            </View>
            <View style={styles.overBody}>
              <Text style={styles.scoreBodyText}>-</Text>
            </View>
            <View style={styles.overBody}>
              <Text style={styles.scoreBodyText}>-</Text>
            </View>
            <View style={styles.overBody}>
              <Text style={styles.scoreBodyText}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.runs}>
          {runs.map(i => (
            <TouchableOpacity id={i}>
              {i == 6 || i == 4 ? (
                <View style={[styles.single, {backgroundColor: '#0c0'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 26}]}>
                    {i}
                  </Text>
                </View>
              ) : i == 'WKT' || i == 'NB' ? (
                <View style={[styles.single, {backgroundColor: '#f00'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 20}]}>
                    {i}
                  </Text>
                </View>
              ) : i == 'WD' || i == 'LB' || i == 'B' ? (
                <View style={[styles.single, {backgroundColor: '#00f'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 20}]}>
                    {i}
                  </Text>
                </View>
              ) : i == 'UNDO' ? (
                <View style={[styles.single, {backgroundColor: '#0ff'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 16}]}>
                    {i}
                  </Text>
                </View>
              ) : (
                <View style={[styles.single, {backgroundColor: '#3280cf'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 20}]}>
                    {i}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Innings;
