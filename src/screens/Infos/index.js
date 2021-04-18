import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {IMAGES} from '../../assets';
import {CircularButton, Footer} from '../../components';

import styles from './styles';

const Infos = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={item.image}>
        <CircularButton
          image={IMAGES.back}
          onPress={() => navigation.pop()}
          style={styles.backButton}
        />
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mb16}>
          <View style={styles.nameContainer}>
            <Text style={styles.h1}>{item.name}</Text>
            <View style={styles.onlineDot} />
          </View>
          <Text style={styles.strong}>{item.distance}</Text>
        </View>
        <Text style={styles.p}>
          Lotem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pellentesque a mi tincindunt dignissim.
        </Text>
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
