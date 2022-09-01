import React, {useState} from 'react';
import {StatusBar} from 'react-native';
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
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
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
    </>
  );
};

export default Routes;
