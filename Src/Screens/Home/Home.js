import {View, Button, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
// https://jsonplaceholder.typicode.com/todos/1

import axios from 'axios';

export default function Home({route}) {
  const email = route.params;
  const [image, setImage] = useState([]);

  // http://10.0.2.2:8000/api/register
  // http://127.0.0.1:8000/api/getUserImage
  const getData = () => {
    const data = {email: email['email']};

    axios
      .post('http://10.0.2.2:8000/api/getUserImage', data)
      .then(function (response) {
        // setImage(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View>
      <Text>Welcome Home</Text>
      {/* <Text>Image URL: {image}</Text> */}
      <Button
        onPress={getData}
        title="Get Data"
        color="#e5a10d"
        style={{color: 'black'}}
      />
      {/* <Image
        source={{image}}
        style={{
          width: 80,
        }} */}
    </View>
  );
}
