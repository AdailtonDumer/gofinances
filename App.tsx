import React from 'react';
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';


import { Dashboard } from './src/pages/Dashboard';
import theme from './src/global/styles/theme'
import { StatusBar } from 'expo-status-bar';
import { Register } from './src/pages/Register';

export default function App() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!loaded)
    return <AppLoading/>

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent/>
      <Register />
    </ThemeProvider>
  );
}