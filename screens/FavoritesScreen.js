import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import NavHamburger from '../navigation/NavHamburger'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    )
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FavoritesScreen

FavoritesScreen.propTypes = {}
