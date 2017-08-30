import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Header } from '../../components';
import { enterToApp } from '../../root';

class HelloScreenContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={false}
          style={{
            backgroundColor: 'white',
          }}
        >
          <Header title="Hello Screen" />
          <View style={{ flex: 1, margin: 20}}>
            <Text style={{
              fontSize: 20,
              letterSpacing: 0.05,
              color: "#000000"}}>
              This application is a test, serves as part of the portfolio. Done for the WP.pl company by Timur Asayonok.
              You can click the "Go To App" button to enter
            </Text>
            <TouchableOpacity style={{
              flex: 1,
              height: 35,
              borderRadius: 4,
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: '#4bbf60',
              justifyContent: 'center',
            }}
              onPress={() => { enterToApp();}}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: 0.05,
                textAlign: "center",
                color: "#ffffff"}}
              >Go To App</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default HelloScreenContainer;