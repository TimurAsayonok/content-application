import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import { gql, graphql } from 'react-apollo'

const FeedQuery = gql`
  {
    tileset(t: Article){
      id
      title
    }
  }
`;

class HomeScreenContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{flex: 1}}>
        <ScrollView
          scrollEnabled={false}
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 19,}}
        >
        <View style={{
          flex: 1,
          marginTop: 30,}}>
            <Text style={{
              fontSize: 40,
              fontWeight: "900",
              letterSpacing: 0.11,
              color: "#000000"}}>
              All News
            </Text>
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default graphql(FeedQuery)(HomeScreenContainer);