import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import MealDetailListItem from './MealDetailListItem'

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
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

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  const headerRight = () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-star"
        onPress={() => {
          console.log('Marked as favorite!')
        }}
      />
    </HeaderButtons>
  )

  return {
    headerTitle: selectedMeal.title,
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
