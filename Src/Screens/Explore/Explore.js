import {View, Text} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import styles from './Styles';
const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.titleText}>Explore</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{color: 'white'}}>Video</Text>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          }}
          style={(styles.backgroundVideo, {width: 200, height: 200})}
        />
      </View>
    </View>
  );
};

export default Explore;
