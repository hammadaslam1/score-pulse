/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    width: 'fit-content',
  },
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
    width: 160,
    height: 160,
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
    marginBottom: 40,
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
    elevation: 5,
  },
  recordBox: {
    margin: 15,
    width: 330,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  innerRecord: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // marginVertical: 5,
  },
  stat: {
    flex: 1,

    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 2,
  },
  divider: {
    borderWidth: 1,
    backgroundColor: '#1058ad',
    borderRadius: 20,
    // elevation: 5,
    borderColor: '#1058ad',
    paddingVertical: 30,
    // paddingHorizontal: 2,
  },
  vertDivider: {
    borderWidth: 1,
    backgroundColor: '#3280cf',
    borderRadius: 2,
    borderColor: '#3280cf',
    paddingHorizontal: 170,
  },
  topic: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#fff',
  },
  circle: {
    flex: 2,
    height: 39,
    // width: 39,
    backgroundColor: '#4391e0',
    borderRadius: 30,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  headCircle: {
    backgroundColor: '#1058ad',
    flex: 1,
    // flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  align: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 26,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  text: {
    fontWeight: 'bold',

    fontSize: 22,
    color: '#fff',
    marginHorizontal: 20,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: -20,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    padding: 10,
    // borderRadius: 4,
    // shadowOffset: {width: -1, height: 1},
    // shadowOpacity: 0.9,
    elevation: 5,
    backgroundColor: '#3280cf',

    // alignItems: 'flex-start',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#fff',
  },
  statColumn: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: '#fff',
  },
  textBlack: {
    color: '#fff',
    fontFamily: 'monospace',
    fontWeight: '500',
    textAlign: 'left',
  },
  textWhite: {
    color: '#fff',
    fontFamily: 'monospace',
    fontWeight: '700',
    textAlign: 'left',
  },
  score: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  rateText: {
    fontFamily: 'monospace',
    color: '#fff',
    textAlign: 'left',
  },
  rate: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  majorScore: {
    width: 350,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  scoreHead: {
    backgroundColor: '#3280cf',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  scoreBody: {
    backgroundColor: '#2169be',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  scoreHeadText: {
    color: '#fff',

    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  scoreBodyText: {
    color: '#fff',

    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 2,
  },
  overs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: 350,
  },
  overBalls: {
    flex: 4,
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // padding: 5,
    // width: 350,
  },
  overHead: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  overBody: {
    // flex: 1,
    // paddingHorizontal: 10,
    paddingVertical: 4,
    width: 50,
  },
  runs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 10,
    // columnGap: 5,
    padding: 5,
    width: 350,
  },
  single: {
    // borderRadius: 1,
    marginRight: 5,
    width: 55,
    alignContent: 'center',
    height: 55,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  modalBack: {
    backgroundColor: '#00000066',
    height: '100%',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    width: '100%',
    padding: 20,
  },
  input: {
    marginHorizontal: 65,
    backgroundColor: '#1058ad',
    marginVertical: 10,
    padding: 5,
    borderBottomColor: '#3280cf',
    borderBottomWidth: 2,
    color: '#fff',
    textAlign: 'center',
  },
  placeholder: {
    marginHorizontal: 65,
    // borderRadius: 15,
    backgroundColor: '#1058ad',
    marginVertical: 10,
    padding: 5,
    borderBottomColor: '#3280cf',
    borderBottomWidth: 2,
    color: '#000',
    opacity: 0.35,
    textAlign: 'center',
  },
});

export default styles;
