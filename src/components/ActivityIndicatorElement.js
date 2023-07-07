import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../assets/data/Colors';
const {height, width} = Dimensions.get('window');

//Activity Indicator
export const ActivityIndicatorElement = () => {
  return (
    <View
      style={{
        flex: 1,
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 16,
          color: Colors.textColor,
          fontFamily: 'Titillium Web',
        }}>
        Please wait!!!
      </Text>
      <ActivityIndicator color={Colors.primary} size={'large'} />
    </View>
  );
};
