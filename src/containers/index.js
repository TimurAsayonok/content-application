import { Navigation } from 'react-native-navigation'

import HomeScreenContainer from './HomeScreenContainer'
import HelloScreenContainer from './auth/HelloScreenContainer'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('HomeScreen', () => HomeScreenContainer, store, Provider);
  Navigation.registerComponent('HelloScreen', () => HelloScreenContainer, store, Provider);
}