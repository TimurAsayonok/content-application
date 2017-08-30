import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Header } from '../../components'


class AboutComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 20 }}>
        <Text style={{
          fontSize: 20,
          letterSpacing: 0.05,
          color: "#000000"
        }}>
          The application is designed as a test task for the company WP.pl. The main idea is to build applications for display. Data acquisition is also done by using queries via GraphQl. Used by Redux to manage the Store and react-native-navigation to navigate the application.
          Developed by Timur Asayonok
        </Text>
      </View>
    )
  }
}

export default AboutComponent;