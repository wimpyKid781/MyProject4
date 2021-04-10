import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import {Icon} from 'react-native-elements'
import CustomSideBarMenu  from './CustomSideBarMenu';
import Profile from '../Screens/Profile';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions :{
      drawerIcon: <Icon 
      name = 'home'
      type = 'fontawesome5'
      />
    }
    },
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions :{
      drawerIcon: <Icon 
      name = 'gift'
      type = 'font-awesome'
      />,
      drawerLabel: 'My Donations'
    }
  },
  
  Profile : {
    screen : Profile,
    navigationOptions :{
      drawerIcon: <Icon 
      name = 'settings'
      type = 'font-awesome'
      />,
      drawerLabel: 'Settings'
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })