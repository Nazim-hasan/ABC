import {View, Button, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
// https://jsonplaceholder.typicode.com/todos/1

import axios from 'axios';

export default function Home({route}) {
  const email = route.params;
  console.log(email);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const data = {email: email['email']};
    axios
      .post(
        'http://10.10.10.131/hello-superstarts/public/api/getUserImage',
        data,
      )
      .then(function (response) {
        setImage(response.data);
        setLoading(true);
        console.log('Image location: ' + image);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <View>
      <Image
        source={{uri: 'http://10.10.10.131/hello-superstarts/public/' + image}}
        style={{width: 100, height: 100}}
      />
    </View>
  );
}
