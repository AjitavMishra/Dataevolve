import {Colors} from '../../assets/data/Colors';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  flatlistContainer: {
    height: 300,
    width: width * 0.95,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginVertical: '5%',
  },
  headingText: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.textColor,
    fontFamily: 'Titillium Web',
    marginBottom:'2%',
  },
});
