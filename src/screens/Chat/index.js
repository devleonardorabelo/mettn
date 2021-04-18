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
import {chatMessages} from '../../constants/content';
import {COLORS} from '../../constants/theme';

import style from './styles';

const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={COLORS.darkPurple} barStyle="light-content" />
      <Header
        leftChildren={
          <CircularButton
            onPress={() => navigation.goBack()}
            image={IMAGES.back}
          />
        }
        centerChildren={
          <View style={style.profileContainer}>
            <CircularButton
              onPress={() => navigation.push('Chat')}
              image={IMAGES.people}
              style={style.profileIcon}
              imageStyle={style.profileImage}
            />
            <View style={style.nameContainer}>
              <Text style={style.p}>Sophia</Text>
              <View style={style.onlineDot} />
            </View>
          </View>
        }
        rightChildren={
          <CircularButton
            onPress={() => navigation.push('Chat')}
            image={IMAGES.chat}
          />
        }
      />
      <View style={style.content}>
        <FlatList
          data={chatMessages}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <View style={[item.owner ? style.ownerCell : style.otherCell]}>
              <Text style={style.p}>{item.message}</Text>
            </View>
          )}
        />
        <View style={style.inputContainer}>
          <TextInput
            placeholderTextColor={COLORS.white}
            style={style.textInput}
            placeholder={'Escreva aqui...'}
          />
          <Pressable>
            <Image source={IMAGES.back} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
