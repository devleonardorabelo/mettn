import {StyleSheet} from 'react-native';
import {COLORS, ELEMENTS, FONTS} from '../../../constants/theme';

export default StyleSheet.create({
  ...FONTS,
  ...ELEMENTS,
  background: {
    flexGrow: 1,
    width: '100%',
    flexDirection: 'column-reverse',
  },
  container: {
    borderRadius: 24,
  },
  content: {
    backgroundColor: COLORS.primaryPurple_50,
    padding: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
