import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createSharedElementStackNavigator} from "react-navigation-shared-element"

import Home from "./screens/Home"
import Infos from "./screens/Infos"

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Infos"
          component={Infos}
          options={() => ({
            transitionSpec: {
              open: {animation: "timing", config: {duration: 500}},
              close: {animation: "timing", config: {duration: 500}},
            },
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;