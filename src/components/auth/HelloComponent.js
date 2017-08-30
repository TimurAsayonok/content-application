import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Styles from './styles'

class HelloComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { enterToApp } = this.props;
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>
          This application is a test, serves as part of the portfolio. Done for the WP.pl company by Timur Asayonok.
          You can click the "Go To App" button to enter
        </Text>
        <TouchableOpacity 
          style={Styles.buttonContainer}
          onPress={() => { enterToApp() }}
        >
          <Text style={Styles.buttonText}>Go To App</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

HelloComponent.propTypes = {
  enterToApp: PropTypes.func
}

export default HelloComponent;