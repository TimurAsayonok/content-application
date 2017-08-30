import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { ArticleComponent } from '../../components'


class ArticleScreenContainer extends Component {

  render() {
    const { article } = this.props;

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