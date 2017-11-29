/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import Root from './src/root.js'
import './ReactotronConfig'

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

AppRegistry.registerComponent('ContentApplication', () => Root);