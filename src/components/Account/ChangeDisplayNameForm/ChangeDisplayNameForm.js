import { View, Text } from 'react-native'
import React from 'react'
import {styles} from "./ChangeDisplayNameForm.styles"
import {Input, Button} from "react-native-elements"
import {useFormik} from "formik"
import {initialValues, validationSchema} from "./ChangeDisplayNameForm.data"
import {getAuth, updateProfile} from "firebase/auth"
import Toast from "react-native-toast-message"

export function ChangeDisplayNameForm(props) {
  const {onClose, onReload} = props
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        const {displayName} = formValue
        const currentUser = getAuth().currentUser
        await updateProfile(currentUser, {displayName})
        onReload()
        onClose()
      } catch(error){
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error updating name and last name"
        })
      }
    }
  })
  return (
    <View style = {styles.content}>
      <Input placeholder='Name and last name' rightIcon={{type: "material-community", name: "account-circle-outline", color: '#c2c2c2'}} onChangeText={(text) => formik.setFieldValue("displayName", text )} errorMessage = {formik.errors.displayName}/>
      <Button title="Update" containerStyle={styles.btnContainer} buttonStyle={styles.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
    </View>
  )
}