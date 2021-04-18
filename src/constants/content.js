import {Dimensions} from 'react-native';

export const chatMessages = [
  {
    id: '1',
    owner: true,
    message: 'Oii',
  },
  {
    id: '2',
    owner: false,
    message: 'Oi!',
  },
  {
    id: '3',
    owner: true,
    message: 'Tudo bem? :D',
  },
];

const {width, height} = Dimensions.get('window');

export {width as WIDTH, height as HEIGHT};
