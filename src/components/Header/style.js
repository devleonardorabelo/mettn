import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 48 : 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  content: {
    width: '33.33333%',
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
