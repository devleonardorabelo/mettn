import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {IMAGES} from '../../assets';
import {CircularButton} from '../Button';

import styles from './styles';

const Footer = ({leftOnPress, centerOnPress, rightOnPress}) => {
  const [heartActived, setHeartActived] = useState(false);

  const handleButtonOnPress = useCallback((state, value, action) => {
    state(value);
    action();
  }, []);

  return (
    <View style={styles.footerContainer}>
      <CircularButton onPress={leftOnPress} image={IMAGES.user} />
      <CircularButton
        onPress={() => {
          handleButtonOnPress(setHeartActived, !heartActived, centerOnPress);
        }}
        style={styles.centerButton}
        image={heartActived ? IMAGES.full_heart : IMAGES.heart}
        large
      />
      <CircularButton onPress={rightOnPress} image={IMAGES.star} />
    </View>
  );
};

export default Footer;
