import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {IMAGES} from '../../assets';

import {Header, CircularButton, LargeImage, Footer} from '../../components';
import {persons} from '../../constants/content';
import {COLORS, WIDTH} from '../../constants/theme';

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
      <Carousel
        sliderWidth={WIDTH}
        itemWidth={WIDTH - 48}
        layout="stack"
        layoutCardOffset="12"
        data={persons}
        renderItem={({item}) => (
          <LargeImage
            image={item.image}
            title={item.name}
            subtitle={item.distance}
            onPress={() => navigation.push('Infos', {item})}
          />
        )}
      />
      <Footer />
    </View>
  );
};

export default Home;
