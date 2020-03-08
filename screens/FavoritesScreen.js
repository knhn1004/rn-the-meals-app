import React from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import NavHamburger from '../navigation/NavHamburger'

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return <MealList listData={favMeals} navigation={navigation} />
}

FavoritesScreen.navigationOptions = navData => ({
  headerTitle: 'Your Favorites',
  // headerStyle: {
  // backgroundColor: Platform.OS === 'android' ? Colors.accentColor : '',
  // },
  // eslint-disable-next-line
  headerLeft: () => <NavHamburger navData={navData} />,
})

export default FavoritesScreen

FavoritesScreen.propTypes = {}
