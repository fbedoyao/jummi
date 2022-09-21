import { View } from 'react-native'
import React from 'react'
import { Image } from "react-native-elements"
import { KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {styles } from "./RegisterScreen.styles"
import { RegisterForm } from '../../../components/Auth'

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image source = {require("../../../../assets/img/jummi-logo.png")} style = {styles.image}/>
      <View style = {styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}