import { View } from 'react-native'
import React from 'react'
import {styles} from "./NotFoundRestaurants.styles"
import {Text, Icon } from "react-native-elements"

export function NotFoundRestaurants() {
  return (
    <View style = {styles.content}>
        <Icon 
            type = "material-community"
            name = "alert-outline"
            size = {80}
        />
        <Text style = {styles.text}>No favorites yet!</Text>
    </View>
  )
}