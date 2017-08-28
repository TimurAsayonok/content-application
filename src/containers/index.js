import { Navigation } from 'react-native-navigation'

import NewsScreenContainer from './news/NewsScreenContainer'
import HelloScreenContainer from './auth/HelloScreenContainer'

export function registerScreens(store, Provider, client) {
  Navigation.registerComponent('NewsScreen', () => NewsScreenContainer, store, Provider, {client: client});
  Navigation.registerComponent('HelloScreen', () => HelloScreenContainer, store, Provider, { client: client });
}