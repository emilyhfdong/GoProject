import React from "react"
import { BaseScreen, Button, RH } from "../../shared"
import { DatePickerIOS, View } from "react-native"
import { TripsContext } from "../trips"

export const SelectDateModal = ({ navigation }) => (
  <TripsContext.Consumer>
    {(value) => (
      <BaseScreen headerTitle="Select a date" isModal closeModal={() => navigation.pop()}>
        <View style={{ paddingTop: RH(10) }}>
          <DatePickerIOS
            date={value.state.date}
            onDateChange={(newDate) => value.actions.setDate(newDate)}
            minuteInterval={30}
          />
          <Button
            style={{ marginTop: RH(3) }}
            text="Select Date"
            onPress={() => navigation.pop()}
          />
        </View>
      </BaseScreen>
    )}
  </TripsContext.Consumer>
)
