/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1058ad',
    minHeight: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginTop: 60,
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'monospace',
  },
  records: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  recordContainer: {
    marginVertical: 30,
    borderRadius: 20,
    backgroundColor: '#3280cf',
  },
  recordBox: {
    margin: 15,
    width: 330,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  innerRecord: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 5,
  },
  stat: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    padding: 2,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#1058ad',
    paddingVertical: 20,
  },
  topic: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#fff',
  },
  circle: {
    flex: 1,
    height: 39,
    width: 39,
    backgroundColor: '#4391e0',
    borderRadius: 30,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  headCircle: {
    backgroundColor: '#1058ad',
    // flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  align: {
    textAlign: 'center',
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 11,
  },
});

export default styles;
