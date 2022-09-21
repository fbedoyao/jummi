import {ScrollView } from 'react-native'
import React from 'react'
import { styles } from './AddRestaurantScreen.styles'
import { InfoForm, UploadImageForm, ImageRestaurant } from "../../../components/Restaurants/AddRestaurant"
import {Button} from "react-native-elements"
import { useFormik } from "formik"
import { initialValues, validationSchema } from './AddRestaurantScreen.data'
import { v4 as uuid} from "uuid"
import {doc, setDoc} from "firebase/firestore"
import {db} from "../../../utils"
import {useNavigation} from "@react-navigation/native"

export function AddRestaurantScreen() {
  const navigation = useNavigation()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid()
        newData.createdAt = new Date()
        const myDb = doc(db, "restaurants", newData.id)
        await setDoc(myDb, newData)

        navigation.goBack()

      } catch(error){
        console.log(error)
      }
    }
  })
  return (
    <ScrollView>
      <ImageRestaurant formik = {formik} />
      
      <InfoForm formik = {formik}/>

      <UploadImageForm formik = {formik}/>

      <Button 
        title = "Create Restaurant"
        buttonStyle = {styles.addRestaurant}
        onPress = {formik.handleSubmit}
        loading = {formik.isSubmitting}
      />
    </ScrollView>
  )
}