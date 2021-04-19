import {StyleSheet} from 'react-native';
import {COLORS, FONTS, HEIGHT, SPACING, WIDTH} from '../../constants/theme';

export default StyleSheet.create({
  ...FONTS,
  ...SPACING,
  backImage: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: COLORS.darkPurple,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
