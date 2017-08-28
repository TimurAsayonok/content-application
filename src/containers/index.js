import { Navigation } from 'react-native-navigation'

import HomeScreenContainer from './HomeScreenContainer'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('HomeScreen', () => HomeScreenContainer, store, Provider);
}