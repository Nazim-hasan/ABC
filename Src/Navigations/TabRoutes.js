import React, {useState} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import Register from '../Screens/Register/Register';
import Explore from '../Screens/Explore/Explore';
import About from '../Screens/About/About';

const Tab = createBottomTabNavigator();

const TabRoutes = ({route}) => {
  const email = route.params;
  const data = {email: email['email']};
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Tab.Navigator
      screenProps={data}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <>
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'gray'}}
                  source={require('../Images/home.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'gray'}}
                  source={require('../Images/explore.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'gray'}}
                  source={require('../Images/person.png')}
                />
              );
            },
          }}
        />
      </>
    </Tab.Navigator>
  );
};

export default TabRoutes;
