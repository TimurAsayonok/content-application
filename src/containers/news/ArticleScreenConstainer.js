import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native'
import { gql, graphql } from 'react-apollo'

// const FeedQuery = gql`
//   {
//     tileset(t: Article){
//       id
//       title
//       ts
//       url
//       author {
//         img
//         name
//       }
//     }
//   }
// `;

class ArticleScreenContainer extends Component {

  render() {
    const { article } = this.props;
    console.log(article);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={true}
          style={{
            backgroundColor: 'white',
          }}
        >
          <Image source={{ uri: article.img.url }} style={{ height: 350 }}/>
          <View style={{margin: 15}}>
            <Text style={{
              fontSize: 20,
              letterSpacing: 0.05,
              color: "#000000", fontWeight: '600'
            }}>{article.title}</Text>
            <Text style={{
              fontSize: 15,
              letterSpacing: 0.18,
              color: "#999"
            }}>one hour ago</Text>
            <Text style={{
              marginTop: 12,
              fontSize: 18,
              letterSpacing: 0.05,
              color: "#000000"}}>{article.body[0].data}</Text>
            <Text style={{
              fontSize: 15,
              letterSpacing: 0.18,
              color: "#999",
              marginTop: 5
            }}>Tags: {article.tags.toString()}</Text>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

export default ArticleScreenContainer;