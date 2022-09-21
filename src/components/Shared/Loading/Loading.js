import { View, ActivityIndicator} from 'react-native'
import React from 'react'
import {styles} from "./Loading.styles"
import {Text} from "react-native-elements"

export function Loading(props) {

    const {show, text} = props

    if(!show) return null

    return (
        <View style = {styles.content}>
            <ActivityIndicator size = "large" color = "#00a680" />
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    )
}