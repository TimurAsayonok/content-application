import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Header } from '../../components'
import Styles from './styles'

class HelloComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, margin: 20 }}>
        <Text style={Styles.text}>
          This application is a test, serves as part of the portfolio. Done for the WP.pl company by Timur Asayonok.
          You can click the "Go To App" button to enter
        </Text>
        <TouchableOpacity 
          style={Styles.buttonContainer}
          onPress={() => { this.props.enterToApp(); }}
        >
          <Text style={Styles.buttonText}>Go To App</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HelloComponent;