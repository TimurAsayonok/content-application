import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { Header, AboutComponent, CustomStatusBar } from '../../components'
import { logout } from '../../actions/auth/auth'
import { connect } from 'react-redux'
import { goToHelloScreen } from '../../root'


class AboutScreenContainer extends Component {
  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar />
        <ScrollView
          scrollEnabled={true}
        >
          <Header title="About" />
          <AboutComponent goToLoginScreen={() => { this.goToLoginScreen() }}/>
        </ScrollView>
      </View>
    )
  }

  goToLoginScreen() {
    this.props.dispatch(logout());
    goToHelloScreen();
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(AboutScreenContainer);