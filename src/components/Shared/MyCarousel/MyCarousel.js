import { View, Text } from 'react-native'
import React from 'react'
import {styles} from "./MyCarousel.styles"
import {Image} from "react-native-elements"
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

//CarouselSnap from react-native-snap-carousel has been deprecated :(



export function MyCarousel(props) {
    const {arrayImages, width, height} = props




    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={height}
                autoPlay={false}
                data={arrayImages}
                renderItem={({ item }) => (
                    <Image source = {{uri: item}} style = {{height, width}} />
                )}
            />
        </View>
    );
}