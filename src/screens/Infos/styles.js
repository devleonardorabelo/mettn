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
  imageContainer: {
    width: width,
    height: height / 1.5,
  },
  content: {
    paddingTop: 36,
    padding: 24,
    paddingBottom: 0,
    flexGrow: 1,
    marginTop: -24,
    backgroundColor: COLORS.darkPurple,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
