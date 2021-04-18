import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {IMAGES} from '../../assets';

import {Header, CircularButton, LargeImage, Footer} from '../../components';
import {COLORS} from '../../constants/theme';

import style from './style';

const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={COLORS.darkPurple} barStyle="light-content" />
      <Header
        leftChildren={<CircularButton onPress={() => {}} image={IMAGES.back} />}
        centerChildren={<Image source={IMAGES.logo} />}
        rightChildren={
          <CircularButton
            onPress={() => navigation.push('Chat')}
            image={IMAGES.chat}
          />
        }
      />
      <View style={style.content}>
        <LargeImage
          image={IMAGES.people}
          title="Sophia, 20"
          subtitle="6km near you"
        />
      </View>
      <Footer rightOnPress={() => navigation.push('Infos')} />
    </View>
  );
};

export default Home;
