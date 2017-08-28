import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { registerScreens } from './containers'

export const store = configureStore();

export const enterToApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Map',
        screen: 'HomeScreen', // this is a registered name for a screen
        title: 'Map'
      },
      {
        label: 'Profile',
        screen: 'HomeScreen',
        title: 'Profile'
      }
    ]
  });
}
registerScreens(store, Provider);
enterToApp();