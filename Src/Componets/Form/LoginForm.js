import {View, Text, TextInput, Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import styles from './Styles';
export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSignup = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.customHeader}>LOGIN</Text>
      <View style={{marginTop: 24, marginLeft: 30, marginRight: 30}}>
        <Text style={styles.customText}>Email</Text>
        {/* <Icon name="rocket" size={30} color="#900" /> */}

        <TextInput
          style={styles.input}
          onChangeText={e => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Text style={styles.customText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setPassword(e.target.value);
          }}
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
              onPress={handleSignup}
              title="SIGN UP"
              color="black"
              style={{borderColor: '#e5a10d'}}
            />
          </View>
          <View style={{width: 120}}>
            <Button onPress={handleSignup} title="LOGIN" color="#e5a10d" />
          </View>
        </View>
      </View>
    </View>
  );
}
