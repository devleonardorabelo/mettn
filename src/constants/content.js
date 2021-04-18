import {IMAGES} from '../assets';

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

export const persons = [
  {
    id: '1',
    image: IMAGES.people,
    name: 'Sophia, 20',
    distance: '6km near you',
    about:
      'Lotem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque a mi tincindunt dignissim',
  },
  {
    id: '2',
    image: IMAGES.people2,
    name: 'Emma, 24',
    distance: '9km near you',
    about:
      'Lotem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque a mi tincindunt dignissim',
  },
  {
    id: '3',
    image: IMAGES.people3,
    name: 'Ana, 21',
    distance: '12km near you',
    about:
      'Lotem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque a mi tincindunt dignissim',
  },
];
