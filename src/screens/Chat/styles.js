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
  profileContainer: {
    alignItems: 'center',
  },
  profileIcon: {
    marginBottom: 8,
  },
  profileImage: {
    borderRadius: 32,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  ownerCell: {
    backgroundColor: COLORS.secondaryPurple,
    alignSelf: 'flex-end',
    marginBottom: 16,
    borderRadius: 24,
    borderBottomRightRadius: 0,
    padding: 16,
  },
  otherCell: {
    backgroundColor: COLORS.primaryPurple,
    alignSelf: 'flex-start',
    marginBottom: 16,
    borderRadius: 24,
    padding: 16,
    borderBottomLeftRadius: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: COLORS.secondaryPurple,
    borderRadius: 100,
    flexShrink: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    ...FONTS.p,
    width: '85%',
    paddingVertical: 20,
  },
});
