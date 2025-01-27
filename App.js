import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { PocketProvider } from './contexts/PocketContext';

export default function App() {
  return (
    <PocketProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PocketProvider>
  );
}
