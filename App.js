import React from "react";
import { useFonts  } from '@expo-google-fonts/inter';

import Navigator from './routes/drawer';

import {
  AppLoading
} from 'expo';


export default function App() {
  const [fontsLoaded]  = useFonts({
    'notable-regular' : require('./assets/fonts/Notable-Regular.ttf'),
    'holtwood-one-sc' : require('./assets/fonts/HoltwoodOneSC-Regular.ttf'),
    'museoModerno-regular' : require('./assets/fonts/MuseoModerno-Regular.ttf'),
    'museoModerno-bold' : require('./assets/fonts/MuseoModerno-Bold.ttf')
  });

  if(!fontsLoaded) {
    return (
      <AppLoading/>
    );
  }

  return (
      <Navigator/>
  ) 
}
