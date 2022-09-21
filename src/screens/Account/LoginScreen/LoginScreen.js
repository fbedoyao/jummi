import { View, ScrollView } from 'react-native'
import React from 'react'
import { styles } from "./LoginScreen.styles"
import {Text, Image} from "react-native-elements"
import { useNavigation } from '@react-navigation/native'
import { screen } from "../../../utils"
import {LoginForm} from "../../../components/Auth"


export function LoginScreen() {

  const navigation = useNavigation();


  const goToRegister = () => {
    navigation.navigate(screen.account.register)
  }
  return (
    <ScrollView>
      <Image source = {require("../../../../assets/img/jummi-logo.png")} style = {styles.image} />
      <View style = {styles.content}>
        <LoginForm/>

        <Text style = {styles.textRegister}>
          Don't have an account? <Text style = {styles.btnRegister} onPress = {goToRegister}>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  )
}