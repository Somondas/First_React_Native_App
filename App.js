import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen"

export default function App() {
  return (
    // <WelcomeScreen></WelcomeScreen>
    <ViewImageScreen />
  )
}

