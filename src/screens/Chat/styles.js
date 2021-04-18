import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, ELEMENTS, FONTS, SPACING} from '../../constants/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  ...SPACING,
  ...FONTS,
  ...ELEMENTS,
  container: {
    backgroundColor: COLORS.darkPurple,
    flex: 1,
  },
});
