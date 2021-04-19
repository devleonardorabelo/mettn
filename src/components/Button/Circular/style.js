import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';

export default StyleSheet.create({
  container: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: COLORS.secondaryPurple,
  },
  largeContainer: {
    height: 96,
    width: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 48,
    backgroundColor: COLORS.secondaryPurple,
  },
  image: {
    maxHeight: 64,
    maxWidth: 64,
  },
  absolute: {
    position: 'absolute',
    zIndex: 10,
    left: 24,
    top: Platform.OS === 'ios' ? 48 : 24,
  },
});
