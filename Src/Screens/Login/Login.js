import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import HeaderImage from '../../Componets/HeaderImage/HeaderImage';
import LoginForm from '../../Componets/Form/LoginForm';
export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <HeaderImage />
      </View>
      <View style={styles.textAreas}>
        <LoginForm navigation={navigation} />
      </View>
    </View>
  );
}
