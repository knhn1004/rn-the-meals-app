import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'

const MealList = ({ listData, navigation }) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)

  const renderMealItem = itemData => {
    const isFav = favMeals.some(meal => meal.id === itemData.item.id)

    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav,
            },
          })
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={{ width: '95%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealList

MealList.propTypes = {}
