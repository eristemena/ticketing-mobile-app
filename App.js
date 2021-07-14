import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigations/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
