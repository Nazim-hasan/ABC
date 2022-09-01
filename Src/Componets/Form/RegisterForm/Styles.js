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
    marginTop: 7,
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
  shiftFirstName: {
    position: 'absolute',
    left: 8,
    top: 47,
  },
  shiftLastName: {
    position: 'absolute',
    left: 8,
    top: 122,
  },
  shiftEmail: {
    position: 'absolute',
    left: 8,
    top: 197,
  },
  shiftPhone: {
    position: 'absolute',
    left: 8,
    top: 275,
  },
  shiftPassword: {
    position: 'absolute',
    left: 8,
    top: 349,
  },
});
export default styles;
