import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import { gql, graphql } from 'react-apollo'
import ResponsiveImage from 'react-native-responsive-image';

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
const Categories = [
  {
    id: 1,
    name: 'Tech'
  },
  {
    id: 2,
    name: 'Gwiazdy'
  },
  {
    id: 3,
    name: 'Wiadomosci'
  }
]

class CategoriesScreenContainer extends Component {
  renderNews(article) {
    console.log(article)
    return (
      <Text>{article.title}</Text>
    )
  }

  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={false}
          style={{
            backgroundColor: 'white',
            marginLeft: 20,
          }}
        >
          <View style={{
            flex: 1,
            marginTop: 30,
            borderBottomColor: '#c9c9c9',
            borderBottomWidth: 1
          }}>
            <Text style={{
              fontSize: 40,
              fontWeight: "900",
              letterSpacing: 0.11,
              color: "#000000"
            }}>
              Categories
            </Text>
          </View>
          <View style={{flex: 1, marginBottom: 12}}>
            {Categories.map((category) => {
              return (
                <TouchableOpacity onPress={() => {
                  this.props.navigator.push({
                    screen: 'NewsScreen',
                    title: `${category.name}`,
                    backButtonTitle: '',
                    navigatorStyle: {
                      navBarButtonColor: '#000',
                    },
                    passProps: {
                      service: category.name
                    }
                  })
                  }} 
                  key={category.id} 
                  style={{
                  flexDirection: 'row', borderBottomColor: '#c9c9c9',
                  borderBottomWidth: 1, paddingTop: 10, paddingBottom: 10, alignItems:'center'}}>
                  <View style={{flex: 1, justifyContent:'flex-start'}}>
                    <Text style={{
                      fontSize: 21,
                      letterSpacing: 0.36, color: '#41424e'
                    }}>{category.name}</Text>
                  </View>
                  <ResponsiveImage source={require('../../images/icNavigateNext4D4D4D48Px.png')} style={{ justifyContent:'center', marginRight: 15}} initWidth="7.5" initHeight="12" />
                </TouchableOpacity>
              )
            })}

          </View>
        </ScrollView>
      </View>
    )
  }
}

export default CategoriesScreenContainer;