import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5a10d',
  },
  bannerContainer: {
    flex: 1,
    backgroundColor: '#e5a10d',
  },
  bottomContainer: {
    flex: 8,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleText: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  informationContainer: {
    flex: 1,
    marginTop: 40,
    marginLeft: 30,
  },
  roundedImage: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  customNameText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  UserInfoContainer: {
    //
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 15,
  },
  titleInfo: {
    color: 'white',
  },
  valueInfo: {
    color: 'white',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
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
});
export default styles;
