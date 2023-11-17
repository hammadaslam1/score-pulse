/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Styles';

const Innings = () => {
  const [extras, setExtras] = useState(0);
  const [outs, setOuts] = useState(0);
  const [score, setScore] = useState(0);
  const [currentOver, setCurrentOver] = useState(0.0);
  const [ball, setBall] = useState(0);
  const [overs, setOvers] = useState(5);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [overScore, setOverScore] = useState(0);
  const [thisOver, setThisOver] = useState([]);
  const [CRR, setCRR] = useState('');
  const [RRR, setRRR] = useState(0);
  let temp;
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

  const handleRuns = name => {
    if (ball != 0 || currentOver != 0) {
      const bowl = ball / 6;
      temp = score / (currentOver + bowl);
      temp = temp.toPrecision(2);
      setCRR(temp);
    } else {
      setCRR(score);
    }
    if (name == 'NB' || name == 'WD') {
      temp = score + 1;
      setScore(temp);

      setExtras(extras + 1);
      thisOver.push(name);
      setOverScore(overScore + 1);
    } else if (name == 'WKT' && outs <= 10 && currentOver < overs) {
      temp = outs + 1;
      setOuts(temp);
      thisOver.push(name);
      if (ball >= 5) {
        setThisOver([]);
        setBall(0);
        temp = currentOver + 1;
        setCurrentOver(temp);
      } else {
        temp = ball + 1;
        setBall(temp);
      }
    } else if (name == 'LB' || name == 'B') {
    } else if (name == 'UNDO') {
      if (thisOver.length > 1) {
        const length = thisOver.length;
        thisOver.pop();
        if (thisOver[length - 1] != 'WD' || thisOver[length - 1] != 'NB') {
          setBall(ball > 0 ? ball - 1 : ball);
        }
      } else {
        setThisOver([]);
      }
      // setThisOver([...thisOver]);
    }
  };
  return (
    <ScrollView style={{backgroundColor: '#1058ad', minHeight: '100%'}}>
      <View style={styles.container}>
        <View style={styles.recordContainer}>
          <View style={styles.recordBox}>
            <View style={styles.score}>
              <Text style={[styles.textWhite, {fontSize: 18, flex: 5}]}>
                Team A
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 2}]}>
                {score}/{outs}
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 2}]}>
                ({currentOver}.{ball}/{overs})
              </Text>
            </View>
            <View style={styles.score}>
              <Text style={[styles.textWhite, {fontSize: 18, flex: 5}]}>
                Team B
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 2}]}>
                {score}/{outs}
              </Text>
              <Text style={[styles.textWhite, {fontSize: 14, flex: 2}]}>
                ({currentOver}.{ball}/{overs})
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.innerRecord}>
          <View style={styles.rate}>
            <Text style={[styles.rateText, {fontWeight: 'bold', fontSize: 17}]}>
              CRR
            </Text>
            <Text style={[styles.rateText]}>{CRR}</Text>
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
            <Text style={[styles.rateText]}>{extras}</Text>
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
            <View style={styles.overBalls}>
              {thisOver?.map((data, i) => (
                <View id={'' + i} style={styles.overBody}>
                  <Text style={styles.scoreBodyText}>{data}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.runs}>
          {runs.map((data, i) => (
            <TouchableOpacity id={'' + i} onPress={() => handleRuns(data)}>
              {data == 6 || data == 4 ? (
                <View style={[styles.single, {backgroundColor: '#0c0'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 26}]}>
                    {data}
                  </Text>
                </View>
              ) : data == 'WKT' || data == 'NB' ? (
                <View style={[styles.single, {backgroundColor: '#900'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 20}]}>
                    {data}
                  </Text>
                </View>
              ) : data == 'WD' || data == 'LB' || data == 'B' ? (
                <View style={[styles.single, {backgroundColor: '#22f'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 20}]}>
                    {data}
                  </Text>
                </View>
              ) : data == 'UNDO' ? (
                <View style={[styles.single, {backgroundColor: '#0ff'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 16}]}>
                    {data}
                  </Text>
                </View>
              ) : (
                <View style={[styles.single, {backgroundColor: '#3280cf'}]}>
                  <Text
                    style={[styles.align, {fontWeight: 'bold', fontSize: 20}]}>
                    {data}
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
