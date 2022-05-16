import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { 
    useFonts,
    Inter_400Regular,
    Inter_500Medium 
} from '@expo-google-fonts/inter'

import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import {
  Home
} from './src/screens/Home/index';
import themes from './src/styles/themes';

export default function App() {
  const [fontsLoaded] = useFonts(
    {
      Inter_400Regular,
      Inter_500Medium,
      Archivo_400Regular,
      Archivo_500Medium,
      Archivo_600SemiBold
    });
    

  if(!fontsLoaded){
    return  <AppLoading/>
  }
  return (
    <ThemeProvider theme={themes}>
      <Home/>
    </ThemeProvider>
  );
}

