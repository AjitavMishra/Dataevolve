import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  console.log('Home Page');
  const navigation = useNavigation();

  //Handle Record Button
  const handleRecord = () => {
    navigation.navigate('Recording')
  }

  //Handle Play Button
  const handlePlay = () => {
    navigation.navigate('VideoPlayback')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/splash.png')}
          style={styles.imageContainer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textHeading}>
            Record & Play Videos
        </Text>
        <TouchableOpacity style={styles.recordButton} onPress={handleRecord}>
          <Image
            source={require('../../assets/images/record.png')}
            style={styles.imageButton}
          />
          <Text style={styles.buttonText}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
          <Image
            source={require('../../assets/images/youtubeImg.png')}
            style={styles.imageButton}
          />
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
