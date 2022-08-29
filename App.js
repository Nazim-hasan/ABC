// In App.js in a new project
import {View} from 'react-native';
import * as React from 'react';
import Routes from './Src/Navigations/Routes';

function App() {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
}

export default App;
