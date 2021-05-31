import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import Home from './screens/Home';
import Infos from './screens/Infos';
import Chat from './screens/Chat';
import ChatList from './screens/ChatList';
import Match from './screens/Match';
import Profile from './screens/Profile';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 300}},
            close: {animation: 'timing', config: {duration: 300}},
          },
          gestureEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Infos" component={Infos} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
