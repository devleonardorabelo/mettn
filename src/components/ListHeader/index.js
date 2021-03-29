import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const ListHeader = ({products}) => {
  return (
    <View style={style.container}>
      {products.map((item) => (
        <SharedElement id={`item.${item.id}.icon`} key={item.id}>
          <Image resizeMode="contain" style={style.itemContainer} source={{ uri: item.image }} />
        </SharedElement>
      ))}
    </View>
  )
}

export default ListHeader;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 24
  },
  itemContainer: {
    height: 64,
    width: 64,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginRight: 16,
    borderRadius: 32,
    padding: 8
  }
})
