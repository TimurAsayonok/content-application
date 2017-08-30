import React, { Component, PropTypes } from 'react'
import {
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import { Header, NewsComponent } from '../../components'
import { fetchNews } from '../../actions/news/news'
import { connect } from 'react-redux'
import Styles from './styles'

class NewsScreenContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, service } = this.props;
    dispatch(fetchNews(service));
  }

  renderSpinner() {
    return (
      <View style={Styles.activityIndicatorContainer}>
        <ActivityIndicator />
      </View>);
  }

  render() {
    const { articles, fetching, service } = this.props;
    
    if (fetching) {
      return this.renderSpinner();
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {!service && <Header title="All News" />}
          <NewsComponent 
            articles={articles}
            fetching={fetching}
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

const mapStateToProps = (state) => {
  return {
    fetching: state.news.fetching,
    articles: state.news.articles
  }
}

NewsScreenContainer.protoTypes = {
  fetching: PropTypes.bool,
  articles: PropTypes.array,
  service: PropTypes.string
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(NewsScreenContainer);