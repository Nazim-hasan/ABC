import {View, Button, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
// https://jsonplaceholder.typicode.com/todos/1
import styles from './Styles';
import axios from 'axios';

export default function Home({route}) {
  const email = route.params;
  console.log(email);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = {email: email['email']};
    axios
      .post(
        'http://10.10.10.131/hello-superstarts/public/api/getUserInfo',
        data,
      )
      .then(function (response) {
        setUser(response.data);
        setLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'http://10.10.10.131/hello-superstarts/public/' + user.image,
          }}
          style={styles.roundedImage}
        />
        <Text style={styles.customNameText}>Welcome, {user.first_name}</Text>
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
            Account Info
          </Text>
          <View style={styles.UserInfoContainer}>
            <Text style={styles.titleInfo}>Full Name</Text>
            <Text style={styles.valueInfo}>
              {user.first_name} {user.last_name}
            </Text>
          </View>
          <View style={styles.UserInfoContainer}>
            <Text style={styles.titleInfo}>Mobile</Text>
            <Text style={styles.valueInfo}>{user.phone}</Text>
          </View>
          <View style={styles.UserInfoContainer}>
            <Text style={styles.titleInfo}>Email</Text>
            <Text style={styles.valueInfo}>{user.email}</Text>
          </View>
          <View style={styles.UserInfoContainer}>
            <Text style={styles.titleInfo}>Address</Text>
            <Text style={styles.valueInfo}>Dhaka, Bangladesh</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
