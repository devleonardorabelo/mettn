import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {IMAGES} from '../../assets';
import {CircularButton} from '../../components';

import styles from './styles';

const Match = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <ImageBackground
      style={styles.backImage}
      source={item.image}
      imageStyle={{opacity: 0.5}}
      blurRadius={10}>
      <CircularButton
        image={IMAGES.back}
        onPress={() => navigation.pop()}
        absolute
      />
      <View style={styles.container}>
        <Text style={styles.h2}>Match</Text>
        <Text style={styles.strong}>with</Text>
        <Text style={styles.h1}>{item.name}</Text>
        <CircularButton
          style={styles.mt16}
          image={IMAGES.chat}
          onPress={() => navigation.pop()}
        />
      </View>
    </ImageBackground>
  );
};

export default Match;
