import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import { Header, CategoriesComponent } from '../../components'
import { CATEGORIES } from '../../constants/commons'

class CategoriesScreenContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={false}
          style={{
            backgroundColor: 'white',
          }}
        >
          <Header title="Categories" />
          <CategoriesComponent categories={CATEGORIES} goToNewsScreen={(categoryName) => { this.goToNewsScreen(categoryName)}}/>
        </ScrollView>
      </View>
    )
  }

  goToNewsScreen(categoryName) {
    this.props.navigator.push({
      screen: 'NewsScreen',
      title: `${categoryName}`,
      backButtonTitle: '',
      navigatorStyle: {
        navBarButtonColor: '#000',
      },
      passProps: {
        service: categoryName
      }
    })
  }
}

export default CategoriesScreenContainer;