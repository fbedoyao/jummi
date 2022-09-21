import { View, ScrollView} from 'react-native'
import {Text, Button, Image} from "react-native-elements"
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'
import { styles } from "./UserGuestScreen.styles"




export function UserGuestScreen() {
  const navigation = useNavigation()
  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }
  return (
    <ScrollView centerContent = {true} style = {styles.content}>
      <Image source = {require("../../../../assets/img/user-guest.png")} style={styles.image} />
      <Text style = {styles.title}>Check your profile</Text>
      <Text style = {styles.decription}>Find the best restaurants, vote for your favorite ones, and share your experience.</Text>
      <Button title = "Log In" onPress={goToLogin} buttonStyle = {styles.btnStyle}/>
    </ScrollView>
  )
}