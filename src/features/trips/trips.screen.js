import React from "react"
import { View } from "react-native"
import { BaseScreen, Text } from "../../shared"
import { Input } from "./input"
import { TripsContext } from "./trips.context"

export const Trips = ({ navigation }) => (
  <TripsContext.Consumer>
    {(value) => (
      <BaseScreen headerTitle="Plan a trip">
        <Input
          type="To"
          value={value.state.toStation.name}
          placeholder="Select a station"
          onPress={() => navigation.navigate("SelectStation")}
        />
        <Input type="From" placeholder="Select a station" />
        <Input
          type="Date"
          placeholder="Select a date"
          value={value.state.date.toString().slice(0, 15)}
          onPress={() => navigation.navigate("SelectDate")}
        />
      </BaseScreen>
    )}
  </TripsContext.Consumer>
)
