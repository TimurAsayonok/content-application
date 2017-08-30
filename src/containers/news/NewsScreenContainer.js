import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native'
import ResponsiveImage from 'react-native-responsive-image';
import { Header, NewsComponent } from '../../components'
import { fetchNews } from '../../actions/news/news'
import { connect } from 'react-redux';

class NewsScreenContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, service } = this.props;
    console.log(this.props);
    dispatch(fetchNews(service));
  }

  renderSpinner() {
    return (<View style={{
      flex: 1, position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'}}>
      <ActivityIndicator />
    </View>);
  }

  render() {
    const { articles, fetching, service } = this.props;
    console.log(this.props);
    if (fetching) {
      return this.renderSpinner();
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {!service && <Header title="All News" />}
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