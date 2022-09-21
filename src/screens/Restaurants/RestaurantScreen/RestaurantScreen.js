import { ScrollView, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import {styles} from "./RestaurantScreen.styles"
import {doc, onSnapshot, collection, query, where, orderBy} from "firebase/firestore"
import {db} from "../../../utils"
import {MyCarousel, Loading, Map} from "../../../components/Shared"
import {Header, Info, BtnReviewForm, Reviews, BtnFavorite} from "../../../components/Restaurant"



const { width} = Dimensions.get("window")


export function RestaurantScreen(props) {
  const {route} = props

  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    setRestaurant(null)
    onSnapshot(doc(db, "restaurants", route.params.id), (doc) => {
      setRestaurant(doc.data())
    })
  }, [route.params.id])

  if(!restaurant) return <Loading show text="Loading"/>;

  
  return (
    <ScrollView style = {styles.content}>
      <MyCarousel arrayImages= {restaurant.images}  height={250} width={width}/>
      <Header restaurant = {restaurant}/>
      <Info restaurant = {restaurant}/>
      <BtnReviewForm idRestaurant={restaurant.id} />
      <Reviews idRestaurant = {restaurant.id} />
      <BtnFavorite idRestaurant = {restaurant.id}/>
    </ScrollView>
  )
  
}