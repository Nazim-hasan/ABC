import {View, Text, TextInput, Button, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';
export default function RegisterForm({navigation}) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [profileUpload, setProfileUpload] = React.useState({});

  const handleChoosePhoto = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'image',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        //image data state
        setProfileUpload({
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          base64: response.assets[0].base64,
        });
      }
    });
  };
  const handleSignup = e => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      type: profileUpload['type'],
      base64: profileUpload['base64'],
    };

    axios
      .post('http://10.0.2.2:8000/api/register', data)
      .then(function (response) {
        if (response.data === 'Registered') {
          navigation.navigate('Login');
        } else {
          alert(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.customHeader}>SIGN UP</Text>
      <View style={{marginTop: 5, marginLeft: 30, marginRight: 30}}>
        <Text style={styles.customText}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your first name"
          placeholderTextColor="white"
          color="white"
          onChangeText={newText => setFirstName(newText)}
          value={firstName}
        />
        <Text style={styles.customText}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your last name"
          placeholderTextColor="white"
          color="white"
          onChangeText={newText => setLastName(newText)}
          value={lastName}
        />
        <Text style={styles.customText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="white"
          color="white"
          onChangeText={newText => setEmail(newText)}
          value={email}
        />
        <Text style={styles.customText}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Phone Number"
          placeholderTextColor="white"
          color="white"
          onChangeText={newText => setPhone(newText)}
          value={phone}
        />
        <Text style={styles.customText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          placeholderTextColor="white"
          color="white"
          onChangeText={newText => setPassword(newText)}
          value={password}></TextInput>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <Image
            source={{uri: profileUpload['uri']}}
            style={{
              width: 80,
            }}
          />

          <Text style={styles.customText}>Upload your photo</Text>
          <View
            style={{
              width: 120,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#e5a10d',
            }}>
            <Button
              onPress={handleChoosePhoto}
              title="upload"
              color="black"
              style={{borderColor: '#e5a10d'}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 120,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#e5a10d',
            }}>
            <Button
              onPress={() => navigation.navigate('Login')}
              title="LOGIN"
              color="black"
              style={{borderColor: '#e5a10d'}}
            />
          </View>
          <View style={{width: 120, borderWidth: 1, backgroundColor: 'black'}}>
            <Button
              onPress={handleSignup}
              title="SIGN UP"
              color="#e5a10d"
              style={{color: 'black'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
