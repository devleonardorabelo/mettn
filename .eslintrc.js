module.exports = {
  root: true,
  extends: '@react-native-community',

  rules: {
    'react-native/no-inline-styles': 'off',
    'react/no-did-mount-set-state': 'off',
    'no-useless-escape': 'off',
    'max-lines': [
      'error',
      {max: 1110, skipBlankLines: true, skipComments: true},
    ],
  },
};
