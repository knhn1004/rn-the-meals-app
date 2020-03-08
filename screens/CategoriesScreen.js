import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import NavHamburger from '../navigation/NavHamburger'

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: itemData.item.id },
          })
        }}
        color={itemData.item.color}
      />
    )
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoriesScreen

CategoriesScreen.navigationOptions = navData => ({
  headerTitle: 'Meal Categories',
  // eslint-disable-next-line
  headerLeft: () => <NavHamburger navData={navData} />,
})

CategoriesScreen.propTypes = {}
