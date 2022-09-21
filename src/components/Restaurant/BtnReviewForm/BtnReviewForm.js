import { View } from 'react-native'
import React, {useState, useEffect } from 'react'
import {styles} from "./BtnReviewForm.styles"
import {Text, Button} from "react-native-elements"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigation} from "@react-navigation/native"
import {screen, db} from "../../../utils"
import {query, collection, where, onSnapshot} from "firebase/firestore"
import { size } from "lodash"

export function BtnReviewForm(props) {

    const { idRestaurant } = props

    const [hasLogged, setHasLogged] = useState(false)

    const navigation = useNavigation()

    const auth = getAuth()

    const [hasReview, setHasReview] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true : false)
        })
    }, [])

    useEffect(() => {
        if (hasLogged){
            const q = query(
                collection(db, "reviews"),
                where("idRestaurant", "==", idRestaurant),
                where("idUser", "==", auth.currentUser.uid)
            )

            onSnapshot(q, (snapshot) => {
                if(size(snapshot.docs) > 0 ) setHasReview(true)
            })
        }
    }, [hasLogged])

    const goToLogin = () => {
        navigation.navigate(screen.account.tab, {
            screen: screen.account.login
        })
    }

    const goToAddReview = () => {
        navigation.navigate(screen.restaurant.addReviewRestaurant, {
            idRestaurant,
        })
    }

    if(hasLogged && hasReview){
        return(
            <View style = {styles.content}>
            <Text style={styles.textSendReview}>You've already sent a review for this restaurant</Text>
            </View>
        )
    }

    return (
        <View style = {styles.content}>
           {hasLogged ? (
            <Button 
                title = "Leave a comment" 
                icon={{type: "material-community", name: 'square-edit-outline', color: "#00a680"}}
                buttonStyle = {styles.button}
                titleStyle = {styles.btnText}
                onPress = {goToAddReview}
            />
           ) : (
            <Text style = {styles.text} onPress={goToLogin}>
                For leaving comments you need to log in.
                <Text style = {styles.textClick}>Tap here to log in</Text>
            </Text>
           
           )}
        </View>
    )
}