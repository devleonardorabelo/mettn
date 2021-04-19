import {StyleSheet} from 'react-native';
import {COLORS, ELEMENTS, FONTS, SPACING} from '../../constants/theme';

export default StyleSheet.create({
  ...SPACING,
  ...FONTS,
  ...ELEMENTS,
  container: {
    backgroundColor: COLORS.darkPurple,
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  conversationContainer: {
    backgroundColor: COLORS.secondaryPurple,
    marginBottom: 16,
    borderRadius: 32,
    flexDirection: 'row',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  infoContainer: {
    paddingLeft: 16,
    paddingRight: 24,
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
  },
  topInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
