import {IMAGES} from '../assets';

export const conversations = [
  {
    id: '1',
    avatar: IMAGES.people,
    name: 'Sophia',
    lastMessage: {
      text: 'Tudo bem? :D',
      hour: '16:12',
    },
    messages: [
      {
        id: '1',
        owner: true,
        message: 'Oii',
        hour: '16:11',
      },
      {
        id: '2',
        owner: false,
        message: 'Oi!',
        hour: '16:12',
      },
      {
        id: '3',
        owner: true,
        message: 'Tudo bem? :D',
        hour: '16:12',
      },
    ],
  },
  {
    id: '2',
    avatar: IMAGES.people2,
    name: 'Emma',
    lastMessage: {
      text: 'Oi',
      hour: '12:32',
    },
    messages: [
      {
        id: '1',
        owner: true,
        message: 'Oiiii',
        hour: '15:31',
      },
      {
        id: '2',
        owner: false,
        message: 'Oii',
        hour: '15:32',
      },
      {
        id: '3',
        owner: true,
        message: 'Quando a gente vai se ver?',
        hour: '15:26',
      },
    ],
  },
  {
    id: '3',
    avatar: IMAGES.people3,
    name: 'Ana',
    lastMessage: {
      text: 'Quando podemos nos ver?',
      hour: '14:54',
    },
    messages: [
      {
        id: '1',
        owner: true,
        message: 'Oii',
        hour: '16:11',
      },
      {
        id: '2',
        owner: false,
        message: 'Oi!',
        hour: '16:12',
      },
      {
        id: '3',
        owner: true,
        message: 'Tudo bem? :D',
        hour: '16:12',
      },
    ],
  },
];

export const persons = [
  {
    id: '1',
    avatar: IMAGES.people,
    images: [IMAGES.people, IMAGES.people2, IMAGES.people3],
    name: 'Sophia, 20',
    distance: '6km near you',
    match: false,
    about:
      'Lotem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque a mi tincindunt dignissim',
  },
  {
    id: '2',
    avatar: IMAGES.people2,
    images: [IMAGES.people, IMAGES.people2, IMAGES.people3],
    name: 'Emma, 24',
    match: false,
    distance: '9km near you',
    about:
      'Lotem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque a mi tincindunt dignissim',
  },
  {
    id: '3',
    avatar: IMAGES.people3,
    images: [IMAGES.people, IMAGES.people2, IMAGES.people3],
    name: 'Ana, 21',
    match: true,
    distance: '12km near you',
    about:
      'Lotem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque a mi tincindunt dignissim',
  },
];
