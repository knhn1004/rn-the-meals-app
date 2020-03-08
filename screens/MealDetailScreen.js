import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import MealDetailListItem from './MealDetailListItem'
import { toggleFavorite } from '../store/actions/meals'

const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam('mealId')
  const isFav = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId),
  )
  const selectedMeal = availableMeals.find(meal => meal.id === mealId)

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  // updating inside of the detail page
  useEffect(() => {
    props.navigation.setParams({ isFav })
  }, [isFav])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients &&
        selectedMeal.ingredients.map((ing, index) => (
          <MealDetailListItem key={index}>{ing}</MealDetailListItem>
        ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps &&
        selectedMeal.steps.map((step, index) => (
          <MealDetailListItem key={index}>{step}</MealDetailListItem>
        ))}
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = navData => {
  const mealTitle = navData.navigation.getParam('mealTitle')
  const toggleFavorite = navData.navigation.getParam('toggleFav')
  const isFav = navData.navigation.getParam('isFav')

  const headerRight = () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Favorite"
        iconName={isFav ? 'ios-star' : 'ios-star-outline'}
        onPress={toggleFavorite}
      />
    </HeaderButtons>
  )

  return {
    headerTitle: mealTitle,
    headerRight,
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
})

export default MealDetailScreen

MealDetailScreen.propTypes = {}
