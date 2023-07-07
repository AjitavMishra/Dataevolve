import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {styles} from './styles';
import VideoPlayer from 'react-native-video-player';
import Timer from '../../components/Timer';
import firestore, {firebase} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {ActivityIndicatorElement} from '../../components/ActivityIndicatorElement';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Recording = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef(null);
  const [imageData, setImageData] = useState('');
  const [photoClicked, setPhotoClicked] = useState(true);

  const [videoData, setVideoData] = useState('');
  const [videoStop, setVideoStop] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    checkPermission();
  }, []);

  //To check the camera and microphone access
  const checkPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    if (cameraPermission === 'denied') await Linking.openSettings();

    console.log(cameraPermission);
    console.log(microphonePermission);
  };

  //To take picture
  // const takePicture = async () => {
  //   if (camera != null) {
  //     const photo = await camera.current.takePhoto({
  //       flash: 'off',
  //     });
  //     setImageData(photo.path);
  //     setPhotoClicked(false);
  //     console.log(photo.path);
  //   }
  // };

  //Take Video
  const takeVideo = async () => {
    if (camera != null) {
      const video = await camera.current.startRecording({
        flash: 'off',
        onRecordingFinished: video => (setVideoData(video), console.log(video)),
        onRecordingError: error => console.error(error),
      });

      setVideoStop(false);

      console.log(videoData.path);
    }
  };

  // console.log('Outside: ' + videoData.path);

  //Stop the Video
  const stopVideo = async () => {
    if (camera != null) {
      const video = await camera.current.stopRecording();
      setPhotoClicked(false);
      console.log('Here: ' + video);
    }
  };

  //Upload Video file to Firebase
  const uploadVideo = async () => {
    setLoading(true);
    const reference = storage().ref(`videoUpload/${videoData.path}`);
    const pathToFile = videoData.path;

    // uploads video file to storage & creates a reference
    await reference.putFile(pathToFile);
    const url = await storage()
      .ref(`videoUpload/${videoData.path}`)
      .getDownloadURL();
    console.log(url);

    //Upload the doc into Firestore DB
    const id = firestore().collection('video').doc().id;
    await firestore()
      .collection('video')
      .doc(id)
      .set({
        name: 'Video ' + id,
        createdAt: firestore.FieldValue.serverTimestamp(),
        videoUrl: url,
      })

      .catch(error => {
        Alert.alert(error.message);
      });

    Alert.alert('Video uploaded successfully');
    setLoading(false);
    navigation.navigate('Home');
  };

  if (device == null) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      {photoClicked ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
            video={true}
            audio={true}
          />

          {videoStop ? (
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={styles.videoButton}
                onPress={() => takeVideo()}>
                <Image
                  source={require('../../assets/images/record.png')}
                  style={styles.videoIcon}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={styles.videoStopButton}
                onPress={() => {
                  stopVideo(), setVideoStop(true);
                }}></TouchableOpacity>
              <View style={styles.timerContainer}>
                <Timer />
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.defaultView}>
          {videoData !== '' ? (
            <View style={styles.videoPlayerContainer}>
              <VideoPlayer
                video={{uri: videoData.path}}
                videoHeight={height / 2}
                videoWidth={width}
                thumbnail={require('../../assets/images/youtubeImg.png')}
                endThumbnail={require('../../assets/images/youtubeImg.png')}
                showDuration={true}
                autoplay={false}
                controlsTimeout={3000}
                disableControlsAutoHide={true}
                pauseOnPress={true}
              />
            </View>
          ) : null}
          {loading ? <ActivityIndicatorElement /> : null}
          <View style={styles.defaultButtonsContainer}>
            <TouchableOpacity
              style={styles.defaultButtonRetake}
              onPress={() => setPhotoClicked(true)}>
              <Text style={styles.defaultButtonText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.defaultButtonUpload}
              onPress={uploadVideo}>
              <Text style={styles.defaultButtonTextUpload}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Recording;
