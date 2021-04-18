import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {IMAGES} from '../../assets';
import {CircularButton} from '../Button';

import styles from './styles';

const Footer = ({leftOnPress, rightOnPress}) => {
  const [heartActived, setHeartActived] = useState(false);

  const handleButtonOnPress = useCallback((state, value) => state(value), []);

  return (
    <View style={styles.footerContainer}>
      <CircularButton onPress={leftOnPress} image={IMAGES.deny} />
      <CircularButton
        onPress={() => handleButtonOnPress(setHeartActived, !heartActived)}
        style={styles.centerButton}
        image={heartActived ? IMAGES.full_heart : IMAGES.heart}
        large
      />
      <CircularButton onPress={rightOnPress} image={IMAGES.star} />
    </View>
  );
};

export default Footer;
