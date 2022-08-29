import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 120,
    height: 120,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: require('../../Images/background-img.jpeg'),
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default styles;
