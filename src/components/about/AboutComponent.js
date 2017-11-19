import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Styles from './styles'


class AboutComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { goToLoginScreen } = this.props;
    return (
      <View style={Styles.constainer}>
        <Text style={Styles.text}>
          The application is designed as a test task for the company WP.pl. The main idea is to build applications for display. Data acquisition is also done by using queries via GraphQl. Used by Redux to manage the Store and react-native-navigation to navigate the application.
          Developed by Timur Asayonok
        </Text>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => { goToLoginScreen() }}
        >
          <Text style={Styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

AboutComponent.propTypes = {
  goToLoginScreen: PropTypes.func
}

export default AboutComponent;