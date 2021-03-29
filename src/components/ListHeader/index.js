import React from 'react';
import {View, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import style from './style';

const ListHeader = ({products}) => {
  return (
    <View style={style.container}>
      {products.map((item) => (
        <SharedElement id={`item.${item.id}.icon`} key={item.id}>
          <Image
            resizeMode="contain"
            style={style.itemContainer}
            source={{uri: item.image}}
          />
        </SharedElement>
      ))}
    </View>
  );
};

export default ListHeader;
