import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../screens/home';
import ReviewDetails from './../screens/reviewDetails';

import Header from './../shared/header';
import { StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();

export default HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle : {
        backgroundColor : '#bbb'
      }
    }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle : ()=> <Header
            navigation={navigation}
            title='GameZone'/>
        }}/>
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: 'Review Details'
        }}
      />
    </Stack.Navigator>
  )
}