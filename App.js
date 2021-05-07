import React from 'react';
import type {Node} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './src/components/Redux/store';
import LearningScreen from './src/components/LearningScreen/LearningScreen';
import HomeScreen from './src/components/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DisplayPhrases" component={LearningScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
