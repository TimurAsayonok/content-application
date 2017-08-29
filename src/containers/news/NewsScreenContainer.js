import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { gql, graphql } from 'react-apollo'

const FeedQuery = gql`
  {
    tileset(t: Article){
      id
      title
      ts
      url
      author {
        img
        name
      }
    }
  }
`;

class NewsScreenContainer extends Component {
  renderNews(article) {
    console.log(article)
    return(
      <Text>{article.title}</Text>
    )
  }

  render() {
    const { data } = this.props;
    const { tileset } = data;
    console.log(tileset);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={false}
          style={{
            backgroundColor: 'white',
          }}
        >
          <View style={{
            flex: 1,
            marginTop: 30,
            marginLeft: 20,
            borderBottomColor: '#c9c9c9',
            borderBottomWidth: 1
          }}>
            <Text style={{
              fontSize: 40,
              fontWeight: "900",
              letterSpacing: 0.11,
              color: "#000000"
            }}>
              All News
            </Text>
          </View>
          <View style={{ flex: 1, margin: 20 }}>
            {tileset && tileset.map((acticle) => {
              this.renderNews(acticle);
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default graphql(FeedQuery)(NewsScreenContainer);