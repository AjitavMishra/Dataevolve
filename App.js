import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { HomeStack } from './src/navigation/HomeStack';
import { Colors } from './src/assets/data/Colors';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={Colors.backgroundColor} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeStack/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  }
  
});

export default App;
