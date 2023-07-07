import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import VideoPlayer from 'react-native-video-player';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {styles} from './styles';
import {ActivityIndicatorElement} from '../../components/ActivityIndicatorElement';

const {height, width} = Dimensions.get('window');

const VideoPlay = () => {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch Video Data from Firebase
  const fetchData = async () => {
    await firestore()
      .collection('video')
      .get()
      .then(querySnapshot => {
        console.log('Total docs: ', querySnapshot.size);
        const dataVideo = [];
        querySnapshot.forEach(documentSnapshot => {
          dataVideo.push(documentSnapshot.data())
          console.log('video id: ', documentSnapshot.id);
          
        });
        setVideoData(dataVideo);
      })
      .catch(error => {
        alert(error.message);
      });

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Render Item for Flatlist
  const renderItem = ({index, item}) => {
    return (
      <View
        key={index}
        style={styles.flatlistContainer}>
        <Text style={styles.headingText}>Title: {item.name}</Text>
        <VideoPlayer
          video={{uri: item.videoUrl}}
          // videoHeight={300}
          // videoWidth={200}
          fullscreen={true}
          // controls={true}
          disableFullscreen={false}
          thumbnail={require('../../assets/images/youtubeImg.png')}
          endThumbnail={require('../../assets/images/youtubeImg.png')}
          showDuration={true}
          autoplay={false}
          // controlsTimeout={3000}
          disableControlsAutoHide={true}
          pauseOnPress={true}
          resizeMode='contain'
          
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {loading ? <ActivityIndicatorElement /> :null}
       
        <FlatList
          data={videoData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          extraData={videoData}
        />  
        
    </View>
  );
};

export default VideoPlay;
