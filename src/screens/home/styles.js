import {Colors} from '../../assets/data/Colors';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  textColor: {
    color: Colors.textColor,
    fontSize: 18,
  },
  header: {
    height: height * 0.4,
    width: width,
    backgroundColor: Colors.white,
  },
  footer: {
    height: height * 0.6,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  recordButton: {
    height: '25%',
    width: width / 2,
    borderRadius: 10,
    marginVertical: '5%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {height: 5, width: 5},
    shadowOpacity: 0.6,
    shadowColor: Colors.primary,
    shadowRadius: 5,
    elevation: 10,
    flexDirection:'column',
  },
  playButton: {
    height: '25%',
    width: width / 2,
    borderRadius: 10,
    marginVertical: '5%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {height: 5, width: 5},
    shadowOpacity: 0.6,
    shadowColor: Colors.primary,
    shadowRadius: 5,
    elevation: 10,
    flexDirection:'column',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.textColor,
    fontFamily: 'Titillium Web',
  },
  imageButton:{
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
  },
  textHeading:{
    fontWeight: '700',
    fontSize: 22,
    color: Colors.white,
    fontFamily: 'Titillium Web',
  }
});
