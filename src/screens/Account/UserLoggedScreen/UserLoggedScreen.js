import { View } from 'react-native'
import {Button} from "react-native-elements"
import React, {useState} from 'react'
import { InfoUser, AccountOptions } from '../../../components/Account'
import { styles } from './UserLogedScreen.styles'
import {getAuth, signOut} from "firebase/auth"
import {LoadingModal} from '../../../components'

export function UserLoggedScreen() {

  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("")
  const [reload, setReload] = useState(false)


  const onReload = () => {
    setReload(prevState => !prevState)
  }
  const logout = async () => {
    const auth = getAuth()
    await signOut(auth)
  }
  return (
    <View>
     <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
     <AccountOptions onReload= {onReload}/>
     <Button title = "Log Out" buttonStyle={styles.btnStyles} titleStyle = {styles.btnTextStyle} onPress = {logout}/>
     <LoadingModal show = {loading} text = {loadingText}/>
    </View>
  )
}