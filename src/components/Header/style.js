import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 48 : 24,
    paddingHorizontal: 24,
    paddingBottom: 48,
    flexDirection: 'row',
    width: '100%',
  },
  content: {
    width: '33.33333%',
    justifyContent: 'center',
  },
  contentLeft: {
    alignItems: 'flex-start',
  },
  contentCenter: {
    alignItems: 'center',
  },
  contentRight: {
    alignItems: 'flex-end',
  },
});
