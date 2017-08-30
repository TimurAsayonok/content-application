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
import { Header } from '../../components'
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
  renderNews(article) {
    console.log(article)
    return(
      <Text>{article.title}</Text>
    )
  }

  render() {
    const { data } = this.props;
    const { articles } = data;
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={true}
          style={{
            backgroundColor: 'white',
          }}
        >
          {!this.props.service && <Header title="All News" />}
          <View style={{ flex: 1, margin: 12 }}>
            {articles && articles.map((article) => {
              return (
                <View key={article.id} style={{
                  marginBottom: 12, 
                  borderColor: '#c9c9c9', 
                  borderWidth: 1, 
                  borderRadius: 4,
                  shadowOffset: { width: 0, height: 2 },
                  shadowColor: '#ccc',
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 1,}}>
                  <TouchableOpacity onPress={() => { this.props.navigator.push({
                      screen: 'ArticleScreen',
                      title: `${article.t}`,
                      backButtonTitle: '',
                      navigatorStyle: {
                        navBarButtonColor: '#000',
                      },
                      passProps: {
                        article
                      }
                    })}}>
                    <View style={{
                      flex: 1, 
                      flexDirection: 'row', 
                      margin: 8,
                      }}>
                      <ResponsiveImage source={require('../../images/file.wp.png')} initWidth="40" initHeight="40" style={{ height: 40, width: 40, borderRadius: 20 }} />
                      <View style={{
                        paddingLeft: 10,
                        alignContent: 'center',
                        alignSelf: 'center'}}>
                        <Text style={{
                          fontSize: 15,
                          letterSpacing: 0.18,
                          fontWeight: '600',
                          color: "#000000"}}>by WP.pl</Text>
                        <Text style={{
                          fontSize: 15,
                          letterSpacing: 0.18,
                          color: "#999"}}>one hour ago</Text>
                      </View>
                    </View>
                    <View>
                      <Image source={{ uri: article.img.url }} style={{ height: 200, }} />
                      <Text style={{
                        fontSize: 15,
                        letterSpacing: 0.18,
                        margin: 5,
                        color: "#000000"
                      }}>{article.title}</Text>
                    </View>
                    
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default graphql(FeedQuery)(NewsScreenContainer);