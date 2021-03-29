import React from 'react';
import { SafeAreaView } from 'react-native';
import ListHeader from '../../components/ListHeader';
import {products} from "../../constants/content"

const Infos = () => {
  return (
    <SafeAreaView>
      <ListHeader products={products} />
    </SafeAreaView>
  )
}

Infos.sharedElements = () => {
  return products.map((item) => `item.${item.id}.icon`)
}

export default Infos;