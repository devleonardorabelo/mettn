import React from 'react';
import {Pressable, Image} from 'react-native';

import styles from './style';

const Circular = ({onPress, image, style, large = false}) => {
  return (
    <Pressable
      style={[large ? styles.largeContainer : styles.container, style]}
      onPress={onPress}>
      <Image source={image} />
    </Pressable>
  );
};

export default Circular;
