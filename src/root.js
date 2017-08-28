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
        label: 'News',
        screen: 'HomeScreen', // this is a registered name for a screen
        title: 'News',
        icon: require('./images/iconNews0.png'),
        selectedIcon: require('./images/iconNews1.png'),
        navigatorStyle: {
          navBarHidden: true
        },
      },
      {
        label: 'Categories',
        screen: 'HomeScreen',
        title: 'Categories',
        icon: require('./images/iconList0.png'),
        selectedIcon: require('./images/iconList1.png'),
        navigatorStyle: {
          navBarHidden: true
        },
      },
      {
        label: 'About',
        screen: 'HomeScreen',
        title: 'About',
        icon: require('./images/iconOther0.png'),
        selectedIcon: require('./images/iconOther.png'),
        navigatorStyle: {
          navBarHidden: true
        },
      }
    ],
    tabsStyle: {
      tabBarButtonColor: 'grey', // change the color of the tab icons and text (also unselected)
      tabBarSelectedButtonColor: 'black', // change the color of the selected tab icon and text (only selected)
    }
  });
}

export const goToHelloScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'HelloScreen',
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
}

registerScreens(store, Provider);
goToHelloScreen();