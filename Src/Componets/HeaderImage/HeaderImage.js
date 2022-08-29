import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import styles from './Styles';
const image = {
  uri: 'https://hellosuperstars.com/static/media/bg-img.e3e9bbc346325749e206.jpeg',
};
export default function HeaderImage() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require('../../Images/helloSuperStar.png')}
        />
      </View>
    </ImageBackground>
  );
}
