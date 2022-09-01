import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5a10d',
  },
  bannerContainer: {
    flex: 3,
    backgroundColor: '#e5a10d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 5,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
});
export default styles;
