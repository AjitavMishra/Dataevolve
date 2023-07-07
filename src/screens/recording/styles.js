import {Colors} from '../../assets/data/Colors';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraButton: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 50,
    left: 80,
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
  },
  cameraButtonn:{
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: Colors.gray,
    alignSelf: 'center',
  },
  defaultView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.backgroundColor,
  },
  defaultButtonRetake: {
    width: width*0.4,
    backgroundColor: Colors.primary,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'2%',
    borderRadius: 10,
  },
  defaultButtonUpload: {
    width: width*0.4,
    backgroundColor: Colors.secondary,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'2%',
    borderRadius: 10,
  },
  defaultButtonText :{
    fontWeight: '600',
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Titillium Web',
  },
  defaultButtonTextUpload :{
    fontWeight: '600',
    fontSize: 16,
    color: Colors.textColor,
    fontFamily: 'Titillium Web',
  },
  defaultImage: {
    width: '90%',
    height: height * 0.75,
    resizeMode: 'contain',
  },
  defaultButtonsContainer : {
    flex:1,
    flexDirection:'row',
    width: width*0.95,
    justifyContent:'space-between',
  },
  videoButton: {
    height: 55,
    width: 55,
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },
  videoIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoStopButton:{
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: Colors.white,
    backgroundColor:Colors.primary,
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    borderRadius: 30,
  },
  videoPlayerContainer :{
    height: height*0.6,
    width: width,
    backgroundColor: Colors.backgroundColor
  },
  timerContainer:{
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor: Colors.gray,
    bottom: 15,
    margin: 5,
    padding: 5,
    alignSelf:'center'
  }
});
