import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { products, WIDTH } from "../../constants/content";

const List = ({ navigation }) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={products}
      contentContainerStyle={style.flatList}
      renderItem={({ item, index }) => (
        <View>
          <SharedElement id={`item.${item.id}.icon`}>
            <TouchableOpacity style={style.container} onPress={() => navigation.push("Infos", { item })} style={style.container} key={index}>
              <Image resizeMode="contain" style={style.itemContainer} source={{ uri: item.image }} />
            </TouchableOpacity>
          </SharedElement>
        </View>
      )}
    />
  )
}

export default List;

const style = StyleSheet.create({
  flatList: {
    padding: 24,
  },
  container: {
    width: "100%",
    marginBottom: 24,
    borderRadius: 24,
    backgroundColor: "rgba(0,0,0,0.1)",
    height: 200,
  },
  itemContainer: {
    height: "100%"
  }
})