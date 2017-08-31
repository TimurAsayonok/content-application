import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import moment from 'moment'
import Styles from './styles'

class ArticleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article } = this.props;
    const articleTime = moment.unix(article.ts).fromNow();
    return (
      <View>
        <Image source={{ uri: article.img.url }} style={Styles.articleImage} />
        <View style={Styles.articleContainer}>
          <Text style={Styles.articleTitleText}>{article.title}</Text>
          <Text style={Styles.articleTimeText}>{articleTime}</Text>
          <Text style={Styles.articleBodyText}>{article.body[0].data}</Text>
          <Text style={Styles.articleTegsText}>Tags: {article.tags.toString()}</Text>
        </View>
      </View>
    )
  }
}

ArticleComponent.propTypes = {
  article: PropTypes.object
}

export default ArticleComponent;