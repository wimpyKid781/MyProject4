import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Profile  from '../Screens/Profile';




export const AppStackNavigator = createStackNavigator({
  Profile : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);
