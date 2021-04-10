import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarLabel : "Donate Books",
    }
  },
});
