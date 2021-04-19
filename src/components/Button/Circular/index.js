import React from 'react';
import {Pressable, Image} from 'react-native';

import styles from './style';

const Circular = ({
  onPress,
  image,
  style,
  imageStyle,
  large = false,
  absolute,
}) => {
  return (
    <Pressable
      style={[
        large ? styles.largeContainer : styles.container,
        absolute && styles.absolute,
        style,
      ]}
      onPress={onPress}>
      <Image style={[styles.image, imageStyle]} source={image} />
    </Pressable>
  );
};

export default Circular;
