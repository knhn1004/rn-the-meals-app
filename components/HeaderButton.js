import React from 'react'
import PropTypes from 'prop-types'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { Platform } from 'react-native';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? '#fff' : Colors.primaryColor}
    />
  )
}

export default CustomHeaderButton

CustomHeaderButton.propTypes = {}
