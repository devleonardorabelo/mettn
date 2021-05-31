import React from 'react';
import {Image, StatusBar, View, Text} from 'react-native';
import {IMAGES} from '../../assets';
import {CircularButton, Header} from '../../components';
import {COLORS} from '../../constants/theme';

import styles from './styles';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.darkPurple} barStyle="light-content" />
      <Header
        leftChildren={
          <CircularButton
            onPress={() => navigation.pop()}
            image={IMAGES.back}
          />
        }
        rightChildren={
          <CircularButton
            onPress={() => navigation.push('ChatList')}
            image={IMAGES.chat}
          />
        }
      />
      <View style={styles.container}>
        <Text>Content</Text>
      </View>
    </View>
  );
};

export default Profile;
