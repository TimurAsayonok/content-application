import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Styles from './styles'

class Header extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;