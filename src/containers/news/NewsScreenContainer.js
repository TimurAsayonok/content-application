import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native'
import ResponsiveImage from 'react-native-responsive-image';
import { Header, NewsComponent } from '../../components'
import { gql, graphql } from 'react-apollo'

const FeedQuery = gql`
  {
    articles(t: Article ){
      title
      id
      cid
      ts
      redacted_title
      img {
        url
        h
        w
      }
      entities {
        author
        description
        title
      }
      original_cid
      t
      tags
      author {
        img
        name
      }
      body(t: Plain){
        data
      }
    }
  }
`;

class NewsScreenContainer extends Component {
  render() {
    const { data } = this.props;
    const { articles } = data;
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {!this.props.service && <Header title="All News" />}
          <NewsComponent 
            articles={articles} 
            goToArticleScreen={(article) => {
              this.goToArticleScreen(article)
            }}
          />
        </ScrollView>
      </View>
    )
  }

  goToArticleScreen(article) {
    this.props.navigator.push({
      screen: 'ArticleScreen',
      title: `${article.t}`,
      backButtonTitle: '',
      navigatorStyle: {
        navBarButtonColor: '#000',
      },
      passProps: {
        article
      }
    });
  }
}

export default graphql(FeedQuery)(NewsScreenContainer);