import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkPurple,
    minHeight: Dimensions.get('window').height,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
});
