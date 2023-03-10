import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/NavigationScreen';
import {FadeScreen} from './src/screens/FadeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};
