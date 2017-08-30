import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'

class Header extends Component {
  render() {
    console.log(this.props)
    return (     
      <View style={{
        flex: 1,
        marginTop: 25,
        marginLeft: 20,
        borderBottomColor: '#c9c9c9',
        borderBottomWidth: 1
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: "900",
          letterSpacing: 0.11,
          color: "#000000"
        }}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

export default Header;