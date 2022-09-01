import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import Register from '../Screens/Register/Register';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        {isLogin ? (
          <>
            <Stack.Screen name="Home" component={TabRoutes} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={TabRoutes} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
