import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'


const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Favorite Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
  }
})

export default FavoritesScreen

FavoritesScreen.PropTypes = {

}
