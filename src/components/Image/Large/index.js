import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import styles from './style';

const Large = ({image, title, subtitle}) => {
  return (
    <ImageBackground
      imageStyle={styles.container}
      style={styles.background}
      resizeMode="cover"
      source={image}>
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text style={styles.h1}>{title}</Text>
          <View style={styles.onlineDot} />
        </View>
        <Text style={styles.p}>{subtitle}</Text>
      </View>
    </ImageBackground>
  );
};

export default Large;
