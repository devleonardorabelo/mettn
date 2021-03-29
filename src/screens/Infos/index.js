import React from 'react';
import { View } from 'react-native';
import ListHeader from '../../components/ListHeader';
import {products} from "../../constants/content"

const Infos = () => {
  return (
    <View>
      <ListHeader products={products} />
    </View>
  )
}

Infos.sharedElements = () => {
  return products.map((item) => `item.${item.id}.icon`)
}


export default Infos;