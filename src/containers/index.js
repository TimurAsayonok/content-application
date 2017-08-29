import { Navigation } from 'react-native-navigation'

import NewsScreenContainer from './news/NewsScreenContainer'
import HelloScreenContainer from './auth/HelloScreenContainer'
import CategoriesScreenContainer from './categories/CategoriesScreenContainer'
import AboutScreenContainer from './about/AboutScreenContainer'

export function registerScreens(store, Provider, client) {
  Navigation.registerComponent('NewsScreen', () => NewsScreenContainer, store, Provider, {client: client});
  Navigation.registerComponent('HelloScreen', () => HelloScreenContainer, store, Provider, { client: client });
  Navigation.registerComponent('CategoriesScreen', () => CategoriesScreenContainer, store, Provider, { client: client});
  Navigation.registerComponent('AboutScreen', () => AboutScreenContainer, store, Provider, { client: client });
}