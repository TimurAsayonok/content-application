import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'

import { Header, HelloComponent, CustomStatusBar } from 'components'
import { enterToApp } from 'root'
import { login } from 'actions/auth/auth'


class HelloScreenContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar />
        <ScrollView
          scrollEnabled={true}
        >
          <Header title="Hello Screen" />
          <HelloComponent enterToApp={() => {this.goToApp()}}/>
        </ScrollView>
      </View>
    )
  }

  goToApp() {
    this.props.dispatch(login());
    enterToApp();
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(HelloScreenContainer);