import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import configureStore from './store/configureStore'

const clientApollo = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://mobileapi.wp.pl/v1/graphql',
  }),
});


import { registerScreens } from './containers'

export const store = configureStore();

export const enterToApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'News',
        screen: 'NewsScreen', // this is a registered name for a screen
        title: 'News',
        icon: require('./images/iconNews0.png'),
        selectedIcon: require('./images/iconNews1.png'),
        navigatorStyle: {
          navBarHidden: true,
          statusBarBlur: true,
          navBarTranslucent: true,
          drawUnderNavBar: true
        },
      },
      {
        label: 'Categories',
        screen: 'CategoriesScreen',
        title: 'Categories',
        icon: require('./images/iconList0.png'),
        selectedIcon: require('./images/iconList1.png'),
        navigatorStyle: {
          navBarHidden: true,
          statusBarBlur: true,
          navBarTranslucent: true,
          drawUnderNavBar: true
        },
      },
      {
        label: 'About',
        screen: 'AboutScreen',
        title: 'About',
        icon: require('./images/iconOther0.png'),
        selectedIcon: require('./images/iconOther.png'),
        navigatorStyle: {
          navBarHidden: true,
          statusBarBlur: true,
          navBarTranslucent: true,
          drawUnderNavBar: true
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
        navBarHidden: true,
        statusBarBlur: true,
      }
    }
  });
}

registerScreens(store, ApolloProvider, clientApollo);
goToHelloScreen();