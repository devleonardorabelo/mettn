import React from 'react';
import { SafeAreaView } from 'react-native';
import List from '../../components/List';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <List navigation={navigation}/>
    </SafeAreaView>
  )
}

export default Home;