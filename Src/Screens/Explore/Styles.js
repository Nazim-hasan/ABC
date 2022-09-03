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
    backgroundColor: 'white',
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default styles;
