import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import style from './style';

const ListHeader = ({products}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={products}
      style={{padding: 24}}
      horizontal={true}
      contentContainerStyle={style.flatList}
      renderItem={({item, index}) => (
        <SharedElement id={`item.${item.id}.icon`} key={item.id}>
          <Image
            resizeMode="contain"
            style={style.itemContainer}
            source={{uri: item.image}}
          />
        </SharedElement>
      )}
    />
  );
};

export default ListHeader;
