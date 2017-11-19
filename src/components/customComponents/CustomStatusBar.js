import React, { Component } from 'react'
import { View } from 'react-native'
import { ArticleComponent } from 'components'
import { Styles } from './styles'

class CustomStatusBar extends Component {

  render() {
    return (
      <View style={Styles.statusBar} />
    )
  }
}

export default CustomStatusBar;