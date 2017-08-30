import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native'
import { ArticleComponent } from '../../components'


class ArticleScreenContainer extends Component {

  render() {
    const { article } = this.props;
    console.log(article);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ArticleComponent article={article} />
        </ScrollView>
      </View>
    )
  }
}

export default ArticleScreenContainer;