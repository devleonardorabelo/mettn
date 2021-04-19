import React from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import {IMAGES} from '../../assets';

import {Header, CircularButton} from '../../components';
import {conversations} from '../../constants/content';
import {COLORS} from '../../constants/theme';

import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.darkPurple} barStyle="light-content" />
      <Header
        leftChildren={
          <CircularButton
            onPress={() => navigation.goBack()}
            image={IMAGES.back}
          />
        }
      />
      <View style={styles.content}>
        <Text style={[styles.h4, styles.mb24]}>Conversas</Text>
        <FlatList
          data={conversations}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <Pressable
              style={styles.conversationContainer}
              onPress={() => navigation.push('Chat', {item})}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={styles.infoContainer}>
                <View style={styles.topInfoContainer}>
                  <Text style={styles.p}>{item.name}</Text>
                  <Text style={styles.small}>{item.lastMessage.hour}</Text>
                </View>
                <Text style={styles.small}>
                  {item.lastMessage.text.slice(0, 30)}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
