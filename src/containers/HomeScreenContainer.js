import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

class HomeScreenContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text style={{ margin: 50 }}>
          Hello HomeScreen
        </Text>
      </View>
    )
  }
}

export default HomeScreenContainer;