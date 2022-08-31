import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import styles from './Styles';
import axios from 'axios';
const baseUrl = 'http://10.0.2.2:8000';

export default function LoginForm({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const data = {email: email, password: password};

    axios
      .post('http://10.0.2.2:8000/api/login', data)
      .then(function (response) {
        if (response.data === 'Success') {
          navigation.navigate('Home', {
            email: email,
          });
        } else if (response.data === 'Wrong email or password') {
          alert('Wrong email or password');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.customHeader}>LOGIN</Text>
      <View style={{marginTop: 24, marginLeft: 30, marginRight: 30}}>
        <Text style={styles.customText}>Email</Text>
        {/* <Icon name="rocket" size={30} color="#900" /> */}

        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="white"
          color="white"
          onChangeText={newText => setEmail(newText)}
          value={email}
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
          <View
            style={{
              width: 120,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#e5a10d',
            }}>
            <Button
              onPress={() => navigation.navigate('Register')}
              title="SIGN UP"
              color="black"
              style={{borderColor: '#e5a10d'}}
            />
          </View>
          <View style={{width: 120, borderWidth: 1, backgroundColor: 'black'}}>
            <Button
              onPress={handleLogin}
              title="LOGIN"
              color="#e5a10d"
              style={{color: 'black'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
