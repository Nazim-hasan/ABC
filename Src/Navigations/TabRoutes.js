import React, {useState} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import UploadVideo from '../Screens/Upload/UploadVideo';
import Explore from '../Screens/Explore/Explore';

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
          name="Add"
          component={UploadVideo}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'gray'}}
                  source={require('../Images/add_circle_FILL0_wght400_GRAD0_opsz48.png')}
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
      </>
    </Tab.Navigator>
  );
};

export default TabRoutes;
