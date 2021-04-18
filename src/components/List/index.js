import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {products} from '../../constants/content';

import style from './style';

const List = ({navigation}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={products}
      contentContainerStyle={style.flatList}
      renderItem={({item, index}) => (
        <SharedElement id={`item.${item.id}.icon`}>
          <TouchableOpacity
            style={style.container}
            onPress={() => navigation.push('Infos', {item})}
            key={index}>
            <Image
              resizeMode="contain"
              style={style.itemContainer}
              source={{uri: item.image}}
            />
          </TouchableOpacity>
        </SharedElement>
      )}
    />
  );
};

export default List;
