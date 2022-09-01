import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.titleText}>Explore</Text>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

export default Explore;
