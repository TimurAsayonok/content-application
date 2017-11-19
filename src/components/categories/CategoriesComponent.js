import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import ResponsiveImage from 'react-native-responsive-image'

import Styles from './styles'


class CategoriesComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderCategory(category) {
    const { goToNewsScreen } = this.props;
    return(
      <TouchableOpacity 
        onPress={() => {
          goToNewsScreen(category.name);
        }}
        key={category.id}
        style={Styles.categoryContainer}>
        <View style={Styles.categoryTestContainer}>
          <Text style={Styles.categoryText}>{category.name}</Text>
        </View>
        <ResponsiveImage source={require('../../images/icNavigateNext4D4D4D48Px.png')} style={Styles.image} initWidth="7.5" initHeight="12" />
      </TouchableOpacity>
    );
  }

  render() {
    const { categories } = this.props;
    return (
      <View style={Styles.container}>
        {categories.map((category) => {
          return this.renderCategory(category);
        })}

      </View>
    )
  }
}

CategoriesComponent.propTypes = {
  goToNewsScreen: PropTypes.func,
  categories: PropTypes.array
}

export default CategoriesComponent;