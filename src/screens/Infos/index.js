import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {IMAGES} from '../../assets';
import {CircularButton, Footer} from '../../components';
import {COLORS, WIDTH} from '../../constants/theme';

import styles from './styles';

const Infos = ({navigation, route}) => {
  const [activeImage, setActiveImage] = useState(0);

  const {item} = route.params;

  return (
    <View style={styles.container}>
      <CircularButton
        image={IMAGES.back}
        onPress={() => navigation.pop()}
        style={styles.backButton}
      />
      <Carousel
        data={item.images}
        onSnapToItem={(index) => setActiveImage(index)}
        sliderWidth={WIDTH}
        itemWidth={WIDTH}
        renderItem={({item: eachImage}) => (
          <Image style={styles.imageContainer} source={eachImage} />
        )}
      />

      <View style={styles.content}>
        <Pagination
          dotsLength={item.images.length}
          activeDotIndex={activeImage}
          containerStyle={{
            position: 'absolute',
            alignSelf: 'center',
            marginTop: -48,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: COLORS.primaryPurple,
          }}
          inactiveDotStyle={{
            backgroundColor: COLORS.white,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <View style={styles.mb16}>
          <View style={styles.nameContainer}>
            <Text style={styles.h1}>{item.name}</Text>
            <View style={styles.onlineDot} />
          </View>
          <Text style={styles.strong}>{item.distance}</Text>
        </View>
        <Text style={styles.p}>{item.about}</Text>
      </View>
      <Footer />
    </View>
  );
};

export default Infos;

// import React, {useEffect} from 'react';
// import {SafeAreaView, Text} from 'react-native';
// import ListHeader from '../../components/ListHeader';
// import {products} from '../../constants/content';

// const Infos = ({route}) => {
//   const {item} = route.params;
//   useEffect(() => {
//     console.log(item);
//   }, [item]);

//   return (
//     <SafeAreaView>
//       <ListHeader products={products} />
//       <Text>Olá</Text>
//     </SafeAreaView>
//   );
// };

// Infos.sharedElements = () => {
//   return products.map((item) => `item.${item.id}.icon`);
// };

// export default Infos;
