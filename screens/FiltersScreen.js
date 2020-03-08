import React, { useState, useEffect, useCallback } from 'react'
import {useDispatch} from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import NavHamburger from '../navigation/NavHamburger'
import Colors from '../constants/Colors'
import HeaderButton from '../components/HeaderButton'
import {setFilters} from '../store/actions/meals'

const FilterSwitch = ({ label, value, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={{ fontSize: 22 }}>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'ios' ? '' : Colors.primaryColor}
        value={value}
        onValueChange={onChange}
      />
    </View>
  )
}

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setGlutenFree] = useState(false)
  const [isLactoseFree, setLactoseFree] = useState(false)
  const [isVegan, setVegan] = useState(false)
  const [isVegetarian, setVegetarian] = useState(false)

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={newVal => setGlutenFree(newVal)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={newVal => setLactoseFree(newVal)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={newVal => setVegan(newVal)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={newVal => setVegetarian(newVal)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
})

export default FiltersScreen

FiltersScreen.navigationOptions = navData => ({
  headerTitle: 'Filter Meals',
  // eslint-disable-next-line
  headerLeft: () => <NavHamburger navData={navData} />,
  // eslint-disable-next-line
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Save"
        iconName="ios-save"
        onPress={navData.navigation.getParam('save')}
      />
    </HeaderButtons>
  ),
})

FiltersScreen.propTypes = {}
