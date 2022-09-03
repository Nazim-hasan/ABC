import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [video, setVideo] = useState('');

  const handleSubmit = () => {
    console.log('clicked');
  };
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.titleText}>Upload video</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.informationContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 40,
              marginTop: 25,
            }}>
            Upload
          </Text>
          <View style={styles.UserInfoContainer}>
            <Text style={styles.titleInfo}>Title</Text>
            <TextInput
              secureTextEntry={true}
              style={(styles.input, styles.valueInfo)}
              placeholder=""
              placeholderTextColor="white"
              color="white"
              onChangeText={newText => setDescription(newText)}
              value={title}></TextInput>
          </View>
          <View style={styles.UserInfoContainer}>
            <Text style={styles.titleInfo}>Description</Text>
            <TextInput
              secureTextEntry={true}
              style={(styles.input, styles.valueInfo)}
              placeholder=""
              placeholderTextColor="white"
              color="white"
              onChangeText={newText => setDescription(newText)}
              value={description}></TextInput>
          </View>

          <View
            style={
              (styles.UserInfoContainer, {margin: 10, flexDirection: 'row'})
            }>
            <FontAwesome5
              name={'plus'}
              size={20}
              color={'white'}
              style={{marginEnd: 14}}
            />
            <Text style={styles.text}>Choose Video</Text>
          </View>
          <View
            style={{
              width: 120,
              borderWidth: 1,
              height: 35,
              marginLeft: 102,
              marginTop: 20,
            }}>
            <LinearGradient
              colors={['#f7c868', '#e39e0c', '#ffce66']}
              style={styles.gradient}>
              <Text style={styles.text} onPress={handleSubmit}>
                UPLOAD
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UploadVideo;
