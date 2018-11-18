import React from "react"
import { View, TouchableOpacity } from "react-native"
import { BaseScreen, Button } from "../../shared"
import { FavouriteRoute } from "./favourite-route.component"

export const Favourites = ({ navigation }) => (
  <BaseScreen headerTitle="Favourites">
    <FavouriteRoute toDestination="Union" fromDestination="Unionville" lineColour="#794500" />
    <FavouriteRoute toDestination="Langstaff" fromDestination="Oriole" lineColour="#0099C7" />
    <Button text="Add a route" onPress={() => navigation.navigate("Trips")} />
  </BaseScreen>
)
