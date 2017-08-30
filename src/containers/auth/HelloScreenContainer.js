import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { Header, HelloComponent } from '../../components'
import { enterToApp } from '../../root'

class HelloScreenContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={false}
        >
          <Header title="Hello Screen" />
          <HelloComponent enterToApp={enterToApp}/>
        </ScrollView>
      </View>
    )
  }
}

export default HelloScreenContainer;