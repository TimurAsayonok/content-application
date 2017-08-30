import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { Header, AboutComponent } from '../../components'


class AboutScreenContainer extends Component {
  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={false}
        >
          <Header title="About" />
          <AboutComponent />
        </ScrollView>
      </View>
    )
  }
}

export default AboutScreenContainer;