import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/authNavigator';
import AppNavigator from './src/navigation/appNavigator';

export default function App() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
