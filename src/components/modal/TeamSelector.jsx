/* eslint-disable prettier/prettier */

/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Styles';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';

const TeamSelector = props => {
  // console.log(pic);
  const picture = props.pic;
  const url = `../../assets/profile/${picture}.png`;
  console.log(url);
  const team = props.reducer;

  const imageLinkA = useSelector(state => state.TeamAReducer.imageLink);
  const imageLinkB = useSelector(state => state.TeamBReducer.imageLink);
  //   const teamB = useSelector(state => state.TeamBReducer.teamName);
  const [selected, setSelected] = useState(false);
  const [teamName, setTeamName] = useState('Team');
  const [error, setError] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [Holder, setHolder] = useState('Overs / Match Format');
  const overNo = [5, 10, 15, 20, 50];
  const bType = ['Tape Ball', 'Leather Ball'];
  const [isType, setIsType] = useState('');
  const [totalOvers, setTotalOvers] = useState(5);
  const [ballType, setBallType] = useState('');
  const [wickets, setWickets] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const [clubData, setClubData] = useState([]);
  const handleSnapshot = () => {
    const myClubRef = database().ref('/Clubs');
    myClubRef.on('value', snapshot => {
      const data = snapshot.val();
      const newArr = [];
      const temp = [];

      for (const element in data) {
        newArr.push({
          id: element,
          ...data[element],
        });
      }
      // setClubData([]);
      for (const i in newArr) {
        temp.push({
          id: i,
          ...newArr[i],
        });
      }
      setClubData(temp);
      // console.log(clubData);
    });
  };
  useEffect(() => {
    handleSnapshot();
  }, []);

  const handleTeams = (id, name) => {
    if (name && id) {
      Alert.alert(
        'Confirmation!',
        `Are you sure to select ${name}?`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              dispatch({
                type: props.type,
                teamName: name,
                id: id,
                // imageLink: require(url),
              });
              setSelected(true);
              setModalVisible(false);
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      console.log(id, name);
      setIsOver(true);
    }
  };
  return (
    <View>
      <Text
        style={[
          styles.topic,
          {fontSize: 12, color: '#fffd', alignSelf: 'center'},
        ]}>
        Open Match
      </Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={require('../../assets/profile/2.png')}
          style={{
            borderRadius: 50,
            width: 80,
            height: 80,
            borderWidth: 2,
            borderColor: '#fff',
            marginVertical: 20,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.topic,
          {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
            alignSelf: 'center',
          },
        ]}>
        {team}
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={{shadowColor: '#000'}}
            onPress={() => setModalVisible(false)}>
            <Image
              source={require('../../assets/icons/downArrow.png')}
              style={{width: 30, height: 30, padding: 10, alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={[
                styles.align,
                styles.topic,
                {color: '#1058ad', fontWeight: 'bold', marginTop: 15},
              ]}>
              Select Team
            </Text>
          </View>
          <View style={{padding: 10, marginVertical: 10}}>
            <Text
              style={[
                styles.topic,
                {
                  color: '#1058ad',
                  fontSize: 14,
                  marginTop: 25,
                  fontWeight: 'bold',
                },
              ]}>
              Option 1
            </Text>
            <View
              style={[styles.innerRecord, {marginTop: 25, marginBottom: 15}]}>
              <TouchableOpacity
                activeOpacity={0.7}
                // onPress={() => {
                //   handleFormat();
                // }}
              >
                <View
                  style={{
                    padding: 10,
                    width: 200,
                    flex: 1,
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#3280cf',
                  }}>
                  <Text style={{color: '#fff'}}>Add New Team</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.topic,
                {
                  color: '#1058ad',
                  fontSize: 14,
                  marginTop: 25,
                  fontWeight: 'bold',
                },
              ]}>
              Option 2
            </Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{height: 350, marginTop: 20}}>
              <View>
                {clubData.map((i, j) => (
                  <TouchableOpacity
                    key={j}
                    activeOpacity={0.7}
                    style={{backgroundColor: '#0000'}}
                    onPress={() => handleTeams(i.id, i.Club_Name)}>
                    <View
                      style={{
                        marginVertical: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                      }}>
                      <Image
                        source={require('../../assets/icons/clubProfile.png')}
                        style={{
                          borderRadius: 50,
                          padding: 5,
                          width: 40,
                          height: 40,
                          borderWidth: 2,
                          borderColor: '#3280cf',
                          marginRight: 20,
                          alignSelf: 'center',
                        }}
                      />
                      <View style={{}}>
                        <Text
                          style={[
                            styles.topic,
                            {
                              color: '#1058ad',
                              fontSize: 18,
                              marginVertical: 5,
                              fontWeight: 'bold',
                            },
                          ]}>
                          {i.Club_Name}
                        </Text>
                        <Text
                          style={[
                            styles.topic,
                            {
                              color: '#1058ad',
                              fontSize: 14,
                              marginBottom: 5,
                              //   marginHorizontal: 5,
                            },
                          ]}>
                          {i.City}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const inputStyles = StyleSheet.create({
  input: {
    marginHorizontal: 65,
    backgroundColor: 'transparent',
    marginVertical: 10,
    padding: 5,
    borderBottomColor: '#3280cf',
    color: '#1058ad',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
});

export default TeamSelector;
