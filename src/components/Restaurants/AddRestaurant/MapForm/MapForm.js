import { View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from "react-native-elements"
import { Modal } from "../../../Shared"
import * as Location from "expo-location"
import Toast from "react-native-toast-message"
import MapView from "react-native-maps"
import { styles } from '../MapForm/MapForm.styles'

export function MapForm(props) {
  const {show, close, formik} = props
  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
  })

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted"){
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "You must activate localization in your settings"
        })
        return
      }
      const locationTemp = await Location.getCurrentPositionAsync({})
      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      })
    })()
  }, [])

  const saveLocation = () => {
    formik.setFieldValue("location", location)
    close()
  }

  return (
    <Modal show={show} close={close}>  
      <MapView 
        initialRegion={location} 
        showsUserLocation={true} 
        style={styles.mapStyle}
        onRegionChange={(locationTemp) =>  setLocation(locationTemp)}
      >
        <MapView.Marker draggable coordinate = {location}/>
      </MapView>
      <View style = {styles.mapActions}>
        <Button 
          title="Save"
          containerStyle={styles.btnMapContainerSave}
          buttonStyle={styles.btnMapSave}
          onPress={saveLocation}
        />
        <Button 
          title="Cancel"
          containerStyle={styles.btnMapContainerCancel}
          buttonStyle={styles.btnMapCancel}
          onPress={close}
        />
      </View>
      
    </Modal>
  )
}