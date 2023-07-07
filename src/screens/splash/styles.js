import {Colors} from '../../assets/data/Colors';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        flex: 1,
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoStyle:{
        height: '50%',
            width: '50%',
            resizeMode: 'contain',
    },
    logoContainer:{
        height: height, width: width, justifyContent:'center', alignItems:'center'
    },
})