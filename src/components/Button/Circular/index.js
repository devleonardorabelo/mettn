import React from 'react';
import {Pressable, Image} from 'react-native';

import style from './style';

const Circular = ({onPress, image}) => {
  return (
    <Pressable style={style.container} onPress={onPress}>
      <Image source={image} />
    </Pressable>
  );
};

export default Circular;
