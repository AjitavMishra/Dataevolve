import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions, StatusBar} from 'react-native';
import {Colors} from '../../assets/data/Colors';
import { styles } from './styles';

const {height, width} = Dimensions.get('window');

const Splash = () => {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.backgroundColor} barStyle={'dark-content'} />
        <View style={styles.logoContainer}>
       <Image
          source={require('../../assets/images/splashimg.png')}
          style={styles.logoStyle}/>
          </View>
      </View>
    );
}

export default Splash
