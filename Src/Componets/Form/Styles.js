import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
  },
  customHeader: {
    color: '#e5a10d',
    fontSize: 28,
    fontWeight: '',
    textAlign: 'center',
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#e5a10d',
    borderRadius: 10,
    paddingLeft: 35,
  },
  customText: {
    color: '#e5a10d',

    marginTop: 10,
  },
  shiftPosition: {
    position: 'absolute',
    left: 8,
    top: 50,
  },
  shiftPositionPassword: {
    position: 'absolute',
    left: 8,
    top: 130,
  },
  shiftPositionRight: {
    position: 'absolute',
    left: 300,
    top: 130,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  button: {
    width: '70%',
    height: 45,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
export default styles;
