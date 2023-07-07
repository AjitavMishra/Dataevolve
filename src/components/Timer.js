import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../assets/data/Colors';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 16,
          color: Colors.white,
          fontFamily: 'Titillium Web',
        }}>
        {minutes}:{seconds}
      </Text>
    </View>
  );
};

export default Timer;
