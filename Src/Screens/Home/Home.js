import {View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
// https://jsonplaceholder.typicode.com/todos/1

import axios from 'axios';

export default function Home() {
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        // handle success
        setData(response);
        alert(response.body);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <View>
      <Button
        onPress={getData}
        title="Get Data"
        color="#e5a10d"
        style={{color: 'black'}}
      />
    </View>
  );
}
