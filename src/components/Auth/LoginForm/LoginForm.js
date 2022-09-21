import { View } from 'react-native'
import React, {useState} from 'react'
import {Input, Icon, Button} from "react-native-elements"
import {useFormik} from "formik"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import Toast from "react-native-toast-message"
import {screen} from "../../../utils"
import {initialValues, validationSchema} from "./LoginForm.data"
import {useNavigation} from "@react-navigation/native"

import {styles} from "./LoginForm.styles"


export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation()
    const onShowHidePassword = () => setShowPassword(prevState => !prevState)
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) =>{
            try{
                const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                )
                navigation.navigate(screen.account.account)
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Incorrect email or password"
                })
            }
        }
    })

  return (
    <View style = {styles.content}>
      <Input placeholder='Email'  onChangeText={(text) => formik.setFieldValue("email", text)} errorMessage={formik.errors.email} containerStyle = {styles.input} rightIcon = {<Icon type = "material-community" name = "at" iconStyle={styles.icon}/>}></Input>
      <Input placeholder='Password'  onChangeText={(text) => formik.setFieldValue("password", text)}  errorMessage={formik.errors.password}  containerStyle = {styles.input} secureTextEntry={showPassword ? false : true} rightIcon = {<Icon type = "material-community"  onPress = {onShowHidePassword} name = {showPassword ? "eye-off-outline" : "eye-outline"} iconStyle={styles.icon}/>}></Input>
      <Button title = 'Log In' containerStyle={styles.btnContainer} buttonStyle={styles.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
    </View>
  )
}