import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import styles from './Styles';
import axios from 'axios';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function LoginForm({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const showPassword = () => {
    console.log('password show');
  };

  const handleLogin = e => {
    e.preventDefault();
    if (email.length == 0) {
      alert('Please Enter Your Email');
      return;
    }
    if (password.length == 0) {
      alert('Please Enter Your Password');
      return;
    }
    const data = {email: email, password: password};
    axios
      .post('http://10.10.10.131/hello-superstarts/public/api/login', data)
      .then(function (response) {
        if (response.data === 'Success') {
          navigation.navigate('Home', {
            screen: 'HomeScreen',
            params: {email: `${email}`},
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
        <FontAwesome5
          name={'envelope'}
          size={20}
          color={'white'}
          style={styles.shiftPosition}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="white"
          color="white"
          onChangeText={newText => setEmail(newText)}
          value={email}
        />
        <Text style={styles.customText}>Password</Text>
        <FontAwesome5
          name={'lock'}
          size={20}
          color={'white'}
          style={styles.shiftPositionPassword}
        />
        <FontAwesome5
          name={'eye-slash'}
          size={20}
          color={'white'}
          style={styles.shiftPositionRight}
          onPress={showPassword}
        />
        <TextInput
          secureTextEntry={true}
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
