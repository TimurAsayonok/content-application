import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import ResponsiveImage from 'react-native-responsive-image'
import Styles from './styles'

class NewsComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderArticle(article) {
    const { goToArticleScreen } = this.props;

    return(
      <View key={article.id} style={Styles.newsArticleContainer}>
        <TouchableOpacity onPress={() => {
          goToArticleScreen(article);
        }}>
          <View style={Styles.newsArticleHeader}>
            <ResponsiveImage 
              source={require('../../images/file.wp.png')} 
              initWidth="40" 
              initHeight="40" 
              style={Styles.logo} />
            <View style={Styles.newsArticleHeaderTextContainer}>
              <Text style={Styles.newsArticleHeaderTextAuthor}>by WP.pl</Text>
              <Text style={Styles.newsArticleHeaderTextTime}>one hour ago</Text>
            </View>
          </View>
          <View>
            <Image source={{ uri: article.img.url }} style={Styles.newsArticleImage} />
            <Text style={Styles.newsArticleTitle}>{article.title}</Text>
          </View>

        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { articles } = this.props;
    return (
      <View style={Styles.newsContainer}>
        {articles && articles.map((article) => {
          return this.renderArticle(article);
        })}
      </View>
    )
  }
}

NewsComponent.propTypes = {
  articles: PropTypes.array,
  goToArticleScreen: PropTypes.func
}

export default NewsComponent;