import {Dimensions} from 'react-native';

export const COLORS = {
  primaryPurple: '#C93DFA',
  primaryPurple_50: '#C93DFA80',
  secondaryPurple: '#2F2136',
  darkPurple: '#1F1524',
  gray: '#969696',
  red: '#FA3D3D',
  green: '#08C732',
  white: '#FFFFFF',
};

export const FONTS = {
  h1: {
    fontSize: 48,
    color: COLORS.white,
    fontFamily: 'Sansation',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 36,
    color: COLORS.white,
    fontFamily: 'Sansation',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 22,
    color: COLORS.white,
    fontFamily: 'Sansation',
    fontWeight: 'bold',
  },
  p: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'Sansation',
  },
  strong: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'Sansation',
    fontWeight: 'bold',
  },
  small: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.8,
    fontFamily: 'Sansation',
  },
};

export const SPACING = {
  mb4: {marginBottom: 4},
  mb8: {marginBottom: 8},
  mb16: {marginBottom: 16},
  mb24: {marginBottom: 24},
  mt4: {marginTop: 4},
  mt8: {marginTop: 8},
  mt16: {marginTop: 16},
  mt24: {marginTop: 24},
};

export const ELEMENTS = {
  onlineDot: {
    backgroundColor: COLORS.green,
    width: 10,
    height: 10,
    borderRadius: 6,
    marginLeft: 8,
  },
};

const {width, height} = Dimensions.get('window');

export {width as WIDTH, height as HEIGHT};
