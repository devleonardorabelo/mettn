import React from 'react';
import { View } from 'react-native';
import List from '../../components/List';

// import { Container } from './styles';

const Home = ({navigation}) => {
  return (
    <View>
      <List navigation={navigation}/>
    </View>
  )
}

export default Home;